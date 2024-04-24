import React, { useState } from 'react';
import { useProductContext } from '../hooks/useProductsContext';

const AddProductForm = () => {
  const { products, setProducts } = useProductContext();
  const [newProductTitle, setNewProductTitle] = useState('');

  const handleInputChange = (event) => {
    setNewProductTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newProductTitle.trim()) return; 
    const newProduct = {
      id: products.length + 1, 
      title: newProductTitle.trim(),
    };

    setProducts([...products, newProduct]);
    setNewProductTitle(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newProductTitle}
        onChange={handleInputChange}
        placeholder="Enter product title"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;