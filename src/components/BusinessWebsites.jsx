import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ShoppingCart, Smartphone, Search, ShieldCheck, Zap } from 'lucide-react';

const BusinessWebsites = () => {
  const services = [
    { title: "Custom Website Design", icon: <Layout size={18} /> },
    { title: "E-Commerce Platforms", icon: <ShoppingCart size={18} /> },
    { title: "Mobile-Responsive Layouts", icon: <Smartphone size={18} /> },
    { title: "SEO Optimization", icon: <Search size={18} /> },
    { title: "High-Security Standards", icon: <ShieldCheck size={18} /> },
    { title: "Fast Loading Speeds", icon: <Zap size={18} /> }
  ];

  return (
    <section id="business-websites" className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
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
              Business Website Systems
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              ELEVATE YOUR <span style={{ color: '#ED1C24' }}>DIGITAL PRESENCE</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We design and develop professional business websites and robust e-commerce platforms that strengthen your digital presence. By combining modern design with powerful functionality, we build digital storefronts that turn visitors into loyal customers.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Platform Features:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {services.map((service, i) => (
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
              A fast, secure, and beautiful website is the foundation of your digital success.
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
              boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
              border: '1px solid rgba(237, 28, 36, 0.05)',
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
                  src="/website_ecommerce_abstract.png" 
                  alt="Business Website Systems" 
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

export default BusinessWebsites;
