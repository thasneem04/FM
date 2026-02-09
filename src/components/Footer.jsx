import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{
      background: '#050505',
      color: '#999999',
      padding: '4rem 6% 2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)' // Adjusted border for dark mode
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Brand Section */}
        <div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: '#FFFFFF' }}>
              <Logo size={28} />
              <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                <span style={{ color: '#FFFFFF' }}>Fiction</span>{' '}
                <span style={{ color: '#C4161C' }}>Master</span>
              </span>
           </div>
           <p style={{ fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '300px', color: '#CCCCCC' }}>
             We create the digital experiences that define the future. Don't just compete—dominate.
           </p>
        </div>
        
        {/* Services Section */}
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 600 }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', padding: 0, listStyle: 'none' }}>
            <li>Branding</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Content Creation</li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
           <h4 style={{ color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 600 }}>Connect</h4>
           <div style={{ display: 'flex', gap: '1rem' }}>
             <a href="#" style={{ color: '#999999', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#C4161C'} onMouseOut={(e) => e.currentTarget.style.color = '#999999'}><Youtube size={20} /></a>
             <a href="#" style={{ color: '#999999', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#C4161C'} onMouseOut={(e) => e.currentTarget.style.color = '#999999'}><Instagram size={20} /></a>
             <a href="#" style={{ color: '#999999', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#C4161C'} onMouseOut={(e) => e.currentTarget.style.color = '#999999'}><Facebook size={20} /></a>
             <a href="#" style={{ color: '#999999', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#C4161C'} onMouseOut={(e) => e.currentTarget.style.color = '#999999'}><Linkedin size={20} /></a>
           </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '0.85rem',
        color: '#666666'
      }}>
        &copy; {new Date().getFullYear()} Fiction Master. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
