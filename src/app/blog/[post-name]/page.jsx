import React from 'react';
import BlogPost from '@/components/BlogPost';
import content from '@/content';

export const generateMetadata = ({ params }) => {
  const { 'post-name': postName } = params;
  const currentPost = content.blog.posts.find(post => post.href === `/blog/${postName}`);

  return {
    title: `${currentPost.title}${content.meta.titlePrefix}`,
    description: currentPost.description,
    canonical: `https://minidrone.co.il${currentPost.href}`,
    'og:title': `${currentPost.title}${content.meta.titlePrefix}`,
    'og:description': currentPost.description,
    'og:url': `https://minidrone.co.il${currentPost.href}`,
    'twitter:card': 'summary_large_image',
    'twitter:title': `${currentPost.title}${content.meta.titlePrefix}`,
    'twitter:description': currentPost.description,
  }
};

const BlogPostPage = () => {
  return (
    <BlogPost />
  );
};

export default BlogPostPage;
