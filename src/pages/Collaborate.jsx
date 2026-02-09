import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BarChart3, Rocket, Building2, UserCircle, Briefcase, ChevronRight, Phone, MessageCircle, Mail } from 'lucide-react';
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
      const response = await fetch('http://localhost:5000/api/collaborate', {
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
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const red = "#d10000";

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#1A1A1A', overflow: 'hidden' }}>
      
      {/* Hero Section */}
      <section className="collaborate-hero" style={{ 
        padding: '160px 5% 100px', 
        background: 'linear-gradient(180deg, rgba(209, 0, 0, 0.05) 0%, #FFFFFF 100%)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <span style={{ 
            color: red, 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '3px',
            fontSize: '0.9rem',
            display: 'block',
            marginBottom: '1.5rem'
          }}>
            Partnership Opportunities
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 7vw, 5rem)', 
            fontWeight: 900, 
            lineHeight: 1.1, 
            marginBottom: '2rem',
            color: '#1A1A1A'
          }}>
            Your Marketing <span style={{ color: red }}>Partner</span>
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.4rem)', 
            color: '#666666', 
            lineHeight: 1.6, 
            marginBottom: '3rem',
            maxWidth: '750px',
            marginInline: 'auto'
          }}>
            We don’t just offer services. We collaborate with brands, startups, and creators to build long-term digital growth.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a 
              href="#form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: red,
                color: '#FFF',
                padding: '1.2rem 2.5rem',
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
      </section>

      {/* Why Collaborate Section */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
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
                transition={{ delay: i * 0.2 }}
                style={{
                  padding: '2.5rem',
                  background: '#FFF',
                  borderRadius: '24px',
                  border: '1px solid #F0F0F0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = red}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#F0F0F0'}
              >
                <div style={{ color: red, marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#666666', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Collaborate */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 5%', backgroundColor: '#F9F9F9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
          <motion.div {...fadeInUp} className="who-text">
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, marginBottom: '2rem' }}>
              Who Should <span style={{ color: red }}>Partner</span> With Us?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                "Startups looking to scale aggressively",
                "Established brands needing a fresh digital partner",
                "Creators & influencers building personal brands",
                "Businesses without an in-house marketing team"
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: red, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                    <ChevronRight size={16} />
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <div className="cta-card" style={{ 
  background: red,
  padding: 'clamp(1.5rem, 5vw, 3rem)',
  borderRadius: '30px',
  color: '#FFF',
  boxShadow: '0 20px 40px rgba(209, 0, 0, 0.15)',
  width: '100%',
  boxSizing: 'border-box'
}}>

               <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to Scale?</h3>
               <p style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.7, marginBottom: '2rem' }}>
                 We specialize in turning visions into digital dominance. Our process is built for speed and efficiency.
               </p>
               <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Connect as our 100 collaboration campaign</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, marginBottom: '4rem' }}>How We <span style={{ color: red }}>Collaborate</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {[
              { step: "01", title: "Goals", desc: "Understand your business objectives" },
              { step: "02", title: "Consultant", desc: "Assign a dedicated marketing expert" },
              { step: "03", title: "Strategy", desc: "Build a custom data-driven roadmap" },
              { step: "04", title: "Execution", desc: "Optimize and scale your growth" }
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div className="process-step-bg" style={{ fontSize: '5rem', fontWeight: 900, color: 'rgba(209, 0, 0, 0.05)', position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}>
                  {item.step}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.8rem', color: red }}>{item.title}</h4>
                  <p style={{ color: '#666666', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" style={{ padding: '80px 5%', backgroundColor: '#FDFDFD' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            {...fadeInUp}
            className="form-card"
            style={{ 
              background: '#FFF', 
              padding: 'clamp(2rem, 5vw, 4rem)', 
              borderRadius: '30px', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
              border: '1px solid #EEE'
            }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '1rem', textAlign: 'center' }}>Connect With <span style={{ color: red }}>Us</span></h2>
            <p style={{ textAlign: 'center', color: '#666666', marginBottom: '3rem', fontSize: '1rem' }}>Fill out the form below and our partnership lead will get in touch.</p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name</label>
                  <input 
                    type="text" 
                    required
                    style={{ width: '100%', boxSizing: 'border-box', padding: '1.1rem', borderRadius: '12px', border: '1px solid #EEE', background: '#F9F9F9', fontSize: '16px' }} 
                    placeholder="Enter your name" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
                  <input 
                    type="email" 
                    required
                    style={{ width: '100%', boxSizing: 'border-box', padding: '1.1rem', borderRadius: '12px', border: '1px solid #EEE', background: '#F9F9F9', fontSize: '16px' }} 
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    style={{ width: '100%', boxSizing: 'border-box', padding: '1.1rem', borderRadius: '12px', border: '1px solid #EEE', background: '#F9F9F9', fontSize: '16px' }} 
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Business / Brand Name</label>
                  <input 
                    type="text" 
                    required
                    style={{ width: '100%', boxSizing: 'border-box', padding: '1.1rem', borderRadius: '12px', border: '1px solid #EEE', background: '#F9F9F9', fontSize: '16px' }} 
                    placeholder="Your company name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Your Role</label>
                  <select 
                    required
                    style={{ width: '100%', boxSizing: 'border-box', padding: '1.1rem', borderRadius: '12px', border: '1px solid #EEE', background: '#F9F9F9', fontSize: '16px' }}
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  >
                    <option value="">Select Role</option>
                    <option value="Founder">Founder</option>
                    <option value="Manager">Manager</option>
                    <option value="Creator">Creator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Collaboration Interest</label>
                  <select 
                    required
                    style={{ width: '100%', boxSizing: 'border-box', padding: '1.1rem', borderRadius: '12px', border: '1px solid #EEE', background: '#F9F9F9', fontSize: '16px' }}
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="">Select Interest</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Branding">Branding</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Full Growth Partnership">Full Growth Partnership</option>
                    <option value="Not Sure">Not Sure (Need Consultation)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Brief Description</label>
                <textarea 
                  rows="4"
                  style={{ width: '100%', boxSizing: 'border-box', padding: '1.1rem', borderRadius: '12px', border: '1px solid #EEE', background: '#F9F9F9', resize: 'none', fontSize: '16px' }}
                  placeholder="Tell us about your business or idea..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#b00000' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.loading}
                style={{ 
                  background: red, 
                  color: '#FFF', 
                  padding: '1.3rem', 
                  borderRadius: '12px', 
                  border: 'none', 
                  fontWeight: 800, 
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'background 0.3s ease',
                  opacity: status.loading ? 0.7 : 1
                }}
              >
                {status.loading ? 'Sending...' : 'Start Collaboration'}
              </motion.button>

              {status.message && (
                <p style={{ 
                  marginTop: '1rem', 
                  textAlign: 'center', 
                  color: status.success ? '#22c55e' : '#ef4444',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section style={{ padding: '60px 5%', borderTop: '1px solid #F0F0F0' }}>
        <div className="contact-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 5vw, 3rem)', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '240px' }}>
            <div style={{ color: red }}><Phone size={24} /></div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</div>
              <div style={{ fontWeight: 700 }}>+91 98765 43210</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '240px' }}>
            <div style={{ color: red }}><MessageCircle size={24} /></div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp</div>
              <div style={{ fontWeight: 700 }}>+91 98765 43210</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '240px' }}>
            <div style={{ color: red }}><Mail size={24} /></div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</div>
              <div style={{ fontWeight: 700 }}>hello@fictionmaster.com</div>
            </div>
          </div>
          <div className="hours-mobile" style={{ paddingLeft: '2rem', borderLeft: '1px solid #EEE', minWidth: '200px' }}>
            <div style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Operating Hours</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Monday – Saturday</div>
            <div style={{ color: red, fontWeight: 700 }}>10 AM – 7 PM</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 5%', background: red, textAlign: 'center', color: '#FFF' }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '2.5rem' }}>
            Let’s Build Something Powerful Together.
          </h2>
          <motion.a 
            href="#form"
            whileHover={{ scale: 1.05, backgroundColor: '#FFF', color: red }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              background: '#FFF',
              color: red,
              padding: '1.1rem 2.8rem',
              borderRadius: '50px',
              fontWeight: 800,
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Start Your Collaboration Today
          </motion.a>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .section-padding { padding: 60px 4% !important; }
          .collaborate-hero { padding: 120px 4% 60px !important; }
          .form-card { padding: 2rem 1rem !important; margin: 0 10px; }
          .contact-grid { justify-content: center !important; flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .contact-grid > div { justify-content: center !important; width: 100% !important; margin-bottom: 1rem; }
          .hours-mobile { border-left: none !important; padding-left: 0 !important; margin-top: 1rem; border-top: 1px solid #EEE; padding-top: 1.5rem; width: 100% !important; }
          .who-text { text-align: center; margin-bottom: 2rem; }
          .who-text h2 { text-align: center; }
          .who-text > div { align-items: flex-start; text-align: left; max-width: 400px; margin: 0 auto; }
          .process-step-bg { font-size: 3.5rem !important; top: -15px !important; }
          .cta-card { padding: 2rem 1.2rem !important; }
        }
        @media (max-width: 480px) {
           .collaborate-hero h1 { font-size: clamp(2rem, 10vw, 3rem) !important; }
           .collaborate-hero p { font-size: 0.95rem !important; }
           .form-card h2 { font-size: 1.6rem !important; }
           .form-card { border-radius: 20px !important; padding: 1.5rem 1rem !important; }
           section { padding-left: 15px !important; padding-right: 15px !important; }
        }
        * {
          box-sizing: border-box;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

export default Collaborate;
