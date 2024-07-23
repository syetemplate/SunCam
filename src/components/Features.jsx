'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import featuresBgImage from '@/assets/bg/features.jpg';
import content from '@/content';

const addFlipAnimation = e => e.currentTarget.querySelector('img').classList.add('flip');
const removeFlipAnimation = e => e.currentTarget.querySelector('img').classList.remove('flip');

const dynamicImages = content.features.list.map(({ title, imageName }) => ({
    imageName: imageName,
    component: dynamic(() => import(`@/assets/media/${imageName}`).then(module => {
        const Component = () => <img src={module.default.src} alt={title} width={60} height={60} className="w-[60px] h-[60px] object-contain mx-auto mb-5 animated2" />;
        Component.displayName = `Image-${imageName}`;
        return Component;
    }), {
        loading: () => <div className="w-[60px] h-[60px] mx-auto mb-5 bg-gray-200 animate-pulse" />,
    }),
}));

const Features = ({ className }) => {
    return (
        <section
            id="features"
            className={clsx('bg-cover bg-center px-4 sm:px-8 lg:px-28 py-20 min-w-full shadow-[0px_2px_12px_7px_rgba(82,33,162,0.05)]', [className])}
            style={{
                backgroundImage: `url(${featuresBgImage.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {content.features.list.map(image => {
                    const Image = dynamicImages.find(({ imageName }) => (imageName === image.imageName)).component;
                    return (
                        <div
                            key={image.title}
                            className="bg-white text-center mb-8 shadow-[0px_0px_9px_1px_rgba(0,0,0,0.08)] px-8 py-12"
                            onMouseEnter={addFlipAnimation}
                            onAnimationEnd={removeFlipAnimation}
                        >
                            <Image />
                            <h1 className="text-blue-950 text-lg font-semibold mb-3">{image.title}</h1>
                            <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                                {image.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;