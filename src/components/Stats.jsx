import React from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const steps = [
    { num: '1', title: 'Business Requirement Analysis' },
    { num: '2', title: 'System Architecture Planning' },
    { num: '3', title: 'Development & Infrastructure' },
    { num: '4', title: 'AI & Automation Integration' },
    { num: '5', title: 'Deployment, Support & Optimization' },
  ];

  return (
    <section id="process" className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '3rem' }}>
          Our <span style={{ color: '#C4161C' }}>Process</span>
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '2rem',
          position: 'relative',
          padding: '2rem 0'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                flex: '1 1 180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 2
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: '#C4161C',
                color: '#FFFFFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 800,
                marginBottom: '1rem',
                boxShadow: '0 10px 20px rgba(196, 22, 28, 0.2)'
              }}>
                {step.num}
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', padding: '0 10px' }}>
                {step.title}
              </h4>
            </motion.div>
          ))}
          
          {/* Connector line for desktop */}
          <div style={{
            position: 'absolute',
            top: '50px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'rgba(196, 22, 28, 0.1)',
            zIndex: 1,
            display: window.innerWidth > 768 ? 'block' : 'none'
          }} />
        </div>

        <div style={{ marginTop: '5rem' }}>
           <p style={{ fontSize: '1.25rem', color: '#666666' }}>
             We build <span style={{ color: '#C4161C', fontWeight: 700 }}>scalable</span> systems designed for long-term <span style={{ color: '#C4161C', fontWeight: 700 }}>Sustainability</span>.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
