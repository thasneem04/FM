import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const IntroOverlay = ({ onComplete }) => {
  const [phase, setPhase] = useState('assemble'); // 'assemble' | 'sweep' | 'fade'
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    // TIMELINE:
    const timerSweep = setTimeout(() => setPhase('sweep'), 1500);
    const timerFade = setTimeout(() => setPhase('fade'), 3200);
    const timerDone = setTimeout(() => onComplete(), 4500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timerSweep);
      clearTimeout(timerFade);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  // Animation Variants
  const containerVariants = {
    assemble: { opacity: 1 },
    sweep: { opacity: 1 },
    fade: { 
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" } 
    }
  };

  const logoContainerVariants = {
    hidden: { opacity: 0, scale: 1, rotateX: 0 },
    assemble: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: { duration: 1.2, ease: "easeInOut" }
    },
    sweep: { 
      opacity: 1, 
      scale: 1,
      rotateX: 5, // Subtle 3D Tilt
      rotateY: 5,
      transition: { duration: 1.5, ease: "easeInOut" } 
    },
    fade: { 
      opacity: 0, 
      scale: 1,
      rotateX: 0,
      transition: { duration: 1.0, ease: "easeInOut" } 
    }
  };

  // Light Sweep Gradient
  const sweepVariants = {
    hidden: { x: '-150%', opacity: 0 },
    assemble: { x: '-150%', opacity: 0 },
    sweep: { 
      x: '150%', 
      opacity: [0, 1, 1, 0], // Flash in and out
      transition: { duration: 1.2, ease: "easeInOut" } 
    },
    fade: { opacity: 0 }
  };

  const textLeftVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0 },
    assemble: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    },
    sweep: { opacity: 1, x: 0, y: 0 },
    fade: { 
      opacity: 0, 
      transition: { duration: 0.8, delay: 0.2 } 
    }
  };

  const textRightVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 20 : 0 },
    assemble: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    },
    sweep: { opacity: 1, x: 0, y: 0 },
    fade: { 
      opacity: 0, 
      transition: { duration: 0.8, delay: 0.2 } 
    }
  };

  const sloganVariants = {
    hidden: { opacity: 0, y: 10 },
    assemble: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, delay: 0.8 } 
    },
    sweep: { opacity: 1, y: 0 },
    fade: { 
      opacity: 0, 
      transition: { duration: 0.8, delay: 0.1 } 
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    assemble: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 2.5, ease: "easeOut" } 
    },
    sweep: { opacity: 1, scale: 1 },
    fade: { 
      opacity: 0, 
      transition: { duration: 1.2 } 
    }
  };

  return (
    <motion.div
      className="intro-overlay"
      variants={containerVariants}
      initial="assemble" 
      animate={phase}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8 } }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#FFFFFF', 
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* BACKGROUND IMAGE LAYER */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate={phase}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/business_growth_intro.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />

      {/* GRADIENT OVERLAY FOR READABILITY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.7) 100%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          perspective: '1000px',
          padding: '0 2rem'
        }}
      >
        {/* LOGO CONTAINER WITH SWEEP */}
        <div style={{ position: 'relative', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
          <motion.div
            variants={logoContainerVariants}
            initial="hidden"
            animate={phase}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Logo size={isMobile ? 60 : 100} />
          </motion.div>
          
          {/* THE LIGHT SWEEP OVERLAY */}
          <motion.div
            variants={sweepVariants}
            initial="hidden"
            animate={phase}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.4) 50%, transparent 80%)',
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
              filter: 'blur(5px)'
            }}
          />
           <motion.div
            variants={sweepVariants}
            initial="hidden"
            animate={phase}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(120deg, transparent 40%, rgba(237, 28, 36, 0.3) 50%, transparent 0%)',
              mixBlendMode: 'color-dodge',
              pointerEvents: 'none',
              filter: 'blur(8px)'
            }}
          />
        </div>

        {/* BRAND TEXT */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '0.3rem' : '0.5rem', 
          alignItems: 'center',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? '1.5rem' : 'clamp(1.2rem, 3vw, 2.2rem)',
          letterSpacing: '0.1em',
          color: '#fe0303ff',
          marginBottom: isMobile ? '1rem' : '0'
        }}>
          <motion.span variants={textLeftVariants} initial="hidden" animate={phase}>
            Mastering the
          </motion.span>
          <motion.span variants={textRightVariants} initial="hidden" animate={phase} style={{ color: '#635b5bff' }}>
            Future of Business
          </motion.span>
        </div>

        {/* SLOGAN */}
        <motion.p
          variants={sloganVariants}
          initial="hidden"
          animate={phase}
          style={{
            marginTop: isMobile ? '0.5rem' : '1.2rem',
            fontSize: isMobile ? '0.65rem' : 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: '#444444',
            letterSpacing: isMobile ? '0.2em' : '0.4em',
            fontWeight: 700,
            textTransform: 'uppercase',
            maxWidth: isMobile ? '280px' : 'none',
            lineHeight: 1.4
          }}
        >
          AI Powered Business Systems & <span style={{ color: '#f50c0cff' }}>Digital Infrastructure</span> Company
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IntroOverlay;

