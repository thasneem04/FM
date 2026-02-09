import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const red = "#d10000"; // Requested red

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Team', href: isHome ? '#team' : '/#team' },
    { name: 'Stats', href: isHome ? '#stats' : '/#stats' },
    { name: 'Reviews', href: isHome ? '#reviews' : '/#reviews' },
  ];

  const serviceItems = [
    { name: 'Digital Marketing', href: isHome ? '#services' : '/#services' },
    { name: 'Web Development', href: isHome ? '#services' : '/#services' },
    { name: 'Branding', href: isHome ? '#services' : '/#services' },
    { name: 'Gallery', href: isHome ? '#gallery' : '/#gallery' },
    { name: 'Collaborate With Us', href: '/collaborate', highlight: true },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav 
      style={{
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: scrolled ? '0.8rem 5%' : '1.2rem 5%',
        borderBottom: scrolled ? '1px solid #EEE' : '1px solid rgba(255, 255, 255, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 2000,
        boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      {/* Brand */}
      <Link to="/" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
        <Logo size={40} />
        <span style={{ 
          fontSize: '1.25rem', 
          fontWeight: 700, 
          letterSpacing: '0.05em',
          textTransform: 'uppercase' 
        }}>
          <span style={{ color: red }}>Fiction</span>{' '}
          <span style={{ color: '#666666' }}>Master</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            style={{ color: '#666666', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.3s', textDecoration: 'none' }}
            onMouseOver={(e) => e.currentTarget.style.color = red}
            onMouseOut={(e) => e.currentTarget.style.color = '#666666'}
          >
            {link.name}
          </a>
        ))}

        {/* Services Dropdown */}
        <div 
          style={{ position: 'relative' }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div style={{ 
            color: '#666666', 
            fontSize: '0.9rem', 
            fontWeight: 800, 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.3rem', 
            cursor: 'pointer',
            padding: '10px 0'
          }}>
            Services <ChevronDown size={14} />
          </div>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#FFF',
                  minWidth: '220px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  padding: '1rem',
                  border: '1px solid #F0F0F0',
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                {serviceItems.map((item) => (
                  item.highlight ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleLinkClick}
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: '#FFF',
                        background: red,
                        textDecoration: 'none',
                        textAlign: 'center'
                      }}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#1A1A1A',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(209, 0, 0, 0.05)';
                        e.currentTarget.style.color = red;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#1A1A1A';
                      }}
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a 
          href={isHome ? "#cta" : "/#cta"}
          style={{
            background: red,
            color: '#FFFFFF',
            padding: '0.8rem 1.8rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: `0 10px 20px rgba(209, 0, 0, 0.2)`
          }}
        >
          Start Project
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ background: 'transparent', border: 'none', color: '#1A1A1A', display: 'block' }}
        className="md:hidden"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: '#FFFFFF',
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 2100,
              overflowY: 'auto'
            }}
          >
            {/* Mobile Menu Header */}
            <div style={{ 
              padding: '1.2rem 5%', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom: '1px solid #F0F0F0'
            }}>
              <Link to="/" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Logo size={40} />
                <span style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase' 
                }}>
                  <span style={{ color: red }}>Fiction</span>{' '}
                  <span style={{ color: '#666666' }}>Master</span>
                </span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#1A1A1A', padding: '0.5rem' }}
              >
                <X size={32} color={red} />
              </button>
            </div>

            <div style={{ padding: '2rem 10%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={handleLinkClick}
                style={{ fontSize: '1.8rem', color: '#1A1A1A', fontWeight: 800, textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}

            <div style={{ borderTop: '1px solid #EEE', paddingTop: '1.5rem', marginTop: '1rem' }}>
              <div style={{ fontSize: '0.9rem', color: '#999', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '1.5rem' }}>
                Services
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {serviceItems.map((item) => (
                  item.highlight ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleLinkClick}
                      style={{ fontSize: '1.4rem', color: red, fontWeight: 800, textDecoration: 'none' }}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      style={{ fontSize: '1.4rem', color: '#1A1A1A', fontWeight: 700, textDecoration: 'none' }}
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </div>

            <a 
              href={isHome ? "#cta" : "/#cta"}
              onClick={handleLinkClick}
              style={{ 
                background: red,
                color: '#FFF', 
                fontSize: '1.5rem', 
                fontWeight: 800,
                padding: '1.2rem',
                borderRadius: '16px',
                textAlign: 'center',
                textDecoration: 'none',
                marginTop: 'auto'
              }}
            >
              Start Project →
            </a>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .md\\:hidden { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden.md\\:flex { display: none !important; }
        }
        a, Link {
           -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
