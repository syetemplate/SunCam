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
    canonical: `https://suncam.co.il${productItem.href}`,
    openGraph: {
      siteName: productItem.name,
      title: productItem.name,
      description: productItem.description,
      url: `https://suncam.co.il${productItem.href}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: productItem.name,
      description: productItem.description,
    },
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
