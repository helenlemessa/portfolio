// server/server.js - UPDATED VERSION
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portfolio-eta-wheat-58.vercel.app/'
  ],
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Server is working perfectly!', 
    timestamp: new Date().toISOString(),
    status: 'OK'
  });
});

// Contact endpoint WITH REAL EMAIL
app.post('/api/contact', async (req, res) => {
  console.log('📧 Contact form submitted:', req.body);
  
  const { name, email, subject, message } = req.body;
  
  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'All fields are required'
    });
  }

  try {
    console.log('🔐 Attempting to send email...');
    console.log('Using email:', process.env.EMAIL_USER);
    console.log('Password length:', process.env.EMAIL_PASS?.length);
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true, // This will show detailed SMTP logs
      logger: true
    });

    // Verify connection
    console.log('🔄 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent from your portfolio website</small></p>
      `
    };

    // Send email
    console.log('📤 Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully! Message ID:', result.messageId);
    console.log('✅ Response:', result.response);

    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send email',
      details: error.message,
      code: error.code
    });
  }
});

// Test email configuration endpoint
app.post('/api/test-email-setup', async (req, res) => {
  try {
    console.log('🧪 Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET');
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.verify();
    console.log('✅ Email configuration test PASSED');
    
    res.json({ 
      success: true,
      message: 'Email configuration is correct!',
      user: process.env.EMAIL_USER,
      contact: process.env.CONTACT_EMAIL
    });
  } catch (error) {
    console.error('❌ Email configuration test FAILED:', error.message);
    res.status(500).json({ 
      success: false,
      error: 'Email configuration failed',
      details: error.message 
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend Server is Running! 🚀',
    endpoints: {
      test: 'GET /api/test',
      contact: 'POST /api/contact',
      testEmail: 'POST /api/test-email-setup'
    },
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log('🚀 ===== SERVER STARTED =====');
  console.log(`📍 Port: ${PORT}`);
  console.log(`📧 Email: ${process.env.EMAIL_USER}`);
  console.log(`🔑 Password: ${process.env.EMAIL_PASS ? 'Set (' + process.env.EMAIL_PASS.length + ' chars)' : 'NOT SET'}`);
  console.log('✅ Server is ready!');
  console.log('==============================');
});