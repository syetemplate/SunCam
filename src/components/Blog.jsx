import content from '@/content';
import blobImage from '@/assets/media/blog_img01.jpg';

const Blog = () => {
    return (
        <section id="blog" className="px-4 2xl:px-28 gray-bg pt-110 pb-90">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 md:w-4/5 pr-4 pl-4">
                        <div className="section-title text-center mb-55">
                            <h2>{content.blog.meta.title}</h2>
                            <div className="bar"></div>
                            <p>{content.blog.meta.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {content.blog.posts.map((post, index) => (
                        <div key={index} className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                            <div className="single-blog-post mb-30">
                                <div className="b-post-thumb">
                                    <a href={post.href}><img src={blobImage.src} alt="img" /></a>
                                </div>
                                <div className="blog-content">
                                    <span>{post.date}</span>
                                    <h3><a href={post.href}>{post.title}</a></h3>
                                    <p>{post.description}</p>
                                    <a href={post.href}>Read More <i className="fas fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
