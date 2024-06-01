'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useParams, usePathname } from 'next/navigation';
import content from '@/content';

const numOfRecentPosts = 3;

const dynamicImages = content.blog.posts.map(post => ({
  imageName: post.imageName,
  component: dynamic(() => import(`@/assets/media/${post.imageName}`).then(module => {
    const Component = () => <img src={module.default.src} alt={post.title} width={400} height={300} className="object-contain w-[70px] min-w-[70px] max-w-[70px] p-1" />;
    Component.displayName = `Image-${post.imageName}`;
    return Component;
  }), {
    loading: () => <img width={400} height={300} className="w-[70px] min-w-[70px] max-w-[70px] p-1" />,
  }),
}));

const BlogPost = () => {
  const { 'post-name': postName } = useParams();
  const pathname = usePathname();

  const currentPost = content.blog.posts.find(post => post.href === `/blog/${postName}`);
  if (!currentPost) {
    return null;
  }

  const FeatureImage = dynamic(() => import(`@/assets/media/${currentPost.imageName}`).then(module => {
    const Component = () => <img src={module.default.src} alt={currentPost.title}className="object-contain w-full p-1" />;
    Component.displayName = `Image-${currentPost.imageName}`;
    return Component;
  }), {
    loading: () => <img className="w-full p-1" />,
  });
  
  const breadcrumbLinks = pathname.split('/')
    .map(part => content.header.menu.find(({ href }) => href === `/${part}`))
    .filter(Boolean);

  const recentPosts = content.blog.posts.filter(post => post.href !== currentPost.href).slice(-numOfRecentPosts);

  return (
    <main>
      {/* breadcrumb-area */}
      <section className="breadcrumb-bg flex items-center">
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
        <div className="container mx-auto sm:px-4" style={{ position: 'relative', zIndex: 2 }}>
          <div className="flex flex-wrap justify-center">
            <div className="md:w-4/5 pr-4 pl-4">
              <div className="breadcrumb-content text-center">
                <h2 className="text-white" style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }}>{currentPost.title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-6 mb-4 bg-gray-200 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 3 }}>
                    {breadcrumbLinks.map((link, index) => (
                      <li key={index} className="inline-block pr-2 py-2 text-gray-700">
                        <a href={link.href}>{link.label}<span className="pl-2">{`>`}</span></a>
                      </li>
                    ))}
                    <li className="inline-block pr-2 py-2 text-gray-700" aria-current="page">
                      <a href="#" className="active"><strong>{currentPost.title}</strong></a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}

      {/* blog-area */}
      <section className="pt-120 pb-120">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap">
            <div className="lg:w-2/3 pr-4 pl-4">
              <div className="single-blog-list">
                <div className="blog-list-thumb mb-35">
                  <FeatureImage/>
                </div>
                <div className="blog-list-content blog-details-content">
                  <div className="blog-details-date mb-10">
                    <ul>
                      <li><i className="far fa-clock"></i> {currentPost.date}</li>
                    </ul>
                  </div>
                  <h2>{currentPost.title}</h2>
                  {currentPost.content.map((item, index) => {
                    if (item.type === 'paragraph') {
                      return <p key={index}>{item.text}</p>
                    }
                    if (item.type === 'blockquote') {
                      return <blockquote key={index}>{item.text}</blockquote>
                    }
                    if (item.type === 'image') {
                      const Image = dynamic(() => import(`@/assets/media/${item.imageName}`).then(module => {
                        const Component = () => <img src={module.default.src} alt={item.alt} className="object-contain w-full p-1" />;
                        Component.displayName = `Image-${item.imageName}`;
                        return Component;
                      }), {
                        loading: () => <img className="w-full p-1" />,
                      });
                      return <Image key={index} />;
                    }
                    return null;
                  })}
                  <div className="blog-list-meta">
                    <ul>
                      <li className="blog-post-date">
                        <div className="blog-details-tag">
                          <i className="fas fa-tags"></i>
                          {currentPost.tags.map((tag, index) => (
                            <a href="#" key={index}>{tag}</a>
                          ))}
                        </div>
                      </li>
                      <li className="blog-post-share">
                        {currentPost.share.map((social, index) => (
                          <a href={social.href} key={index}><i className={social.icon}></i></a>
                        ))}
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
                        {currentPost.tags.map((tag, index) => (
                          <li key={index}><a href="#">{tag}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* blog-area-end */}
    </main>
  );
};

export default BlogPost;
