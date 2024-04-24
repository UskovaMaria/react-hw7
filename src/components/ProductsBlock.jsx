import React from 'react';
import AddProductForm from './AddProductForm';
import ProductsInfo from './ProductsInfo';
import ProductsList from './ProductsList';

const ProductsBlock = () => {

  return (
    <div className="products-block">

      <div className="add-products">
        <AddProductForm />
      </div>

      <ProductsInfo />

      <ProductsList />
    </div>
  );
};

export default ProductsBlock;