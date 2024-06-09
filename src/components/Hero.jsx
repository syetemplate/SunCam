import heroImage from '@/assets/media/hero.png';
import content from '@/content';

const Hero = () => {
    const [titlePart1, titlePart2, titlePart3, ...titleRest] = content.hero.title.split(' ');

    return (
        <section id="hero" className="2xl:px-28 py-20">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4">
                <div className="lg:w-1/2 lg:pr-8">
                    <div className="slider-content text-center lg:text-left">
                        <h2 className="text-blue-950 text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold capitalize mb-4 mt-16 lg:mt-0 wow fadeInUp animated" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            {titlePart1}{titlePart2 && ` ${titlePart2}`}{titlePart3 && <span className="lg:text-limegreen">{` ${titlePart3}`}</span>}{` ${titleRest.join(' ') || ''}`}
                        </h2>
                        <p className="text-zinc-500 font-medium mb-8 wow fadeInUp animated" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                            {content.hero.description}
                        </p>
                        <div className="slider-btn lg:flex">
                            <button className="bg-limegreen text-white py-3 px-6 rounded-full lg:mr-4 wow fadeInLeft animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                <a href={content.hero.cta.href}>{content.hero.cta.text}</a>
                            </button>
                            <button variant="secondary" className="bg-white text-gray-700 py-3 px-6 rounded-full hidden lg:block wow fadeInRight animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}>
                                <a href={content.hero.cta2.href}>{content.hero.cta2.text}</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8">
                    <img
                        src={heroImage.src}
                        alt={content.hero.title}
                        className="w-full wow fadeInRight animated"
                        data-wow-delay="0.6s"
                        style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;