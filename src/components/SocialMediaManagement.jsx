import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube, Globe, CalendarCheck, PenTool, Users, TrendingUp, LineChart } from 'lucide-react';

const SocialMediaManagement = () => {
  const platforms = [
    { name: "Instagram", icon: <Instagram size={18} /> },
    { name: "Facebook", icon: <Facebook size={18} /> },
    { name: "LinkedIn", icon: <Linkedin size={18} /> },
    { name: "YouTube", icon: <Youtube size={18} /> },
    { name: "Other social platforms", icon: <Globe size={18} /> }
  ];

  const services = [
    { title: "Content planning and strategy", icon: <CalendarCheck size={18} /> },
    { title: "Post design, video creation, and publishing", icon: <PenTool size={18} /> },
    { title: "Audience engagement", icon: <Users size={18} /> },
    { title: "Growth strategies", icon: <TrendingUp size={18} /> },
    { title: "Performance tracking and analytics", icon: <LineChart size={18} /> }
  ];

  return (
    <section id="social-media" className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
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
              Social Media Management
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              BUILD A STRONG <span style={{ color: '#ED1C24' }}>PRESENCE</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Managing social media requires consistency, creativity, and strategy. Our social media management service helps businesses maintain a professional and engaging presence across all platforms.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>What We Manage:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                {platforms.map((platform, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem', 
                    color: '#444444', 
                    fontSize: '0.9rem',
                    padding: '0.6rem 1rem',
                    background: 'rgba(0, 0, 0, 0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}>
                    <div style={{ color: '#ED1C24' }}>{platform.icon}</div>
                    <span style={{ fontWeight: 600 }}>{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Services Include:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem' }}>
                {services.map((service, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#666666', fontSize: '0.95rem' }}>
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      background: 'rgba(237, 28, 36, 0.05)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#ED1C24',
                      flexShrink: 0
                    }}>
                      {service.icon}
                    </div>
                    <span style={{ fontWeight: 500 }}>{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ color: '#ED1C24', fontSize: '0.95rem', fontWeight: 600, padding: '1rem', background: 'rgba(237, 28, 36, 0.05)', borderRadius: '12px', borderLeft: '4px solid #ED1C24' }}>
              With the right strategy, social media becomes a powerful tool to grow your business.
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
              background: 'linear-gradient(135deg, #F8F8F8 0%, #FFFFFF 100%)',
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
                  src="/social_media_management.png" 
                  alt="Social Media Management" 
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

export default SocialMediaManagement;
