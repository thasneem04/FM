import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, PenTool, TrendingUp, Share2, Clapperboard, 
  Smartphone, Search, Target, Layout 
} from 'lucide-react';

const SupportingServices = () => {
  const services = [
    { 
      title: 'Brand Identity & Visual Systems', 
      icon: <Palette size={24} />,
      desc: 'Logo design, brand guidelines, and visual identity systems'
    },
    { 
      title: 'Conversion-Focused Graphic Design', 
      icon: <PenTool size={24} />,
      desc: 'High-impact visual content aimed at driving conversions and engagement'
    },
    { 
      title: 'AI-Enhanced Creative Production', 
      icon: <Clapperboard size={24} />,
      desc: 'Leveraging AI tools to create innovative and efficient creative assets'
    },
    { 
      title: 'Performance-Oriented Marketing Assets', 
      icon: <Target size={24} />,
      desc: 'Data-driven marketing materials designed to maximize ROI'
    },
    { 
      title: 'Digital Campaign Creatives', 
      icon: <Layout size={24} />,
      desc: 'Tailored ad creatives and campaign visuals for digital marketing'
    },
    { 
      title: 'UI/UX Strategy', 
      icon: <Smartphone size={24} />,
      desc: 'User interface and user experience design to enhance digital products'
    },
  ];

  return (
    <section id="supporting-services" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{ 
            color: '#C4161C', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            fontSize: '0.85rem',
            display: 'block',
            marginBottom: '1rem'
          }}>
            Supporting Services
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800 }}>
            Digital Strategy & <span style={{ color: '#C4161C' }}>Creative Support</span>
          </h2>
          <p style={{ color: '#666666', fontSize: '1.1rem', maxWidth: '850px', margin: '0 auto', lineHeight: 1.6 }}>
            Our digital and creative services empower businesses to build a strong and impactful brand presence. We enhance visibility across digital platforms and strategically position your business to stay competitive.
          </p>
        </motion.div>

        <div className="supporting-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2.5rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'left',
                padding: '2rem',
                border: '1px solid rgba(196, 22, 28, 0.05)',
                borderRadius: '16px',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ borderColor: 'rgba(196, 22, 28, 0.2)', translateY: -5 }}
            >
              <div style={{ color: '#C4161C', marginBottom: '1.2rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#1A1A1A' }}>
                {service.title}
              </h3>
              <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <p style={{ marginTop: '4rem', color: '#666666', fontStyle: 'italic' }}>
          We offer these services to help businesses strengthen their digital presence and performance.
        </p>
      </div>
    </section>
  );
};

export default SupportingServices; 

