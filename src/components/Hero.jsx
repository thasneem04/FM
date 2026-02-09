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
        background: '#FFFFFF'
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
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, #C4161C33, transparent)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, rgba(196, 22, 28, 0.1), transparent)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(50px)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <div className="section-padding hero-layout">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(196, 22, 28, 0.1)',
              border: '1px solid rgba(196, 22, 28, 0.3)',
              borderRadius: '50px',
              marginBottom: '2rem',
              color: '#C4161C',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontSize: '0.9rem',
              textTransform: 'uppercase'
            }}
          >
            Agency of the Future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: '1.5rem',
              color: '#1A1A1A',
              letterSpacing: '-0.02em'
            }}
          >
            DOMINATE THE <br />
            <span style={{ color: '#C4161C' }}>DIGITAL REALM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: '#666666',
              maxWidth: '600px',
              margin: '0 0 3rem',
              lineHeight: 1.6
            }}
          >
            We blend cinematic aesthetics with data-driven strategy to create brands that don&apos;t just exist—they lead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <a 
              href="#contact"
              style={{
                background: '#C4161C',
                color: '#FFFFFF',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 0 20px rgba(196, 22, 28, 0.4)',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Start Your Project <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orb" />

          <motion.div
            className="hero-card hero-card--top"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -12, 0], x: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
        zIndex: 5
      }} />
    </section>
  );
};

export default Hero;
