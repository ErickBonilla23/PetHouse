import React from 'react';
import './Navbar.css';

export function Navbar(){
  return (
    <div className="navbar-container">
      <div className="logo">PetHouse</div>
      <div className="nav-links">
        <a href="inicio.html" className="nav-link">
          <i className="fas fa-home"></i> Inicio
        </a>
        <a href="nosotros.html" className="nav-link">
          <i className="fas fa-users"></i> Nosotros
        </a>
        <a href="mascotas.html" className="nav-link">
          <i className="fas fa-bone"></i> Mascotas
        </a>
      </div>
      <div className="profile-icon">
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default Navbar;
