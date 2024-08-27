import React from 'react';
import BlogPost from '@/components/BlogPost';
import content from '@/content';

export const generateMetadata = ({ params }) => {
  const { 'post-name': postNameEncoded } = params;
  const postName = decodeURIComponent(postNameEncoded);
  const currentPost = content.blog.posts.find(post => post.href === `/blog/${postName}`);

  return {
    title: `${currentPost.title}${content.meta.titlePrefix}`,
    description: currentPost.description,
    canonical: `https://suncam.co.il${currentPost.href}`,
    openGraph: {
      siteName: `${content.meta.titlePrefix}${currentPost.title}`,
      title: `${content.meta.titlePrefix}${currentPost.title}`,
      description: currentPost.description,
      url: `https://suncam.co.il${currentPost.href}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.meta.titlePrefix}${currentPost.title}`,
      description: currentPost.description,
    },
  }
};

const BlogPostPage = () => {
  return (
    <BlogPost />
  );
};

export default BlogPostPage;
