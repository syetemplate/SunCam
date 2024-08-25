import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import content from '@/content';

const HeroImage = dynamic(() => import(`@/assets/media/${content.hero.imageName}`).then(module => {
    const Component = ({ fill, ...props }) => (
        <picture>
            <Image
                {...props}
                src={module.default}
                priority
                alt="hero"
                width={500}
                height={500}
                // sizes="(min-width: 1024px) 30vw, 90vw"
                className="w-[500px] object-contain p1"
                style={{ visibility: 'visible' }}
            />
        </picture>
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
                            className="text-blue-950 text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold capitalize mb-4 mt-16 lg:mt-0"
                            style={{ visibility: 'visible' }}
                            dangerouslySetInnerHTML={{ __html: content.hero.title }}
                        />
                        <p
                            className="text-zinc-500 font-medium mb-8"
                            style={{ visibility: 'visible' }}
                            dangerouslySetInnerHTML={{ __html: content.hero.description }}
                        />
                        <div className="slider-btn flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 rtl:lg:space-x-reverse">
                            <a
                                href={content.hero.cta.href}
                                role="button"
                                className="inline-block bg-primary text-white py-4 px-8 rounded-full text-lg font-medium transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary wow fadeInLeft"
                                style={{ visibility: 'visible' }}
                            >
                                {content.hero.cta.text}
                            </a>
                            <a
                                href={content.hero.cta2.href}
                                role="button"
                                variant="secondary"
                                className="inline-block bg-white text-gray-700 py-4 px-8 rounded-full text-lg font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hidden lg:inline-block wow fadeInRight"
                                style={{ visibility: 'visible' }}
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
