import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>{greeting}</h3>
      <p>Aquí se mostrará nuestro catálogo de productos próximamente.</p>
    </div>
  );
};

export default ItemListContainer;
