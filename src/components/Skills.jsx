// src/components/Skills.jsx - Updated for job application
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillsData = [
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'Flutter', level: 75, color: '#02569B' },  // ADDED Flutter
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'Dart', level: 70, color: '#00B4AB' },    // ADDED Dart
    { name: 'Node.js', level: 70, color: '#339933' },  // Increased from 65
    { name: 'HTML5', level: 95, color: '#E34F26' },
    { name: 'CSS3', level: 90, color: '#1572B6' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Next.js', level: 70, color: '#000000' },
    { name: 'Tailwind CSS', level: 80, color: '#06B6D4' },
    { name: 'Git', level: 85, color: '#F05032' },
    { name: 'REST APIs', level: 75, color: '#FF6B6B' }  // Increased from 70
  ]

  const tools = [
    { name: 'VS Code' },
    { name: 'Android Studio' },  // ADDED for Flutter
    { name: 'GitHub' },
    { name: 'Figma' },
    { name: 'Postman' },
    { name: 'Vite' },
    { name: 'DevTools' },
    { name: 'Netlify' },
    { name: 'Vercel' }
  ]

  const frameworks = [
    { name: 'React Router' },
    { name: 'Redux' },
    { name: 'Framer Motion' },
    { name: 'Material-UI' },
    { name: 'Axios' },
    { name: 'Flutter Widgets' },  // ADDED
    { name: 'SASS/SCSS' },
    { name: 'Bootstrap' }
  ]

  return (
    <motion.section 
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          My <span className="highlight">Skills</span>
        </motion.h2>
        
        <motion.p 
          className="skills-intro"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Full Stack Developer specializing in React, Flutter, and Node.js. Building web and mobile applications with modern technologies.
        </motion.p>
        
        <div className="skills-content">
          {/* Left Column - Progress Bars */}
          <div className="skills-chart">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1, 
                        delay: index * 0.05 + 0.2,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Tools & Frameworks */}
          <div className="tools-frameworks">
            <div className="tools-section">
              <h3>Tools & IDEs</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="tool-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tool.name}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="frameworks-section">
              <h3>Libraries & Frameworks</h3>
              <div className="frameworks-grid">
                {frameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    className="framework-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {framework.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills