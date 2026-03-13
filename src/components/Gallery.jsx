import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const red = "#d10000";

  const projects = [
    { id: 1, category: 'Digital Marketing', title: 'Brand Campaign' },
    { id: 2, category: 'Web Development', title: 'E-commerce Platform' },
    { id: 3, category: 'Branding', title: 'Visual Identity' },
    { id: 4, category: 'Social Media', title: 'Content Strategy' },
    { id: 5, category: 'App Design', title: 'Mobile Experience' },
    { id: 6, category: 'SEO', title: 'Organic Growth' },
    { id: 7, category: 'UI/UX', title: 'User Interface' },
    { id: 8, category: 'Video', title: 'Motion Graphics' },
    { id: 9, category: 'Creative', title: 'Art Direction' },
  ];

  return (
    <section id="gallery" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '1rem', color: '#1A1A1A' }}>
            Our Work <span style={{ color: red }}>Speaks</span> for Itself
          </h2>
          <p style={{ color: '#666666', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            A glimpse of projects, designs, and digital experiences we’ve created.
          </p>
        </motion.div>

        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                background: '#F9F9F9',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
              whileHover="hover"
            >
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/* Placeholder using a pattern or solid color with icon-like text */}
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(45deg, #F0F0F0, #FFFFFF)',
                  color: '#CCC',
                  fontSize: '3rem',
                  fontWeight: 900
                }}>
                  {/* 0{project.id} */}
                </div>

                {/* Overlay */}
                <motion.div
                  variants={{
                    hover: { opacity: 1 }
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(209, 0, 0, 0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    textAlign: 'center',
                    color: '#FFF'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{project.title}</h3>
                </motion.div>
                
                {/* Image Zoom Effect */}
                <motion.div
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ position: 'absolute', inset: 0, zIndex: -1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;

