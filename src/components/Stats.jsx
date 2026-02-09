import React from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Countries', value: '3' },
  ];

  return (
    <section id="stats" className="section-padding" style={{ background: '#F8F8F8', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', flex: '1 1 200px' }}
            >
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#C4161C', margin: 0 }}>
                {stat.value}
              </h3>
              <p style={{ color: '#A1A1AA', fontSize: '1rem', marginTop: '0.5rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Stats;
