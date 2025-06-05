import React from 'react';
import ProductItem from './ProductItem';
import { ProductsWithImages } from '@/types';

function productList(props: { products: ProductsWithImages[] }) {
  const { products } = props;

  return (
    <div className="flex flex-wrap justify-between items-center w-full my-10">
      {products.map((item) => {
        return <ProductItem key={item.name} product={item} />;
      })}
    </div>
  );
}

export default productList;
