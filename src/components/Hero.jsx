import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#FFFFFF',
        paddingTop: '80px'
      }}
    >
      {/* 3D Background Elements floating */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 'min(300px, 40vw)',
          height: 'min(300px, 40vw)',
          background: 'linear-gradient(45deg, #ED1C2433, transparent)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />
      
      {/* Content Container */}
      <div className="container hero-layout">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              background: 'rgba(237, 28, 36, 0.1)',
              border: '1px solid rgba(237, 28, 36, 0.3)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              color: '#ED1C24',
              fontWeight: 600,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Your Technology Partner for Scalable Growth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 1.1,
              fontWeight: 900,
              marginBottom: '1.5rem',
              color: '#1A1A1A',
              letterSpacing: '-0.02em'
            }}
          >
            MASTERING THE <br />
            <span style={{ color: '#ED1C24' }}>FUTURE OF BUSINESS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#666666',
              maxWidth: '600px',
              marginBottom: '2.5rem',
              lineHeight: 1.6
            }}
          >
            AI Powered Business Systems & Digital Infrastructure Company. We design intelligent digital systems that automate operations, improve efficiency, and accelerate growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <a 
              href="#enquiry"
              style={{
                background: '#ED1C24',
                color: '#FFFFFF',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'inline-flex',
                width: 'fit-content',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: '0 10px 20px rgba(237, 28, 36, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              Start Your Project <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orb" style={{ width: 'min(340px, 80vw)', height: 'min(340px, 80vw)' }} />

          <motion.div
            className="hero-card hero-card--top"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -12, 0], x: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: window.innerWidth < 480 ? 'none' : 'flex' }}
          >
            <div className="hero-card__icon">
              <TrendingUp size={22} />
            </div>
            <div className="hero-card__text">
              <div className="hero-card__title">Growth</div>
              <div className="hero-card__sub">Momentum</div>
            </div>
          </motion.div>

          <motion.div
            className="hero-card hero-card--bottom"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 14, 0], x: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{ display: window.innerWidth < 480 ? 'none' : 'flex' }}
          >
            <div className="hero-card__icon">
              <Target size={22} />
            </div>
            <div className="hero-card__text">
              <div className="hero-card__title">Targeting</div>
              <div className="hero-card__sub">Precision Audience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '150px',
        background: 'linear-gradient(to top, #FFFFFF, transparent)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />
    </section>
  );
};

export default Hero;
