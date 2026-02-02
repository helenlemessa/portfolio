const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

/* =======================
   CORS Configuration
======================= */
app.use(cors({
  origin: '*', // For now, allow all origins. You can restrict later.
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json());

/* =======================
   Add Request Logger (for debugging)
======================= */
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});

/* =======================
   Test Route
======================= */
app.get('/api/test', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend is working',
    time: new Date().toISOString()
  });
});

/* =======================
   Contact Route
======================= */
app.post('/api/contact', async (req, res) => {
  console.log('Contact request received:', req.body);
  
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    console.log('Validation failed:', { name, email, subject, message });
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }

  try {
    // For Gmail, you need to use these settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log('SMTP connection verified');

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Message: ${subject}`,
      text: `
        New Portfolio Message
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent from your portfolio website
      `,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <small>Sent from your portfolio website</small>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('EMAIL ERROR DETAILS:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    
    // Check if it's an authentication error
    if (error.code === 'EAUTH') {
      console.log('Authentication failed. Check your email credentials.');
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message',
      details: error.message
    });
  }
});

/* =======================
   Health Check Route
======================= */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    emailConfigured: !!process.env.EMAIL_USER
  });
});

/* =======================
   Root Route
======================= */
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend Running',
    endpoints: {
      test: '/api/test',
      contact: '/api/contact (POST)',
      health: '/health'
    },
    timestamp: new Date().toISOString()
  });
});

/* =======================
   Error Handling Middleware
======================= */
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

/* =======================
   404 Handler
======================= */
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

/* =======================
   Server Start
======================= */
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log('==============================');
  console.log('🚀 SERVER STARTED');
  console.log('📍 Port:', PORT);
  console.log('📧 Email User:', process.env.EMAIL_USER || 'NOT SET');
  console.log('📨 Contact Email:', process.env.CONTACT_EMAIL || 'NOT SET');
  console.log('🌍 Environment:', process.env.NODE_ENV || 'development');
  console.log('==============================');
});