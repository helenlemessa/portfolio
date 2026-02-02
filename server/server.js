// server/server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

/* =======================
   Middleware
======================= */
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portfolio-eta-wheat-58.vercel.app'
  ],
  methods: ['GET', 'POST'],
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
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }

  try {
    // Create transporter (OUTLOOK / OFFICE365)
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Verify SMTP connection
    await transporter.verify();

    // Mail options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Message: ${subject}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <small>Sent from your portfolio website</small>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('EMAIL ERROR:', error);

    res.status(500).json({
      success: false,
      error: 'Failed to send message'
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
      contact: '/api/contact'
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
  console.log('📧 Email User:', process.env.EMAIL_USER ? 'SET' : 'NOT SET');
  console.log('📨 Contact Email:', process.env.CONTACT_EMAIL ? 'SET' : 'NOT SET');
  console.log('==============================');
});
