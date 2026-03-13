import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{
      background: '#050505',
      color: '#999999',
      padding: '5rem 0 2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: '4rem',
        marginBottom: '4rem'
      }}>
        {/* Brand Section */}
        <div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', color: '#FFFFFF' }}>
              <Logo size={40} />
            </div>
           <p style={{ fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '300px', color: '#CCCCCC' }}>
             We create the digital experiences that define the future. Don't just compete—dominate.
           </p>
        </div>
        
        {/* Services Section */}
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem' }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', padding: 0, listStyle: 'none' }}>
            <li>Business Website Systems</li>
            <li>ERP Systems (Odoo)</li>
            <li>Web & Mobile Development</li>
            <li>AI Automation Infrastructure</li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
           <h4 style={{ color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem' }}>Contact</h4>
           <div style={{ color: '#CCCCCC', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
             <p>Phone: +91 - 99944 92770</p>
             <p>WhatsApp: +91 - 99944 92770</p>
             <p>Web: www.fictionmaster.com</p>
           </div>
           <div style={{ display: 'flex', gap: '1.2rem', marginTop: '1.8rem' }}>
             <a href="#" className="social-link" style={{ color: '#999999' }}><Youtube size={22} /></a>
             <a href="#" className="social-link" style={{ color: '#999999' }}><Instagram size={22} /></a>
             <a href="#" className="social-link" style={{ color: '#999999' }}><Facebook size={22} /></a>
             <a href="#" className="social-link" style={{ color: '#999999' }}><Linkedin size={22} /></a>
           </div>
        </div>
      </div>

      <div className="container">
        <div style={{
          textAlign: 'center',
          paddingTop: '2.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '0.85rem',
          color: '#666666'
        }}>
          &copy; {new Date().getFullYear()} Fiction Master. All rights reserved.
        </div>
      </div>

      <style>{`
        .social-link:hover { color: #C4161C !important; transform: translateY(-3px); transition: all 0.3s ease; }
      `}</style>
    </footer>
  );
};

export default Footer;

