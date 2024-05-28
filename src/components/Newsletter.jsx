import content from '@/content';

const Newsletter = () => {
    return (
        <section id="newsletter" className="px-4 2xl:px-28">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="newsletter-wrap">
                            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                                <div className="w-full pr-4 pl-4">
                                    <div className="newsletter-content mb-[25px] text-center lg:text-left">
                                        <h4>{content.newsletter.title}</h4>
                                        <span>{content.newsletter.description}</span>
                                    </div>
                                </div>
                                <div className="w-full pr-4 pl-4">
                                    <div className="newsletter-form">
                                        <form action="#" className="flex-col sm:flex-row">
                                            <input type="email" placeholder={content.newsletter.emailPlaceholder} className="w-full"/>
                                            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline">{content.newsletter.submit}</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
