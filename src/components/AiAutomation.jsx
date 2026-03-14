import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Mail, Database, Settings, BarChart, Link } from 'lucide-react';

const AiAutomation = () => {
  const automationServices = [
    { title: "Workflow automation", icon: <Activity size={18} /> },
    { title: "CRM and lead management automation", icon: <Database size={18} /> },
    { title: "Email and notification automation", icon: <Mail size={18} /> },
    { title: "Business process automation", icon: <Settings size={18} /> },
    { title: "Data collection and reporting automation", icon: <BarChart size={18} /> },
    { title: "Integration between multiple platforms", icon: <Link size={18} /> }
  ];

  return (
    <section id="ai-automation" className="section-padding" style={{ background: '#FDFDFD', overflow: 'hidden' }}>
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
              Automation Solutions
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              AUTOMATE YOUR BUSINESS <span style={{ color: '#ED1C24' }}>WORKFLOWS</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Many businesses lose valuable time performing repetitive tasks. Our automation systems streamline daily operations and allow your team to focus on what truly matters.
            </p>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              <span style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>FICTION MASTER</span> builds automation tools that connect your business processes and eliminate unnecessary manual work.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Automation Services:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                {automationServices.map((service, i) => (
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
              Automation improves efficiency, reduces human errors, and helps businesses scale faster.
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
                  src="/ai_automation.png" 
                  alt="Automation Solutions" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '16px',
                    display: 'block',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
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

export default AiAutomation;
