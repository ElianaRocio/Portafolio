import React from 'react';
import { Link } from 'react-router-dom';
export default Button;

const Button = ({ isActive, children, onClick, to }) => {
  const baseStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: '20px',
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: 'bolder',
    textAlign: 'center',
    textDecoration: 'none',
    color: isActive ? '#ffffff' : '#0a4c58', // Texto blanco si activo
    backgroundColor: isActive ? '#ef3a5d' : 'transparent', // Fondo rosa si activo
    border: `2px solid ${isActive ? '#ef3a5d' : '#0a4c58'}`, // Borde rosa si activo
    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
    margin: '0 10px', // Espaciado entre botones
  };

  const hoverStyle = {
    backgroundColor: isActive ? '#ef3a5d' : 'rgba(12, 105, 128, 0.8)', // Fondo con 80% opacidad si no está activo
    color: '#ffffff', // Texto blanco en hover
    borderColor: '#ef3a5d', // Borde rosa en hover
  };

  const handleMouseEnter = (e) => {
    if (!isActive) {
      Object.assign(e.currentTarget.style, hoverStyle);
    }
  };

  const handleMouseLeave = (e) => {
    if (!isActive) {
      Object.assign(e.currentTarget.style, baseStyle);
    }
  };

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};


