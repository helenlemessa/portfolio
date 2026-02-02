// src/components/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace with your backend endpoint
      const response = await axios.post('https://portfolio-r7d5.onrender.com/api/contact', formData)
      
      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section 
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In <span className="highlight">Touch</span>
        </motion.h2>
        
        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's talk about your project</h3>
            <p>
              I'm always interested in hearing about new opportunities and 
              discussing how we can work together to bring your ideas to life.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>helenlemessa1919@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+251-936187514</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p> Addis Ababa</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div className="form-group" variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>
            
            <motion.button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {submitStatus === 'success' && (
              <motion.div 
                className="alert success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="alert error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact