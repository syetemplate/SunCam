import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import content from '@/content';

const HeroImage = dynamic(() => import(`@/assets/media/${content.hero.imageName}`).then(module => {
    const Component = ({ fill, ...props }) => (
        <Image
            {...props}
            priority
            src={module.default}
            alt="hero"
            width={880}
            height={700}
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="w-[880px] object-contain p1 fadeInRight animated2"
            data-wow-delay="0.6s"
            style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}
        />
    );
    Component.displayName = `Image-${content.hero.imageName}`;
    return Component;
}), {
    loading: () => <div className="w-[880px] h-[700px] bg-gray-200 animate-pulse" />,
});

const Hero = ({ className }) => {
    return (
        <section
            id="hero"
            className={clsx('lg:px-28 py-20', [className])}
        >
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4">
                <div className="lg:w-1/2 lg:pr-8 rtl:lg:pl-8 rtl:lg:pr-0">
                    <div className="slider-content text-center lg:text-left rtl:lg:text-right">
                        <h2
                            className="text-blue-950 text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold capitalize mb-4 mt-16 lg:mt-0 wow fadeInUp animated2"
                            data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}
                            dangerouslySetInnerHTML={{ __html: content.hero.title }}
                        />
                        <p
                            className="text-zinc-500 font-medium mb-8 wow fadeInUp animated2"
                            data-wow-delay="0.4s"
                            style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                            dangerouslySetInnerHTML={{ __html: content.hero.description }}
                        />
                        <div className="slider-btn flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 rtl:lg:space-x-reverse">
                            <a
                                href={content.hero.cta.href}
                                role="button"
                                className="inline-block bg-primary text-white py-4 px-8 rounded-full text-lg font-medium transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary wow fadeInLeft"
                                data-wow-delay="0.6s"
                                style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}
                            >
                                {content.hero.cta.text}
                            </a>
                            <a
                                href={content.hero.cta2.href}
                                role="button"
                                variant="secondary"
                                className="inline-block bg-white text-gray-700 py-4 px-8 rounded-full text-lg font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hidden lg:inline-block wow fadeInRight"
                                data-wow-delay="0.6s"
                                style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInRight' }}
                            >
                                {content.hero.cta2.text}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8 rtl:lg:pr-8 rtl:lg:pl-0">
                    <HeroImage />
                </div>
            </div>
        </section>
    );
};

export default Hero;
