// src/components/About.jsx
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
    'JavaScript', 'React', 'Node.js', 'TypeScript', 'Python',
    'MongoDB', 'PostgreSQL', 'Express', 'Git', 'AWS',
    'Docker', 'CSS3', 'HTML5', 'REST APIs', 'GraphQL'
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
              Creating digital solutions with code and creativity
            </motion.h3>
            
            <motion.p variants={itemVariants}>
              I'm a passionate front-End developer with expertise in both front-end and 
              Basic back-end technologies. I love creating seamless user experiences and 
              robust server architectures.
            </motion.p>
            
            <motion.p variants={itemVariants}>
             I've worked on various projects ranging 
              from simple websites to complex web applications. I'm always eager to 
              learn new technologies and tackle challenging problems.
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
                  <h4>helen lemessa</h4>
                  <p>Front-End Developer</p>
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
                      <span>Client Satisfaction</span>
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