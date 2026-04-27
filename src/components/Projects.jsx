// src/components/Projects.jsx - FIXED VERSION
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import propertyImg from '../assets/images/propmanage.png'
import housingImg from '../assets/images/addisrent.png'
import servicehubImg from '../assets/images/servicehub.png'
import culturehubImg from '../assets/images/culturehub.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Property Management Dashboard',
      description: 'Frontend dashboard simulating a real property management system. Built with React, focused on UX, state management, and scalable component architecture.',
      image: propertyImg,
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      liveUrl: 'https://property-management-dashboard-umber.vercel.app',
      codeUrl: 'https://github.com/helenlemessa/property-management-dashboard',
      projectUrl: 'https://property-management-dashboard-umber.vercel.app',
      liveStatus: 'live'
    },
    {
      id: 2,
      title: 'Affordable Housing & Rental Platform',
      description: 'Fullstack platform for listing and renting properties across Ethiopia. Includes dynamic listings, user profiles, search/filter, and booking functionality.',
      image: housingImg,
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://addis-rent-fullstack.vercel.app/',
      codeUrl: 'https://github.com/helenlemessa/Addis-rent-fullstack',
      projectUrl: 'https://addis-rent-fullstack.vercel.app/',
      liveStatus: 'live'
    },
    {
      id: 3,
      title: 'ServiceHub Ethiopia',
      description: 'A full-stack service marketplace platform where users can buy and sell services, with features like real-time chat, dark mode, reposts, notifications, and comprehensive user profiles.',
      image: servicehubImg,
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      category: 'fullstack',
      liveUrl: 'https://servicehub-psi.vercel.app',
      codeUrl: 'https://github.com/helenlemessa/servicehub',
      projectUrl: 'https://servicehub-psi.vercel.app',
      liveStatus: 'live'
    },
    {
      id: 4,
      title: 'CultureHub',
      description: 'Frontend platform showcasing Ethiopian art and events with interactive galleries and smooth navigation. Includes basic backend integration for storing and retrieving some data.',
      image: culturehubImg,
      tags: ['React', 'Tailwind CSS', 'React Router', 'Node.js', 'Express', 'MongoDB'],
      category: 'frontend',
      liveUrl: 'https://culturehub-nine.vercel.app/',
      codeUrl: 'https://github.com/helenlemessa/culturehub',
      projectUrl: 'https://culturehub-nine.vercel.app/',
      liveStatus: 'live'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const handleProjectClick = (url, liveStatus) => {
    if (liveStatus === 'coming-soon') {
      alert('Live demo coming soon!')
      return
    }
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.section 
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={itemVariants}>
          My <span className="highlight">Projects</span>
        </motion.h2>
        
        <motion.div className="project-filters" variants={itemVariants}>
          {['all', 'frontend', 'fullstack'].map(filter => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
                onClick={() => handleProjectClick(project.projectUrl, project.liveStatus)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  {/* THIS IS WHERE THE IMAGE GOES - FIXED! */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveUrl || '#'} 
                        className={`project-link ${project.liveStatus === 'coming-soon' ? 'disabled' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (project.liveStatus === 'coming-soon') {
                            alert('Live demo coming soon!')
                          }
                        }} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {project.liveStatus === 'coming-soon' ? 'Coming Soon' : 'Live Demo'}
                      </a>
                      <a 
                        href={project.codeUrl} 
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Projects