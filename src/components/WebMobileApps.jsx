import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';

const WebMobileApps = () => {
  const features = [
    { title: "Custom Web Application Development", icon: <Monitor size={18} /> },
    { title: "Native & Cross-Platform Mobile Apps", icon: <Smartphone size={18} /> },
    { title: "Progressive Web Apps (PWA)", icon: <Layers size={18} /> },
    { title: "API Development & Integration", icon: <Code2 size={18} /> },
    { title: "Scalable Cloud Architecture", icon: <Cpu size={18} /> },
    { title: "High-Performance & Secure Systems", icon: <ShieldCheck size={18} /> }
  ];

  return (
    <section id="web-mobile-apps" className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ position: 'relative', order: window.innerWidth > 768 ? 1 : 2 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 100%)',
              borderRadius: '32px',
              padding: '1.5rem',
              boxShadow: '0 40px 80px rgba(0,0,0,0.06)',
              border: '1px solid rgba(237, 28, 36, 0.05)',
              position: 'relative',
              zIndex: 2,
              overflow: 'hidden'
            }}>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img 
                  src="/DS.png" 
                  alt="Web and Mobile App Development" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '20px',
                    display: 'block',
                    filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.1)) hue-rotate(180deg) saturate(1.5)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ order: window.innerWidth > 768 ? 2 : 1 }}
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
              Web & Mobile Apps
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              CUSTOM APPLICATIONS FOR <span style={{ color: '#ED1C24' }}>DIGITAL GROWTH</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>FICTION MASTER</span> develops scalable custom web and mobile applications tailored to your business needs, enhancing user experience and driving engagement.
            </p>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Whether you need a full enterprise web portal, a sleek customer-facing application, or a seamless e-commerce platform, our engineering team utilizes the latest modern frameworks to bring your digital vision to life.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Development Capabilities:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                {features.map((feature, i) => (
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
                    <div style={{ color: '#ED1C24' }}>{feature.icon}</div>
                    <span style={{ fontWeight: 500 }}>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p style={{ color: '#ED1C24', fontSize: '0.95rem', fontWeight: 600, padding: '1rem', background: 'rgba(237, 28, 36, 0.05)', borderRadius: '12px', borderLeft: '4px solid #ED1C24' }}>
              We ensure our applications are robust, fast, and primed for scalability to support your growing business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebMobileApps;
