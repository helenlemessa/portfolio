// src/components/Footer.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Replace these with your actual profile URLs
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/helenlemessa', // Replace with your GitHub URL
      icon: '🐙' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/helen-lemessa/', // Replace with your LinkedIn URL
      icon: '💼' 
    },
    { 
      name: 'Twitter', 
      url: '#', // Keep or replace with your Twitter URL
      icon: '🐦' 
    },
    { 
      name: 'Instagram', 
      url: '#', // Keep or replace with your Instagram URL
      icon: '📷' 
    }
  ]

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-info"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Let's Build Something Amazing</h3>
            <p>
              Ready to bring your ideas to life? Let's connect and discuss 
              how we can work together on your next project.
            </p>
            <motion.a 
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  whileHover={{ 
                    scale: 1.2,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>&copy; {currentYear} Helen Lemessa. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer