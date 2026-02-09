import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section 
      id="cta"
      style={{
        background: 'linear-gradient(135deg, #C4161C 0%, #8A0A0A 100%)',
        padding: '6rem 6%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 900 }}
        >
          READY TO <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textDecorationThickness: '4px' }}>DOMINATE</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}
        >
          Join the ranks of market leaders. Let's build your legacy together.
        </motion.p>
        
        <motion.a
          href="#enquiry"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
          transition={{ duration: 0.3 }}
          style={{
            background: '#FFFFFF',
            color: '#C4161C',
            padding: '1.2rem 3rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
          }}
        >
          Start Your Transformation <ArrowRight size={20} />
        </motion.a>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};

export default CTA;
