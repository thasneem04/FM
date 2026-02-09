import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Client A', role: 'CEO, Tech Startup', text: 'Exceptional visual quality and a seamless experience. Fiction Master truly delivered.' },
  { id: 2, name: 'Client B', role: 'Marketing Director', text: 'The cinematic approach to our website completely transformed our brand perception.' },
  { id: 3, name: 'Client C', role: 'Founder, Retail Brand', text: 'Professional, timely, and artistically brilliant. Highly recommended.' },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', marginBottom: '1rem' }}>
            Client <span style={{ color: '#C4161C' }}>Success</span>
          </h2>
          <p style={{ color: '#666666', fontSize: '1.2rem' }}>What they say about our craft.</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(248, 248, 248, 0.8)' }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', color: '#FFD700', marginBottom: '0.5rem' }}>
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p style={{ color: '#1A1A1A', fontSize: '1.1rem', fontStyle: 'italic' }}>"{review.text}"</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#E5E5E5', borderRadius: '50%' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1A1A', margin: 0 }}>{review.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#666666', margin: 0 }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
