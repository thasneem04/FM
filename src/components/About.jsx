import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Side: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #F8F8F8 0%, #FFFFFF 100%)',
              borderRadius: '32px',
              padding: '2rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
              border: '1px solid rgba(237, 28, 36, 0.08)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '400px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ zIndex: 1, width: '100%' }}
              >
                <img
                  src="/about_ai_systems.png"
                  alt="AI Business Systems"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "350px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span style={{ 
              color: '#ED1C24', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              fontSize: '0.8rem',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Company Overview
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 900, 
              color: '#1A1A1A', 
              lineHeight: 1.1,
              marginBottom: '1.5rem'
            }}>
              Leading AI-Powered Business <span style={{ color: '#ED1C24' }}>Systems Company</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>FICTION MASTER</span> is a technology-driven company specializing in intelligent business systems, custom ERP development, and AI-powered automation infrastructure for startups and SMEs.
            </p>
            <p style={{ color: '#666666', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We help businesses operate smarter and scale efficiently through structured systems — not fragmented services. Our mission is to transition organizations to automated, scalable digital ecosystems.
            </p>

            <div style={{ marginBottom: '2.5rem', paddingLeft: '1.5rem', borderLeft: '4px solid #ED1C24' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Our Vision</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem' }}>
                To empower growing enterprises with intelligent digital infrastructure, automation, and scalable technology solutions.
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
              gap: '1.5rem',
              background: 'rgba(237, 28, 36, 0.02)',
              padding: '1.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(237, 28, 36, 0.08)'
            }}>
              <div>
                <h4 style={{ color: '#ED1C24', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>CORE EXPERTISE</h4>
                <div style={{ color: '#666666', fontSize: '0.85rem' }}>
                  Architecture, Automation, AI Integration
                </div>
              </div>
              <div>
                <h4 style={{ color: '#ED1C24', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>ENGINEERING</h4>
                <div style={{ color: '#666666', fontSize: '0.85rem' }}>
                  Scalable Apps, Cloud, ERP
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


