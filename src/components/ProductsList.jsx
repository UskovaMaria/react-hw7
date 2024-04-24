import React from 'react';
import ProductItem from './ProductItem';
import { useProductContext } from '../hooks/useProductsContext';

const ProductsList = () => {
  const { products } = useProductContext();

  return (
    <div className="products-list">
      <h2>Products</h2>

      {
        products.map( product => (
          <ProductItem key={product.id} id={product.id} title={product.title} />
      ))}
    </div>
  );
};

export default ProductsList;