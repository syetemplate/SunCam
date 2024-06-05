import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Video from '@/components/Video';
import Gallery from '@/components/Gallery';
import Newsletter from '@/components/Newsletter';
import Blog from '@/components/Blog';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Benefits />
      {/* <Video /> */}
      {/* <Blog /> */}
      <Newsletter />
    </>
  );
};

export default HomePage;
