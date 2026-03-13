import React from 'react';

const Logo = ({ className, size = 32 }) => {
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src="/FMLOGO.png" 
        alt="Fiction Master Logo" 
        style={{ 
          width: 'auto', 
          height: size, 
          objectFit: 'contain' 
        }} 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.style.display = 'none';
          e.target.parentNode.innerHTML = '<span style="color:#C4161C; font-weight:800; font-size:' + size + 'px">M</span>';
        }}
      />
    </div>
  );
};

export default Logo;
