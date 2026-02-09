import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1rem' }}>
            Meet The <span style={{ color: '#C4161C' }}>Masters</span>
          </h2>
          <p style={{ color: '#666666', fontSize: '1.2rem' }}>We are a team of visionaries.</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[1, 2, 3, 4].map((member) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: member * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{
                height: '350px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Image Placeholder */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(to top, rgba(0,0,0,0.9), transparent)`, // Just a generic placeholder for now
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                transition: 'transform 0.5s'
              }} 
              />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FFFFFF' }}>To Be Added</h3>
                <p style={{ color: '#C4161C', fontSize: '0.9rem', fontWeight: 500 }}>Specialist</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
