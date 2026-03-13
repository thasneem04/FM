import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Rocket, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const highlights = [
    "AI-Driven Solutions",
    "Business-Oriented Engineering",
    "Structured Project Execution",
    "Scalable System Architecture",
    "High-Performance UI/UX Design",
    "Long-Term Technology Partnership"
  ];

  return (
    <section id="why-us" className="section-padding" style={{ background: '#050505', color: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', fontWeight: 800, color: '#FFFFFF' }}>
            Why Businesses Choose <span style={{ color: '#ED1C24', fontFamily: '"League Spartan", sans-serif' }}>FICTION MASTER</span>
          </h2>
          <p style={{ color: '#AAAAAA', fontSize: '1.2rem' }}>Your Technology Partner for Scalable Growth</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem',
          marginBottom: '5rem'
        }}>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <CheckCircle2 size={20} style={{ color: '#ED1C24' }} />
              <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>{item}</span>
            </motion.div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          padding: '4rem',
          background: 'rgba(237, 28, 36, 0.05)',
          borderRadius: '24px',
          border: '1px solid rgba(237, 28, 36, 0.1)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FFFFFF' }}>Our Philosophy</h3>
            <p style={{ color: '#CCCCCC', lineHeight: 1.7, fontSize: '1.1rem' }}>
              We believe technology must simplify operations, improve decision-making, and support sustainable growth.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#ED1C24' }}><Lightbulb size={24} /></div>
                <span>Smart Systems ➔ Better Decisions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#ED1C24' }}><Rocket size={24} /></div>
                <span>Better Decisions ➔ Scalable Growth</span>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FFFFFF' }}>Future Direction</h3>
            <p style={{ color: '#CCCCCC', lineHeight: 1.7, fontSize: '1.1rem' }}>
              <span style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 600 }}>FICTION MASTER</span> is evolving into a product-driven technology company building proprietary ERP platforms and AI-powered SaaS solutions designed for scalable industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


