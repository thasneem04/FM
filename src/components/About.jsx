import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Side: Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div className="about-image-card" style={{
              background: 'linear-gradient(135deg, #F8F8F8 0%, #FFFFFF 100%)',
              borderRadius: '24px',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              border: '1px solid rgba(196, 22, 28, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '300px'
            }}>
              {/* This would be the 3D illustration from the image */}
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ 
                  width: 'min(300px, 100%)', 
                  aspectRatio: '1/1',
                  margin: '0 auto',
                  background: 'rgba(196, 22, 28, 0.03)', 
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{ width: '100%', padding: '10%' }}
                  >
                    <img
                      src="/DS.png"
                      alt="3D Tech Illustration"
                      style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      transform: "scale(1.2)"
                    }}
                    />

                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="about-content"
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
              About Us
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', 
              fontWeight: 800, 
              color: '#1A1A1A', 
              lineHeight: 1.1,
              marginBottom: '1.5rem'
            }}>
              The Best Marketing Agency to Improve Your <span style={{ color: '#C4161C' }}>Business</span>
            </h2>
            <p style={{ 
              color: '#666666', 
              fontSize: '1.05rem', 
              lineHeight: 1.7, 
              marginBottom: '2.5rem',
              maxWidth: '600px'
            }}>
              Unlock your brand's full potential with innovative marketing strategies, data-driven insights, and result-oriented solutions. We help businesses achieve measurable growth and long-term success.
            </p>

            <div className="about-features" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(196, 22, 28, 0.05)', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C4161C'
                }}>
                  <Zap size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1A1A1A' }}>Managed Services</h4>
                <p style={{ color: '#666666', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  End-to-end marketing solutions tailored to your business needs, from strategy to execution.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(196, 22, 28, 0.05)', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C4161C'
                }}>
                  <Users size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1A1A1A' }}>Dedicated Experts</h4>
                <p style={{ color: '#666666', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  A team of experienced marketing professionals committed to driving your business success.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .section-padding { padding: 60px 0 !important; }
          .about-grid { gap: 2.5rem !important; grid-template-columns: 1fr !important; }
          .about-content { text-align: center; }
          .about-content h2 { text-align: center; }
          .about-content p { text-align: center; margin-inline: auto; }
          .about-features { text-align: center; }
          .about-features > div { align-items: center; }
          .about-image-card { padding: 1rem !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
