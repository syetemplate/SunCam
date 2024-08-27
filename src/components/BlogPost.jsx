'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import blogBgImage from '@/assets/bg/blog.jpg';
import content from '@/content';

const numOfRecentPosts = 3;

const dynamicImages = content.blog.posts.map(post => ({
  imageName: post.imageName,
  component: dynamic(() => import(`@/assets/media/${post.imageName}`).then(module => {
    const Component = ({ fill, ...props }) => (
      <Image
        {...props}
        src={module.default}
        alt={post.title}
        width={400}
        height={300}
        sizes="50vw"
        style={{ objectFit: 'contain' }}
        className="object-contain w-[70px] min-w-[70px] max-w-[70px] p-1"
      />
    );
    Component.displayName = `Image-${post.imageName}`;
    return Component;
  }), {
    loading: () => <div className="w-[70px] min-w-[70px] max-w-[70px] p-1 bg-gray-200 animate-pulse" />,
  }),
}));

const BlogPost = () => {
  const [shareUrl, setShareUrl] = React.useState('');
  const { push } = useRouter();
  const { 'post-name': postName } = useParams();
  const pathname = usePathname();

  const currentPost = content.blog.posts.find(post => post.href === `/blog/${postName}`);

  const FeatureImage = currentPost ? dynamic(() => import(`@/assets/media/${currentPost.imageName}`).then(module => {
    const Component = ({ fill, ...props }) => (
      <Image
        {...props}
        src={module.default}
        alt={currentPost.title}
        height={600}
        sizes="50vw"
        style={{ objectFit: 'contain' }}
        className="object-contain h-[600px] p-1"
      />
    );
    Component.displayName = `Image-${currentPost.imageName}`;
    return Component;
  }), {
    loading: () => <div className="h-[300px] p-1 bg-gray-200 animate-pulse" />,
  }) : () => null;

  const breadcrumbLinks = pathname.split('/')
    .map(part => content.header.menu.find(({ href }) => href === `/${part}`))
    .filter(Boolean);

  const recentPosts = content.blog.posts.filter(post => post.href !== currentPost?.href).slice(-numOfRecentPosts);

  const initShareUrl = React.useCallback(() => {
    setShareUrl(window.location.href);
  }, []);

  const init = React.useCallback(() => {
    if (!currentPost) {
      push('/');
      return;
    }
    initShareUrl();
  }, [currentPost, initShareUrl, push]);

  React.useLayoutEffect(init, [init]);

  return (
    <>
      {/* breadcrumb-area */}
      <section
        className="breadcrumb-bg flex flex-col items-center justify-center min-w-full"
        style={{ backgroundImage: `url(${blogBgImage.src})` }}
      >
        <div className="container mx-auto z-10 p-4 lg:px-28 flex flex-wrap justify-center z-10">
          <div className="md:w-4/5 pr-4 pl-4">
            <div className="breadcrumb-content text-center">
              <h2 className="text-white" style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }}>{currentPost?.title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-6 mb-4 bg-gray-200 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 3 }}>
                  {breadcrumbLinks.map((link, index) => (
                    <li key={index} className="inline-block pr-2 py-2 text-gray-700">
                      <a href={link.href}>{link.label}<span className="pr-2">{`>`}</span></a>
                    </li>
                  ))}
                  <li className="inline-block pr-2 py-2 text-gray-700" aria-current="page">
                    <a href="#" className="active"><strong>{currentPost?.title}</strong></a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}

      {/* blog-area */}
      <section className="pt-60 pb-[344px] lg:pb-[190px] px-4 sm:px-8 xl:px-24">
        <div className="flex flex-wrap">
          <div className="lg:w-2/3 pr-4 pl-4 lg:pl-16">
            <div className="single-blog-list">
              <div className="blog-list-thumb mb-35">
                <FeatureImage />
              </div>
              <div className="blog-list-content blog-details-content">
                <div className="blog-details-date mb-10">
                  <ul>
                    <li><i className="far fa-clock"></i> {currentPost?.date}</li>
                  </ul>
                </div>
                <h2>{currentPost?.title}</h2>
                {currentPost?.content.map((item, index) => {
                  if (item.type === 'paragraph') {
                    return <p key={index}>{item.text}</p>
                  }
                  if (item.type === 'blockquote') {
                    return <blockquote key={index}>{item.text}</blockquote>
                  }
                  if (item.type === 'image') {
                    const PostImage = dynamic(() => import(`@/assets/media/${item.imageName}`).then(module => {
                      // const Component = () => <img src={module.default.src} alt={item.alt} className="object-contain w-full p-1" />;
                      const Component = ({ fill, ...props }) => (
                        <Image
                          {...props}
                          src={module.default}
                          alt={item.alt}
                          width={400}
                          height={300}
                          sizes="90vw"
                          style={{ objectFit: 'contain' }}
                          className="object-contain w-[400px] p-1 my-8"
                        />
                      );
                      Component.displayName = `Image-${item.imageName}`;
                      return Component;
                    }), {
                      loading: () => <div className="object-contain w-[400px] p-1 my-8 bg-gray-200 animate-pulse" />,
                    });
                    return <PostImage key={index} />;
                  }
                  return null;
                })}
                <div className="blog-list-meta">
                  <ul>
                    <li className="blog-post-date">
                      <div className="blog-details-tag">
                        <i className="fas fa-tags"></i>
                        {currentPost?.tags.map((tag, index) => (
                          <a href="#" key={index}>{tag}</a>
                        ))}
                      </div>
                    </li>
                    <li className="blog-post-share">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        className="bg-blue-700"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href={`https://www.x.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        className="bg-black"
                      >
                        <i className="fa-solid fa-x" />
                      </a>
                      <a
                        href={`https://www.pinterest.com/pin/create/button/?url=${shareUrl}`}
                        target="_blank"
                        className="bg-red-600"
                      >
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 pr-4 pl-4">
            <aside className="blog-sidebar">
              <div className="widget mb-40">
                <div className="single-sidebar white-bg">
                  <div className="sidebar-title mb-25">
                    <h3>{content.blogPost.recentPosts}</h3>
                  </div>
                  <div className="rc-post">
                    <ul>
                      {recentPosts.map((post, index) => {
                        const Image = dynamicImages.find(({ imageName }) => (imageName === post.imageName)).component;

                        return (
                          <li key={index}>
                            <div className="rc-post-thumb">
                              <a href={post.href}><Image /></a>
                            </div>
                            <div className="rc-post-content">
                              <h5 className="overflow-hidden text-ellipsis line-clamp-2"><a href={post.href}>{post.title}</a></h5>
                              <span>{post.date}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="single-sidebar white-bg">
                  <div className="sidebar-title mb-25">
                    <h3>{content.blogPost.tags}</h3>
                  </div>
                  <div className="tag-list">
                    <ul>
                      {currentPost?.tags.map((tag, index) => (
                        <li key={index}><a href="#">{tag}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* blog-area-end */}
    </>
  );
};

export default BlogPost;
