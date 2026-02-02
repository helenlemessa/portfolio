const express = require('express');
const cors = require('cors');
const { Resend } = require('resend'); // Change from nodemailer to resend
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

/* =======================
   CORS Configuration
======================= */
app.use(cors({
  origin: ['https://portfolio-eta-wheat-58.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

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
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain later
      to: [process.env.CONTACT_EMAIL],
      reply_to: email,
      subject: `Portfolio Message: ${subject}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <small>Sent from your portfolio website</small>
      `,
      text: `
        New Portfolio Message
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent from your portfolio website
      `
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    console.log('Email sent successfully:', data?.id);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message',
      details: error.message
    });
  }
});

/* =======================
   Root Route
======================= */
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend Running',
    endpoints: {
      test: '/api/test',
      contact: '/api/contact (POST)'
    }
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
  console.log('📧 Using Resend API');
  console.log('==============================');
});