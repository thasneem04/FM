import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Headset, BarChart, Cpu } from 'lucide-react';

const AiSolutions = () => {
  const aiServices = [
    { title: "AI Chatbots for websites and WhatsApp", icon: <MessageSquare size={18} /> },
    { title: "AI customer support assistants", icon: <Headset size={18} /> },
    { title: "AI business analytics tools", icon: <BarChart size={18} /> },
    { title: "Custom AI applications for businesses", icon: <Cpu size={18} /> }
  ];

  return (
    <section id="ai-solutions" className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
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
                  alt="AI Smart Systems" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '20px',
                    display: 'block',
                    filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.1))'
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
              AI Solutions
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              SMART AI SYSTEMS FOR <span style={{ color: '#ED1C24' }}>MODERN BUSINESSES</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>FICTION MASTER</span> develops intelligent AI solutions that help businesses automate communication, generate content, and improve decision-making.
            </p>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Our AI systems are designed to save time, reduce manual work, and improve productivity across your business operations.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our AI Services Include:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                {aiServices.map((service, i) => (
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
              With AI integration, businesses can operate faster, smarter, and more efficiently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiSolutions;
