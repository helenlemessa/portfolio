// src/components/Hero.jsx - Updated title
import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)',
       padding: '60px 20px 20px',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Hi, I'm <span style={{ color: '#6C63FF' }}>Helen Lemessa</span>
          </h1>
          
          <div style={{
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            marginBottom: '1.5rem',
            color: '#6C63FF',
            fontWeight: '600',
            minHeight: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <TypeAnimation
              sequence={[
                'Frontend Developer | MERN Stack',
                2500,
                'React Specialist',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p style={{
            fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
            marginBottom: '2rem',
            color: '#8c8e9a',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            I create beautiful, functional web applications with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <motion.a 
              href="#projects" 
              style={{
                padding: '12px 30px',
                background: '#6C63FF',
                color: 'white',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block',
                fontSize: '1rem',
                minWidth: '140px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              style={{
                padding: '12px 30px',
                background: 'transparent',
                color: 'white',
                border: '2px solid #6C63FF',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block',
                fontSize: '1rem',
                minWidth: '140px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero