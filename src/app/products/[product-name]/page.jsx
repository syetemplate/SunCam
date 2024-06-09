'use client';

import { useParams } from 'next/navigation';
import Product from '@/components/Product';
import Benefits from '@/components/Benefits';
import Newsletter from '@/components/Newsletter';
import content from '@/content';

const ProductPage = () => {
  const { 'product-name': productName } = useParams();
  const product = content.products.categories.find(({ href }) => href === `/products/${productName}`);

  if (!product) {
    return null;
  }

  return (
    <>
      <Product product={product}/>
      <Benefits />
      <Newsletter />
    </>
  );
};

export default ProductPage;
