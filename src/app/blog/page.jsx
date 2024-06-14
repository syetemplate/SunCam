import Blog from '@/components/Blog';
import Facts from '@/components/Facts';
import Faq from '@/components/Faq';
import Testimonials from '@/components/Testimonials';

const BlogPage = () => {
  return (
    <>
      <Blog />
      <Facts />
      <Faq className='pt-110 pb-90'/>
      <Testimonials />
    </>
  );
};

export default BlogPage;
