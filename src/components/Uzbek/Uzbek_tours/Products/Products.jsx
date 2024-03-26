import React from 'react';
import { useData } from '../../../../context';
import Product from './Product';
import './Products.css'; 

const Products = () => {
  const data = useData();

  return (
    <div className="products-container">
      {/* <h1>Mashhur yo'nalishlar</h1> */}
      <div className="products-grid">
        {data.map(item => (
          <Product key={item.id} image={item.image} body={item.body} />
        ))}
      </div>
    </div>
  );
};

export default Products;