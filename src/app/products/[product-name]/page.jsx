import Product from '@/components/Product';
import Benefits from '@/components/Benefits';
import Faq from '@/components/Faq';
import content from '@/content';

export const generateMetadata = ({ params }) => {
  const { 'product-name': productName } = params;
  const productItem = content.products.items.find(({ href }) => href === `/products/${productName}`) || content.products.items[0];

  return {
    title: productItem.name,
    description: productItem.description,
    canonical: `https://minidrone.co.il${productItem.href}`,
    'og:title': productItem.name,
    'og:description': productItem.description,
    'og:url': `https://minidrone.co.il${productItem.href}`,
    'twitter:card': 'summary_large_image',
    'twitter:title': productItem.name,
    'twitter:description': productItem.description,
  }
};

const ProductPage = () => {
  return (
    <>
      <Product />
      <Benefits />
      <Faq />
    </>
  );
};

export default ProductPage;
