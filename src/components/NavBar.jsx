import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <div className="logo">
        <h2>MiTienda</h2>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
