// src/components/About.jsx - Updated for job application
import React from 'react'
import { motion } from 'framer-motion'
import profileImage from "../assets/profile.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const skills = [
    'JavaScript', 'React', 'Flutter', 'Node.js', 'TypeScript', 
    'MongoDB', 'Express', 'Dart', 'Git', 'Tailwind CSS', 
    'REST APIs', 'HTML5', 'CSS3', 'Figma'
  ]

  return (
    <motion.section 
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={itemVariants}>
          About <span className="highlight">Me</span>
        </motion.h2>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h3 variants={itemVariants}>
              Full Stack Developer | React, Flutter & Node.js
            </motion.h3>
            
            <motion.p variants={itemVariants}>
              I'm a passionate Full Stack Developer specializing in React and Flutter, 
              with full MERN stack capabilities. I create seamless user experiences 
              across web and mobile platforms while understanding the entire development ecosystem.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              With expertise in both frontend and backend technologies, I build 
              complete web and mobile applications from database to user interface. 
              I've worked on various projects including web dashboards, fullstack platforms, 
              real-time chat applications, and cross-platform mobile apps with Flutter.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              When I'm not coding, you can find me exploring new tech trends, 
              contributing to open-source projects, or enjoying outdoor activities.
            </motion.p>
            
            <motion.div className="skills" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  className="skill"
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            variants={itemVariants}
          >
            <div className="image-container">
              <div className="profile-card">
                <div className="profile-image">
                  <div className="image-placeholder">
                   <img src={profileImage} alt="Helen Lemessa" className="profile-img" />
                  </div>
                </div>
                <div className="profile-info">
                  <h4>Helen Lemessa</h4>
                  <p>Full Stack Developer | MERN + Flutter</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <strong>5+</strong>
                      <span>Projects</span>
                    </div>
                    <div className="stat">
                      <strong>1+</strong>
                      <span>Years</span>
                    </div>
                    <div className="stat">
                      <strong>100%</strong>
                      <span>Commitment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About