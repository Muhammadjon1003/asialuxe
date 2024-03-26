import React from 'react';

const Product = ({ image, body }) => {
  return (
    <div className="product-item">
      <img src={image} alt="Product" style={{ width: '100%', height: 'auto' }} />
      <p>{body}</p>
    </div>
  );
};

export default Product;
