'use client';

import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { ProductsWithImages } from '@/types';
import { getProductsAPI } from '../services';

function ProductListView() {
  const [products, setProducts] = useState<ProductsWithImages[]>([]);

  const getProductData = async () => {
    const result = await getProductsAPI();
    setProducts(result?.data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListView;
