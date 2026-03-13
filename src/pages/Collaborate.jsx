import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, UserCircle, ChevronRight, Phone, MessageCircle, Mail } from 'lucide-react';
import Footer from '../components/Footer';

const Collaborate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    role: '',
    interest: '',
    description: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, message: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/collaborate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, message: result.message });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          businessName: '',
          role: '',
          interest: '',
          description: ''
        });
        e.target.reset();
      } else {
        setStatus({ loading: false, success: false, message: result.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, message: 'Server error. Please try again later.' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const red = "#d10000";

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#1A1A1A', overflow: 'hidden' }}>
      
      {/* Hero Section */}
      <section style={{ 
        padding: 'clamp(120px, 15vw, 160px) 5% 80px', 
        background: 'linear-gradient(180deg, rgba(209, 0, 0, 0.05) 0%, #FFFFFF 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              color: red, 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '3px',
              fontSize: '0.8rem',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Partnership Opportunities
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontWeight: 900, 
              lineHeight: 1.1, 
              marginBottom: '1.5rem',
              color: '#1A1A1A'
            }}>
              Your Marketing <span style={{ color: red }}>Partner</span>
            </h1>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              color: '#666666', 
              lineHeight: 1.6, 
              marginBottom: '2.5rem',
              maxWidth: '700px',
              marginInline: 'auto'
            }}>
              We don’t just offer services. We collaborate with brands, startups, and creators to build long-term digital growth.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a 
                href="#form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: red,
                  color: '#FFF',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: `0 10px 25px rgba(209, 0, 0, 0.2)`
                }}
              >
                Connect With Your Consultant
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Collaborate Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {[
              { 
                icon: <UserCircle size={40} />, 
                title: "Dedicated Consultant", 
                desc: "A singular point of contact for every collaboration to ensure seamless communication." 
              },
              { 
                icon: <Target size={40} />, 
                title: "Data-Driven Strategy", 
                desc: "Combining analytical insights with creative execution for maximum impact." 
              },
              { 
                icon: <Rocket size={40} />, 
                title: "Growth-Focused", 
                desc: "Long-term partnerships aimed at delivering measurable results and scale." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '2.5rem',
                  background: '#FFF',
                  borderRadius: '24px',
                  border: '1px solid #F0F0F0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ color: red, marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#666666', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Section */}
      <section className="section-padding" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1.5rem' }}>
              Who Should <span style={{ color: red }}>Partner</span> With Us?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "Startups looking to scale aggressively",
                "Established brands needing a fresh digital partner",
                "Creators & influencers building personal brands",
                "Businesses without an in-house marketing team"
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: red, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                    <ChevronRight size={16} />
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: 600 }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp}>
             <div style={{ 
                background: red,
                padding: '2.5rem',
                borderRadius: '30px',
                color: '#FFF',
                boxShadow: `0 20px 40px rgba(209, 0, 0, 0.2)`
              }}>
               <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Scale?</h3>
               <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                 We specialize in turning visions into digital dominance. Our process is built for speed and efficiency.
               </p>
               <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Connect as our 100 collaboration campaign</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            {...fadeInUp}
            style={{ 
              background: '#FFF', 
              padding: 'clamp(1.5rem, 5vw, 3.5rem)', 
              borderRadius: '30px', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
              border: '1px solid #EEE'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '1rem', textAlign: 'center' }}>Connect With <span style={{ color: red }}>Us</span></h2>
            <p style={{ textAlign: 'center', color: '#666666', marginBottom: '2.5rem' }}>Fill out the form below and our partnership lead will get in touch.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                <div className="form-field">
                  <span>Full Name</span>
                  <input type="text" required placeholder="Your full name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div className="form-field">
                  <span>Email Address</span>
                  <input type="email" required placeholder="you@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                <div className="form-field">
                  <span>Phone Number</span>
                  <input type="tel" required placeholder="+1 234 567 890" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="form-field">
                  <span>Business Name</span>
                  <input type="text" required placeholder="Company name" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} />
                </div>
              </div>

              <div className="form-field">
                <span>Description</span>
                <textarea rows="4" required placeholder="Tell us about your project..." style={{ resize: 'none' }} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
              </div>

              <button className="enquiry-submit" type="submit" disabled={status.loading} style={{ width: '100%', padding: '1.2rem', margin: 0 }}>
                {status.loading ? 'Sending...' : 'Start Collaboration'}
              </button>

              {status.message && (
                <p style={{ 
                  textAlign: 'center', 
                  color: status.success ? '#22c55e' : '#ef4444',
                  fontWeight: 600,
                  padding: '1rem',
                  borderRadius: '12px',
                  background: status.success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                }}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collaborate;

