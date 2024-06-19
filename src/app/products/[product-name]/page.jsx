'use client';

import { useParams } from 'next/navigation';
import Product from '@/components/Product';
import Benefits from '@/components/Benefits';
import Faq from '@/components/Faq';
import content from '@/content';

const ProductPage = () => {
  const { 'product-name': productName } = useParams();
  const productItem = content.products.items.find(({ href }) => href === `/products/${productName}`);

  if (!productItem) {
    return null;
  }

  return (
    <>
      <Product productItem={productItem}/>
      <Benefits />
      <Faq />
    </>
  );
};

export default ProductPage;
