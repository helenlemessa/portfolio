// src/components/Projects.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'property-management-dashboard',
      description: 'Frontend dashboard simulating a real property management system. Built with React, focused on UX, state management, and scalable component architecture.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      liveUrl: 'https://property-management-dashboard-umber.vercel.app',
      codeUrl: 'https://github.com/helenlemessa/property-management-dashboard',
      projectUrl: 'https://helenlemessa/property-management-demo.com',
      liveStatus: 'live'
    },
    {
      id: 2,
      title: 'Affordable Housing & Rental Platform',
      description: 'Fullstack platform for listing and renting properties across Ethiopia. Includes dynamic listings, user profiles, search/filter, and booking functionality.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveUrl: '', // No live demo yet
      codeUrl: 'https://github.com/helenlemessa/Affordable-Housing-Rental-Platform',
      projectUrl: 'https://housing-platform-demo.com',
      liveStatus: 'coming-soon' // <-- Coming Soon flag
    },
    {
      id: 3,
      title: 'TripGenerator',
      description: 'Frontend travel website that generates personalized trips based on user preferences with responsive UI and dynamic content rendering.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      liveUrl: 'https://trip-generator-eight.vercel.app/',
      codeUrl: 'https://github.com/helenlemessa/trip-generator',
      projectUrl: 'https://tripgenerator-demo.com',
      liveStatus: 'live'
    },
    {
      id: 4,
      title: 'CultureHub',
      description: 'Frontend platform showcasing Ethiopian art, and events with interactive galleries and smooth navigation. Includes basic backend integration for storing and retrieving some data.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Tailwind CSS', 'React Router','Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://culturehub-nine.vercel.app/',
      codeUrl: 'https://github.com/helenlemessa/culturehub',
      projectUrl: 'https://culturehub-demo.com',
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

  // Function to handle project card click
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
                  <div className="project-image-placeholder">
                    <div className="project-number">0{project.id}</div>
                    <div className="project-category">{project.category}</div>
                  </div>
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
