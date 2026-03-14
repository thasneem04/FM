import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const ErpSolutions = () => {
  const modules = [
    { title: "Finance & Accounting Management" },
    { title: "Inventory & Supply Chain Management" },
    { title: "Sales & Order Management" },
    { title: "Customer Relationship Management (CRM)" },
    { title: "Human Resource Management (HRM)" },
    { title: "Procurement & Vendor Management" },
    { title: "Reporting & Business Analytics" }
  ];

  const benefits = [
    { title: "Centralized Business Management", desc: "Manage all business operations from one integrated platform." },
    { title: "Improved Efficiency", desc: "Automate workflows and reduce manual processes." },
    { title: "Real-Time Insights", desc: "Access accurate business data and analytics anytime." },
    { title: "Scalable Technology", desc: "Our ERP systems grow with your business and support global operations." },
    { title: "Customizable Modules", desc: "Adapt the system according to your business model and industry requirements." }
  ];

  const industries = [
    "Facility Management", "Manufacturing", "Retail & E-commerce", "Healthcare", "Education", "Logistics & Supply Chain", "Construction", "Service-based Businesses"
  ];

  return (
    <section id="erp" className="section-padding" style={{ background: '#F8F8F8', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span style={{ 
              color: '#ED1C24', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              fontSize: '0.85rem',
              display: 'block',
              marginBottom: '1rem'
            }}>
              ERP Solutions
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
              SMART ERP SYSTEMS FOR <span style={{ color: '#ED1C24' }}>GLOBAL BUSINESSES</span>
            </h2>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>FICTION MASTER</span> provides powerful ERP (Enterprise Resource Planning) solutions that help businesses manage operations, resources, and data from a single unified platform.
            </p>
            <p style={{ color: '#666666', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Our ERP systems are designed to support companies of all sizes, enabling organizations to streamline processes, improve productivity, and make data-driven decisions. With our scalable ERP solutions, businesses can efficiently manage departments such as finance, inventory, sales, human resources, and operations across multiple locations worldwide.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: 700, fontSize: '1.2rem' }}>Core ERP Modules:</h4>
              <p style={{ color: '#666666', fontSize: '1rem', marginBottom: '1rem' }}>Our ERP platform integrates all major business functions into one intelligent system.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem' }}>
                {modules.map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#444', fontSize: '0.95rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ED1C24' }} />
                    <span style={{ fontWeight: 500 }}>{m.title}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: '#ED1C24', fontSize: '0.9rem', fontWeight: 600, marginTop: '1rem' }}>This centralized system ensures real-time data visibility and better collaboration between departments.</p>
            </div>
            
            <div style={{ padding: '2rem', background: 'rgba(237, 28, 36, 0.03)', borderRadius: '16px', border: '1px solid rgba(237, 28, 36, 0.1)' }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: 700, fontSize: '1.1rem' }}>Industries We Support:</h4>
              <p style={{ color: '#666666', fontSize: '0.95rem', marginBottom: '1rem' }}>Our ERP solutions are designed for businesses across multiple industries worldwide:</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {industries.map((g, i) => (
                  <li key={i} style={{ background: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.85rem', color: '#1A1A1A', fontWeight: 600, border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    {g}
                  </li>
                ))}
              </ul>
              <p style={{ color: '#666666', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>We deliver ERP systems tailored to the specific needs of each industry.</p>
            </div>
          </motion.div>

          {/* Right Visual / More Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
              border: '1px solid rgba(237, 28, 36, 0.05)',
              position: 'relative',
              zIndex: 2,
              marginBottom: '2rem'
            }}>
              <h4 style={{ color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Benefits of Our ERP Solutions</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{ borderLeft: '3px solid #ED1C24', paddingLeft: '1rem' }}>
                    <h5 style={{ color: '#1A1A1A', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>{b.title}</h5>
                    <p style={{ color: '#666666', fontSize: '0.9rem' }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
              borderRadius: '24px',
              padding: '2.5rem',
              color: '#FFF',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            }}>
              <h4 style={{ color: '#FFFFFF', marginBottom: '1rem', fontWeight: 700, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Global ERP Implementation</h4>
              <p style={{ color: '#AAAAAA', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Fiction Master supports international ERP implementation, helping businesses manage operations across different countries, currencies, and teams.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {["Multi-location businesses", "Multi-currency transactions", "International reporting standards", "Cloud-based remote access", "Secure data management"].map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', color: '#E0E0E0' }}>
                    <Globe size={16} color="#ED1C24" /> {feat}
                  </li>
                ))}
              </ul>
              <p style={{ color: '#FFF', fontSize: '0.9rem', fontWeight: 600, marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                This allows companies to operate efficiently in a global business environment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ErpSolutions;
