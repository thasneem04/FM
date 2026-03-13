import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SFMS = () => {
  const features = [
    "Technician Assignment & Monitoring",
    "Real-Time Dashboard & Reporting",
    "Asset and Maintenance Scheduling",
    "Client and Property Management",
    "Invoice and VAT Ready Billing",
    "AMC & Contract Tracking",
    "Work Order Management"
  ];

  const targetGroups = [
    "Facility Management Companies",
    "Building Maintenance Contractors",
    "Property Management Firms"
  ];

  return (
    <section id="sfms" className="section-padding" style={{ background: '#FDFDFD', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
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
              Core Product Solution
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              SMART FACILITY MANAGEMENT <span style={{ color: '#C4161C' }}>SYSTEM ( SFMS )</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              A specialized digital platform designed for Facility Management companies to streamline operations, manage contracts, and optimize technician workflows.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: 700, fontSize: '1.2rem' }}>KEY FEATURES :</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#666666', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#C4161C' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '2rem', background: 'rgba(196, 22, 28, 0.03)', borderRadius: '16px', border: '1px solid rgba(196, 22, 28, 0.1)' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: 700, fontSize: '1.1rem' }}>DESIGNED FOR :</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {targetGroups.map((g, i) => (
                  <li key={i} style={{ background: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', color: '#C4161C', fontWeight: 600, border: '1px solid rgba(196, 22, 28, 0.1)' }}>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #FDFDFD 0%, #FFFFFF 100%)',
              borderRadius: '24px',
              padding: '1.2rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
              border: '1px solid rgba(196, 22, 28, 0.08)',
              position: 'relative',
              zIndex: 2,
              overflow: 'hidden'
            }}>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img 
                  src="/SFMS.png" 
                  alt="SFMS Dashboard" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '16px',
                    display: 'block',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SFMS;

