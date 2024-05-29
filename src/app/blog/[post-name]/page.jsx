"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import content from '@/content';
import blogListThumb from '@/assets/media/blog_list_thumb01.jpg';
import rcPostThumb1 from '@/assets/media/blog_list_thumb01.jpg'; // Changed to match provided images
import blogDetailsImg1 from '@/assets/media/blog_details_img01.jpg'; // Added for consistency

const BlogPost = () => {
  const { 'post-name': blogName } = useParams();
  
  const blog = content.blog.posts.find(post => post.href === `/blog/${blogName}`);
  
  debugger;
  if (!blog) {
    return <p>Loading...</p>;
  }

  const { breadcrumb, sidebar } = content.blogPost;

  return (
    <main>
      {/* breadcrumb-area */}
      <section className="breadcrumb-area breadcrumb-bg flex items-center" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
        <div className="container mx-auto sm:px-4" style={{ position: 'relative', zIndex: 2 }}>
          <div className="flex flex-wrap justify-center">
            <div className="md:w-4/5 pr-4 pl-4">
              <div className="breadcrumb-content text-center">
                <h2 className="text-white" style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }}>{breadcrumb.title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-gray-200 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 3 }}>
                    {breadcrumb.links.map((link, index) => (
                      <li key={index} className={`inline-block px-2 py-2 text-gray-700 ${link.active ? 'active' : ''}`} aria-current={link.active ? 'page' : undefined}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}

      {/* blog-area */}
      <section className="blog-area pt-120 pb-120">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap">
            <div className="lg:w-2/3 pr-4 pl-4">
              <div className="single-blog-list">
                <div className="blog-list-thumb mb-35">
                  <img src={blogListThumb.src} alt="Blog Thumbnail" />
                </div>
                <div className="blog-list-content blog-details-content">
                  <div className="blog-details-date mb-10">
                    <ul>
                      <li><i className="far fa-clock"></i> {blog.date}</li>
                    </ul>
                  </div>
                  <h2>{blog.title}</h2>
                  {blog.content.map((item, index) => {
                    switch (item.type) {
                      case 'paragraph':
                        return <p key={index}>{item.text}</p>;
                      case 'blockquote':
                        return <blockquote key={index}>{item.text}</blockquote>;
                      case 'image':
                        return <img key={index} src={item.src} alt={item.alt} />;
                      default:
                        return null;
                    }
                  })}
                  <div className="blog-list-meta">
                    <ul>
                      <li className="blog-post-date">
                        <div className="blog-details-tag">
                          <i className="fas fa-tags"></i>
                          {blog.tags.map((tag, index) => (
                            <a href="#" key={index}>{tag}</a>
                          ))}
                        </div>
                      </li>
                      <li className="blog-post-share">
                        {blog.share.map((social, index) => (
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
                      <h3>{sidebar.recentPosts.title}</h3>
                    </div>
                    <div className="rc-post">
                      <ul>
                        {sidebar.recentPosts.posts.map((post, index) => (
                          <li key={index}>
                            <div className="rc-post-thumb">
                              <a href="#"><img src={rcPostThumb1.src} alt="Recent Post" /></a>
                            </div>
                            <div className="rc-post-content">
                              <h5><a href="#">{post.title}</a></h5>
                              <span>{post.date}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <div className="single-sidebar white-bg">
                    <div className="sidebar-title mb-25">
                      <h3>{sidebar.tags.title}</h3>
                    </div>
                    <div className="tag-list">
                      <ul>
                        {sidebar.tags.tags.map((tag, index) => (
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
