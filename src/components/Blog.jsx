'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import content from '@/content';

const dynamicImages = content.blog.posts.map(post => ({
    imageName: post.imageName,
    component: dynamic(() => import(`@/assets/media/${post.imageName}`).then(module => {
        const Component = () => <img src={module.default.src} alt={post.title} width={400} height={300} className="object-contain w-full p-1" />;
        Component.displayName = `Image-${post.imageName}`;
        return Component;
    }), {
        loading: () => <img width={400} height={300} className="w-full p-1" />,
    }),
}));

const Blog = ({ className }) => {
    return (
        <section
            id="blog"
            className={clsx('flex flex-col items-center min-w-full px-4 lg:px-28 sm:px-4 gray-bg pt-110 pb-90', [className])}
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 md:w-4/5 pr-4 pl-4">
                        <div className="section-title text-center mb-55">
                            <h2>{content.blog.title}</h2>
                            <div className="bar"></div>
                            <p>{content.blog.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {content.blog.posts.map((post, index) => {
                        const Image = dynamicImages.find(({ imageName }) => (imageName === post.imageName)).component;

                        return (
                            <div key={index} className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                                <div className="single-blog-post mb-30">
                                    <div className="b-post-thumb">
                                        <a href={post.href}>
                                            <Image />
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <span>{post.date}</span>
                                        <h3><a href={post.href}>{post.title}</a></h3>
                                        <p>{post.description}</p>
                                        <a href={post.href}>{`${content.blog.readMore}`}<i className="fas fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blog;
