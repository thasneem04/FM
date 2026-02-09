import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
        width: '52px',
        height: '52px',
        borderRadius: '999px',
        border: '1px solid rgba(196, 22, 28, 0.25)',
        background: '#C4161C',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1100,
        boxShadow: '0 12px 28px rgba(196, 22, 28, 0.35)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition:
          'opacity 0.35s ease, transform 0.35s ease, box-shadow 0.25s ease, scale 0.25s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.scale = '1.05';
        e.currentTarget.style.boxShadow = '0 16px 34px rgba(196, 22, 28, 0.45)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.scale = '1';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(196, 22, 28, 0.35)';
      }}
    >
      <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>↑</span>
    </button>
  );
};

export default ScrollToTop;
