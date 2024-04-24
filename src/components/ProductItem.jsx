import React from 'react';
import { useProductContext } from '../hooks/useProductsContext';

const ProductItem = ({ id, title }) => {
  const { products, setProducts } = useProductContext();

  const handleDelete = () => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="product-item">
      <div>{title}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;