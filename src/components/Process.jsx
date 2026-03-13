import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Layers, Settings, Cpu, Rocket, TrendingUp, ShieldCheck, Lightbulb } from 'lucide-react';

const Process = () => {
  const steps = [
    { num: '1', title: 'Business Requirement Analysis', icon: <FileSearch size={32} /> },
    { num: '2', title: 'System Architecture Planning', icon: <Layers size={32} /> },
    { num: '3', title: 'Development & Infrastructure', icon: <Settings size={32} /> },
    { num: '4', title: 'AI & Automation Integration', icon: <Cpu size={32} /> },
    { num: '5', title: 'Deployment, Support & Optimization', icon: <Rocket size={32} /> },
  ];

  const features = [
    {
      title: 'Scalability',
      desc: 'We design systems that grow with your business.',
      icon: <TrendingUp size={40} />
    },
    {
      title: 'Reliability',
      desc: 'Ensuring uninterrupted and secure operation.',
      icon: <ShieldCheck size={40} />
    },
    {
      title: 'Innovation',
      desc: 'Leveraging the latest technologies and AI solutions.',
      icon: <Lightbulb size={40} />
    }
  ];

  return (
    <section id="process" className="section-padding" style={{ background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        {/* Top Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '4rem', fontWeight: 800 }}
        >
          Our <span style={{ color: '#ED1C24' }}>Process</span>:
        </motion.h2>
        
        {/* Process Timeline */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '1rem',
          position: 'relative',
          padding: '2rem 0',
          marginBottom: '5rem'
        }} className="process-grid">
          
          {/* Connector line for desktop */}
          <div className="process-line" style={{
            position: 'absolute',
            top: '55px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: '#ED1C24',
            zIndex: 1,
            display: window.innerWidth > 991 ? 'block' : 'none'
          }} />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 2,
                position: 'relative'
              }}
              className="process-step"
            >
              <div style={{
                width: '36px',
                height: '36px',
                background: '#ED1C24',
                color: '#FFFFFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 800,
                marginBottom: '1.5rem',
                zIndex: 3,
                boxShadow: '0 4px 10px rgba(237, 28, 36, 0.3)'
              }}>
                {step.num}
              </div>

              <div style={{
                width: '100px',
                height: '100px',
                background: '#FFFFFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                color: '#1A1A1A',
                border: '2px solid rgba(237, 28, 36, 0.05)',
                transition: 'all 0.3s ease',
              }} className="process-icon-box">
                <div style={{
                  color: index === 4 || index === 2 ? '#ED1C24' : '#333'
                }}>
                  {step.icon}
                </div>
              </div>

              <h4 style={{ 
                fontSize: '0.95rem', 
                fontWeight: 700, 
                color: '#1A1A1A', 
                padding: '0 5px',
                lineHeight: 1.4,
                maxWidth: '180px'
              }}>
                {step.title.split(' ').map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {word} {i === arr.length - 1 && index === 4 ? <span style={{ color: '#ED1C24' }}>Optimization</span> : ''}
                    {i !== arr.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </h4>
              
              {/* Arrow connector for responsive view */}
              {index < steps.length - 1 && (
                 <div className="process-arrow" style={{
                    color: '#ED1C24',
                    position: 'absolute',
                    right: '-15%',
                    top: '90px',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    display: 'none'
                 }}>
                   &rsaquo;
                 </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ 
            marginBottom: '4rem',
            position: 'relative',
            display: 'inline-block'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '-50%',
            width: '40%',
            height: '1px',
            background: 'rgba(237, 28, 36, 0.3)'
          }} className="divider-line" />
          
          <p style={{ fontSize: '1.3rem', color: '#666666' }}>
            We build <span style={{ color: '#ED1C24', fontWeight: 600 }}>scalable</span> systems designed for <span style={{ color: '#ED1C24', fontWeight: 600 }}>long-term<br/>Sustainability</span>.
          </p>

          <div style={{
            position: 'absolute',
            top: '50%',
            right: '-50%',
            width: '40%',
            height: '1px',
            background: 'rgba(237, 28, 36, 0.3)'
          }} className="divider-line" />
        </motion.div>

        {/* Bottom Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                background: '#FFFFFF'
              }}
            >
              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                background: '#FFFFFF',
                boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: '#ED1C24',
                border: '2px solid rgba(237, 28, 36, 0.03)'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                color: index === 2 ? '#ED1C24' : '#1A1A1A', 
                marginBottom: '1rem' 
              }}>
                {feature.title}
              </h3>
              <p style={{ color: '#666666', lineHeight: 1.6, maxWidth: '250px' }}>
                {feature.desc}
              </p>
              <div style={{
                width: '80px',
                height: '3px',
                background: index === 1 ? '#1A1A1A' : '#ED1C24',
                marginTop: '1.5rem'
              }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .process-arrow {
            display: none !important;
          }
          .process-line {
            display: none !important;
          }
          .divider-line {
            display: none !important;
          }
        }
        .process-icon-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(237, 28, 36, 0.15) !important;
          border-color: rgba(237, 28, 36, 0.2) !important;
        }
      `}</style>
    </section>
  );
};

export default Process;

