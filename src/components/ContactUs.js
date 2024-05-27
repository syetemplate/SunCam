import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="newsletter-area bg-cover bg-center shadow-md py-10" style={{ backgroundImage: "url('/path-to-your-bg-image.jpg')" }}>
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="newsletter-wrap w-full lg:w-4/5 bg-white p-6 shadow-lg rounded-lg">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="w-full lg:w-2/5 text-center lg:text-left mb-6 lg:mb-0">
                                <div className="newsletter-content">
                                    <h4 className="text-3xl font-bold mb-2 text-left">Newsletter Sign Up</h4>
                                    <span className="text-base font-medium italic text-gray-600 block text-left">Notifications our best deals...</span>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/5">
                                <div className="newsletter-form">
                                    <form action="#" className="flex items-center lg:justify-end">
                                        <input type="email" placeholder="Enter your email..." className="p-4 w-full lg:flex-1 bg-gray-200 border-none rounded-l-lg" />
                                        <button className="btn bg-green-500 text-white font-bold uppercase py-4 px-8 rounded-r-lg">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
