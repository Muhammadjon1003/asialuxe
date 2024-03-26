import React from 'react';
import Product from './Product';
import './Products.css'; 
import { useGlobalContext } from '../../../../Context/context';

const Products = () => {
  const {url} = useGlobalContext();

  return (
    <div className="products-container">
      {/* <h1>Mashhur yo'nalishlar</h1> */}
      <div className="products-grid">
        {url.map(item => (
          <Product key={item.id} image={item.image} body={item.body} />
        ))}
      </div>
    </div>
  );
};

export default Products;