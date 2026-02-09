import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, PenTool, TrendingUp, Share2, Clapperboard, Video, 
  Monitor, Smartphone, ShoppingBag, Terminal, Zap, Code 
} from 'lucide-react';

const services = [
  { title: 'Branding & Visual Identity', icon: <Palette /> },
  { title: 'Graphic Design', icon: <PenTool /> },
  { title: 'Digital Marketing Strategy', icon: <TrendingUp /> },
  { title: 'Social Media Management', icon: <Share2 /> },
  { title: 'Content Creation (Reels & Shorts)', icon: <Clapperboard /> },
  { title: 'Video Editing & Motion Graphics', icon: <Video /> },
  { title: 'Website Design & Development', icon: <Monitor /> },
  { title: 'UI/UX Design', icon: <Smartphone /> }, // Using Smartphone as proxy for UI/UX mobile/web
  { title: 'E-commerce Solutions', icon: <ShoppingBag /> },
  { title: 'App Development', icon: <Terminal /> },
  { title: 'Performance Marketing', icon: <Zap /> },
  { title: 'AI-Powered Creative Content', icon: <Code /> }, // Using Code for AI
  { title: 'Full Stack Web Development', icon: <Monitor /> }, // Repeat icon or similar
];

const Services = () => {
  return (
    <section id="services" className="section-padding" style={{ background: '#F8F8F8', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1rem' }}>
            Our <span style={{ color: '#C4161C' }}>Expertise</span>
          </h2>
          <p style={{ color: '#666666', fontSize: '1.2rem' }}>Every tool you need to dominate the market.</p>
        </motion.div>

        <div className="services-grid" style={{
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
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: '0 20px 40px rgba(196, 22, 28, 0.1)',
                background: '#FFFFFF'
              }}
              className="service-card glass-panel"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1.2rem',
                cursor: 'pointer',
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid rgba(196, 22, 28, 0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                background: 'rgba(196, 22, 28, 0.05)',
                padding: '1.2rem',
                borderRadius: '16px',
                color: '#C4161C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {React.cloneElement(service.icon, { size: 30 })}
              </div>
              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.8rem', lineHeight: 1.3 }}>{service.title}</h3>
                <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Professional craftsmanship combined with data-driven strategy for maximum impact.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            gap: 2.5rem !important;
            padding: 0 5%;
          }
          .service-card {
            padding: 2.2rem 1.8rem !important;
            border-radius: 20px !important;
            box-shadow: 0 15px 35px rgba(0,0,0,0.05) !important;
          }
        }
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .service-card {
            padding: 2.5rem 1.5rem !important;
            text-align: center;
            align-items: center !important;
          }
          .service-card p {
            text-align: center;
          }
          .service-card h3 {
            font-size: 1.25rem !important;
          }
        }
        .service-card {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Services;
