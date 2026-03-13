import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Box, Settings, Database, PieChart, Truck, Users, HelpingHand, Workflow } from 'lucide-react';

const OdooERP = () => {
  const odooServices = [
    { title: "Odoo ERP Implementation", icon: <Settings size={18} /> },
    { title: "Odoo Customization & Module Development", icon: <Box size={18} /> },
    { title: "Odoo Integration with Existing Systems", icon: <Database size={18} /> },
    { title: "Accounting & Finance Management", icon: <PieChart size={18} /> },
    { title: "Inventory & Warehouse Management", icon: <Truck size={18} /> },
    { title: "CRM & Sales Automation", icon: <Workflow size={18} /> },
    { title: "HR & Payroll Management", icon: <Users size={18} /> },
    { title: "Odoo Support & Maintenance", icon: <HelpingHand size={18} /> }
  ];

  return (
    <section id="odoo-erp" className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ position: 'relative', order: window.innerWidth > 768 ? 1 : 2 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 100%)',
              borderRadius: '32px',
              padding: '1.5rem',
              boxShadow: '0 40px 80px rgba(0,0,0,0.06)',
              border: '1px solid rgba(196, 22, 28, 0.05)',
              position: 'relative',
              zIndex: 2,
              overflow: 'hidden'
            }}>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img 
                  src="/odoo_erp.png" 
                  alt="Odoo ERP Ecosystem" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '20px',
                    display: 'block',
                    filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.1))'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ order: window.innerWidth > 768 ? 2 : 1 }}
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
              Business Solutions
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              ERP SOLUTIONS WITH <span style={{ color: '#C4161C' }}>ODOO</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We help businesses streamline their operations using the Odoo ERP platform. Our end-to-end Odoo services ensure your business processes are integrated, efficient, and ready for global scalability.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Odoo Services Include:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
                {odooServices.map((service, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    color: '#444444', 
                    fontSize: '0.95rem',
                    padding: '0.8rem 1.2rem',
                    background: 'rgba(196, 22, 28, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(196, 22, 28, 0.05)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ color: '#C4161C' }}>{service.icon}</div>
                    <span style={{ fontWeight: 500 }}>{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p style={{ color: '#888888', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Transform your business operations with a unified, intelligent ERP platform designed for modern growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OdooERP;

