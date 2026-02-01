// src/components/Header.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          my Portfolio<span>.</span>
        </motion.div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header