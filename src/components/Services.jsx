import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, ShoppingBag, Zap, Code } from 'lucide-react';

const services = [
  { 
    title: 'Business Website Systems', 
    icon: <Monitor />,
    desc: 'We design and develop professional business websites that strengthen your digital presence and build customer trust.'
  },
  { 
    title: 'ERP Systems', 
    icon: <ShoppingBag />,
    desc: 'We implement smart ERP solutions that connect and streamline your business operations in one centralized system.'
  },
  { 
    title: 'Web & Mobile Apps', 
    icon: <Smartphone />,
    desc: 'We develop custom web and mobile applications tailored to your business needs, enhancing user experience.'
  },
  { 
    title: 'AI Automation', 
    icon: <Code />,
    desc: 'We develop intelligent automation systems using AI to optimize workflows and provide data-driven insights.'
  },
  { 
    title: 'SFMS Solution', 
    icon: <Zap />,
    desc: 'Advanced field service management solutions to organize and monitor service operations efficiently.'
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding" style={{ background: '#F8F8F8' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
            Digital Infrastructure Solutions
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 900 }}>
            Our Core <span style={{ color: '#ED1C24' }}>Services</span>
          </h2>
          <p style={{ color: '#666666', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            We design and implement end-to-end digital infrastructure and intelligent automation systems.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{
                padding: '2.5rem 2rem',
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid rgba(237, 28, 36, 0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                background: 'rgba(237, 28, 36, 0.05)',
                padding: '1rem',
                borderRadius: '16px',
                color: '#ED1C24',
                width: 'fit-content',
                marginBottom: '1.5rem'
              }}>
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


