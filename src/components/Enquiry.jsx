import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Enquiry = () => {
  const [status, setStatus] = useState({ loading: false, success: false, message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: false, message: '' });

    const formData = new FormData(event.target);
    const data = {
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, message: result.message });
        event.target.reset();
      } else {
        setStatus({ loading: false, success: false, message: result.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, message: 'Server error. Please try again later.' });
    }
  };

  return (
    <section id="enquiry" className="enquiry-section">
      <div className="enquiry-inner">
        <div className="enquiry-hero">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="enquiry-title"
          >
            Let&apos;s Build Your Success Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="enquiry-subtext"
          >
            Tell us about your goals and we&apos;ll help you transform your idea into reality.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="enquiry-card"
        >
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label className="form-field">
                <span>Full Name</span>
                <input type="text" name="fullName" required placeholder="Your full name" />
              </label>
              <label className="form-field">
                <span>Email Address</span>
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>
              <label className="form-field">
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="+1 (___) ___-____" />
              </label>
              <label className="form-field">
                <span>Service Interested In</span>
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="website">Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="branding">Branding</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <label className="form-field form-field--full">
              <span>Short Message / Project Description</span>
              <textarea name="message" rows="5" placeholder="Tell us about your project vision..." />
            </label>

            <button className="enquiry-submit" type="submit" disabled={status.loading}>
              {status.loading ? 'Sending...' : 'Request Free Consultation'}
            </button>

            {status.message && (
              <p className={`enquiry-status ${status.success ? 'success' : 'error'}`} style={{ 
                marginTop: '1rem', 
                textAlign: 'center', 
                color: status.success ? '#22c55e' : '#ef4444',
                fontWeight: 600 
              }}>
                {status.message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Enquiry;
