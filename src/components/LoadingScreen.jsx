// src/components/LoadingScreen.jsx
import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div 
      className="loading-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="loading-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Portfolio<span>.</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           Front-End Developer
        </motion.p>
        
        <div className="loading-dots">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              variants={dotVariants}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen