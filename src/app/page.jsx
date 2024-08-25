import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import content from '@/content';

export const metadata = {
  title: content.meta.pages.homePage.title,
  description: content.meta.pages.homePage.description,
  canonical: 'https://suncam.co.il',
  'og:title': content.meta.pages.homePage.title,
  'og:description': content.meta.pages.homePage.description,
  'og:url': 'https://suncam.co.il',
  'twitter:card': 'summary_large_image',
  'twitter:title': content.meta.pages.homePage.title,
  'twitter:description': content.meta.pages.homePage.description,
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Benefits />
    </>
  );
};

export default HomePage;
