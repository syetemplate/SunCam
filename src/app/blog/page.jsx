import Blog from '@/components/Blog';
import Facts from '@/components/Facts';
import Faq from '@/components/Faq';
import Testimonials from '@/components/Testimonials';
import content from '@/content';

export const metadata = {
  title: content.meta.pages.blog.title,
  description: content.meta.pages.blog.description,
  canonical: 'https://suncam.co.il/blog',
  openGraph: {
    siteName: content.meta.pages.blog.title,
    title: content.meta.pages.blog.title,
    description: content.meta.pages.blog.description,
    url: 'https://suncam.co.il/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: content.meta.pages.blog.title,
    description: content.meta.pages.blog.description,
  },
};

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
