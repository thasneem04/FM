import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const IntroOverlay = ({ onComplete }) => {
  const [phase, setPhase] = useState('assemble'); // 'assemble' | 'sweep' | 'fade'

  useEffect(() => {
    // TIMELINE:
    // 0ms   - Start Assembly (Logo fades in, Text slides in)
    // 1500ms - Assembly ends, Sweep starts
    // 3000ms - Sweep ends, Fade out starts
    // 4500ms - End
    
    const timerSweep = setTimeout(() => setPhase('sweep'), 1500);
    const timerFade = setTimeout(() => setPhase('fade'), 3200);
    const timerDone = setTimeout(() => onComplete(), 4500);

    return () => {
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
    hidden: { opacity: 0, x: -30 },
    assemble: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    },
    sweep: { opacity: 1, x: 0 },
    fade: { 
      opacity: 0, 
      transition: { duration: 0.8, delay: 0.2 } 
    }
  };

  const textRightVariants = {
    hidden: { opacity: 0, x: 30 },
    assemble: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    },
    sweep: { opacity: 1, x: 0 },
    fade: { 
      opacity: 0, 
      transition: { duration: 0.8, delay: 0.2 } 
    }
  };

  const sloganVariants = {
    hidden: { opacity: 0 },
    assemble: { 
      opacity: 1, 
      transition: { duration: 1.0, delay: 0.8 } 
    },
    sweep: { opacity: 1 },
    fade: { 
      opacity: 0, 
      transition: { duration: 0.8, delay: 0.1 } 
    }
  };

  return (
    <motion.div
      className="intro-overlay"
      variants={containerVariants}
      initial="assemble" 
      animate={phase}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#050505', 
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(249, 249, 249, 1) 0%, rgba(246, 245, 245, 1) 70%)',
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
          perspective: '1000px'
        }}
      >
        {/* LOGO CONTAINER WITH SWEEP */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <motion.div
            variants={logoContainerVariants}
            initial="hidden"
            animate={phase}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Logo size={100} />
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
              background: 'linear-gradient(120deg, transparent 40%, rgba(196, 22, 28, 0.3) 50%, transparent 0%)',
              mixBlendMode: 'color-dodge',
              pointerEvents: 'none',
              filter: 'blur(8px)'
            }}
          />
        </div>

        {/* BRAND TEXT */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          alignItems: 'center',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          letterSpacing: '0.1em',
          color: '#fe0303ff'
        }}>
          <motion.span variants={textLeftVariants} initial="hidden" animate={phase}>
            FICTION
          </motion.span>
          <motion.span variants={textRightVariants} initial="hidden" animate={phase} style={{ color: '#635b5bff' }}>
            MASTER
          </motion.span>
        </div>

        {/* SLOGAN */}
        <motion.p
          variants={sloganVariants}
          initial="hidden"
          animate={phase}
          style={{
            marginTop: '1.2rem',
            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: '#888888',
            letterSpacing: '0.4em',
            fontWeight: 700,
            textTransform: 'uppercase'
          }}
        >
          Grow your Business with Words and Designs
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IntroOverlay;
