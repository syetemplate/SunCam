import blobImage from '@/assets/media/blog_img01.jpg';

const Blog = () => {
    return (
        <section id="blog" className="blog-area gray-bg pt-110 pb-90">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 md:w-4/5 pr-4 pl-4">
                        <div className="section-title text-center mb-55">
                            <h2>Blog & Tips Suppke</h2>
                            <div className="bar"></div>
                            <p>There are many variations of passages of Lorem Ipsum that available, but the majority have fered
                                alteration in some form, by injected humour.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                        <div className="single-blog-post mb-30">
                            <div className="b-post-thumb">
                                <a href="blog-details.html"><img src={blobImage.src} alt="img" /></a>
                            </div>
                            <div className="blog-content">
                                <span>19. august. 2019</span>
                                <h3><a href="blog-details.html">Dietary Supplement Report Market Expected</a></h3>
                                <p>Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types
                                    industry.</p>
                                <a href="blog-details.html">Read More <i className="fas fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                        <div className="single-blog-post mb-30">
                            <div className="b-post-thumb">
                                <a href="blog-details.html"><img src={blobImage.src} alt="img" /></a>
                            </div>
                            <div className="blog-content">
                                <span>19. august. 2019</span>
                                <h3><a href="blog-details.html">Supplementing Your Diet Towards Life</a></h3>
                                <p>Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types
                                    industry.</p>
                                <a href="blog-details.html">Read More <i className="fas fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                        <div className="single-blog-post mb-30">
                            <div className="b-post-thumb">
                                <a href="blog-details.html"><img src={blobImage.src} alt="img" /></a>
                            </div>
                            <div className="blog-content">
                                <span>19. august. 2019</span>
                                <h3><a href="blog-details.html">Homeopathic consultation Acupunc Expected</a></h3>
                                <p>Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types
                                    industry.</p>
                                <a href="blog-details.html">Read More <i className="fas fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
