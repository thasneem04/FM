import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Users, Share2, Target, Briefcase, FileText } from 'lucide-react';

const DigitalMarketing = () => {
  const marketingServices = [
    { title: "Social Media Management", icon: <Share2 size={18} /> },
    { title: "Social Media Content Creation", icon: <FileText size={18} /> },
    { title: "Paid Advertising Campaigns", icon: <Target size={18} /> },
    { title: "Brand Development", icon: <Briefcase size={18} /> },
    { title: "Lead Generation Strategies", icon: <Users size={18} /> },
    { title: "Content Marketing", icon: <Megaphone size={18} /> }
  ];

  return (
    <section id="digital-marketing" className="section-padding" style={{ background: '#FDFDFD', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span style={{ 
              color: '#ED1C24', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              fontSize: '0.85rem',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Digital Marketing
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              GROW YOUR BRAND WITH POWERFUL <span style={{ color: '#ED1C24' }}>DIGITAL MARKETING</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>FICTION MASTER</span> provides result-driven digital marketing strategies that help businesses increase visibility, reach more customers, and grow their brand online.
            </p>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Our marketing approach combines creativity, data analysis, and modern marketing tools to deliver measurable results.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Digital Marketing Services:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                {marketingServices.map((service, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    color: '#444444', 
                    fontSize: '0.95rem',
                    padding: '0.8rem 1.2rem',
                    background: 'rgba(237, 28, 36, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(237, 28, 36, 0.05)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ color: '#ED1C24' }}>{service.icon}</div>
                    <span style={{ fontWeight: 500 }}>{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ color: '#ED1C24', fontSize: '0.95rem', fontWeight: 600, padding: '1rem', background: 'rgba(237, 28, 36, 0.05)', borderRadius: '12px', borderLeft: '4px solid #ED1C24' }}>
              We help businesses build a strong online presence and turn audiences into loyal customers.
            </p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #FDFDFD 0%, #FFFFFF 100%)',
              borderRadius: '24px',
              padding: '1.2rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
              border: '1px solid rgba(237, 28, 36, 0.08)',
              position: 'relative',
              zIndex: 2,
              overflow: 'hidden'
            }}>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img 
                  src="/business_growth_intro.png" 
                  alt="Digital Marketing Strategies" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '16px',
                    display: 'block',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
