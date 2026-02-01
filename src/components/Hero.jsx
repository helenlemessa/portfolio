// src/components/Hero.jsx - ULTRA SIMPLE MOBILE-FRIENDLY
import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)',
      padding: '80px 20px 4px',
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
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Hi, I'm <span style={{ color: '#6C63FF' }}>helen lemessa</span>
          </h1>
          
          <div style={{
            fontSize: 'clamp(1.3rem, 4vw, 2rem)',
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
                'Front-End Developer',
                2000,
                'React Specialist',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            marginBottom: '2.5rem',
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
            marginBottom: '3rem'
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

          {/* Code card - positioned below content on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              maxWidth: '280px',
              margin: '0 auto',
              animation: 'float 6s ease-in-out infinite'
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginBottom: '1rem', justifyContent: 'center' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA42' }}></div>
            </div>
            <pre style={{ 
              color: 'white', 
              fontFamily: 'Courier New, monospace', 
              fontSize: '0.9rem',
              margin: 0,
              textAlign: 'center',
              overflow: 'hidden'
            }}>
              {`function createMagic() {\n  return <AwesomeWebsite />;\n}`}
            </pre>
          </motion.div>
        </motion.div>
      </div>

      {/* Add the float animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @media (max-width: 768px) {
            section {
              padding: 100px 20px 40px;
              min-height: 90vh;
            }
          }
        `}
      </style>
    </section>
  )
}

export default Hero