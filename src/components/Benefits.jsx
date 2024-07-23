'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import content from '@/content';

const addHoverAnimation = e => {
    e.currentTarget.querySelector('h5').classList.remove('duration-500');
    e.currentTarget.querySelector('img').classList.remove('duration-500');
    e.currentTarget.querySelector('h5').classList.add('text-primary', 'duration-300');
    e.currentTarget.querySelector('img').classList.add('border-primary', 'duration-300');
};

const removeHoverAnimation = e => {
    e.currentTarget.querySelector('h5').classList.add('duration-500');
    e.currentTarget.querySelector('img').classList.add('duration-500');
    e.currentTarget.querySelector('h5').classList.remove('text-primary', 'duration-300');
    e.currentTarget.querySelector('img').classList.remove('border-primary', 'duration-300');
};

const BenefitsImage = dynamic(() => import(`@/assets/media/${content.benefits.imageName}`).then(module => {
    const Component = ({ fill, ...props }) => (
        <Image
            {...props}
            priority
            src={module.default}
            alt="benefits"
            width={400}
            sizes="50vw"
            className="w-[400px] object-contain mx-auto"
        />
    );
    Component.displayName = `Image-${content.benefits.imageName}`;
    return Component;
}), {
    loading: () => <div className="w-[400px] object-contain mx-auto bg-gray-200 animate-pulse" />,
});

const dynamicImages = content.benefits.list.map(({ title, imageName }) => ({
    imageName: imageName,
    component: dynamic(() => import(`@/assets/media/${imageName}`).then(module => {
        const Component = () => <img src={module.default.src} alt={title} width={80} height={80} className="block min-w-[56px] min-h-[56px] md:min-w-[80px] md:min-h-[80px] text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] p-2 transition-all" />;
        Component.displayName = `Image-${imageName}`;
        return Component;
    }), {
        loading: () => <div className="block min-w-[56px] min-h-[56px] md:min-w-[80px] md:min-h-[80px] text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] p-2 transition-all bg-gray-200 animate-pulse" />,
    }),
}));

const Benefits = ({ className }) => {
    return (
        <section
            id="benefits"
            className={clsx('px-4 sm:px-8 lg:px-28 py-28 pb-[280px] lg:pb-[240px]', [className])}
        >
            <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-blue-950 text-4xl font-bold">{content.benefits.title}</h2>
                    <div className="relative h-0.5 w-44 bg-gray-300 mx-auto mt-6 mb-8 rounded-[50%]">
                        <div className="absolute -top-[3px] h-2 w-2 bg-primary rounded-full animated duration-4000 infinite moveLeftRight"/>
                    </div>
                    <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.subtitle}</p>
                </div>
            </div>
            <div className="w-full lg:w-11/12 xl:w-full mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full xl:w-1/3 md:w-1/2">
                    {content.benefits.list.slice(0, Math.floor(content.benefits.list.length / 2)).map(image => {
                        const Image = dynamicImages.find(({ imageName }) => (imageName === image.imageName)).component;
                        return (
                            <div
                                key={image.title}
                                className="md:h-[120px] lg:h-[148px] flex flex-col justify-end md:flex-row items-center mb-10 md:pr-2 lg:pr-14 rtl:md:pl-2 rtl:lg:pl-14 rtl:md:pr-0 rtl:lg:pr-0"
                                onMouseEnter={addHoverAnimation}
                                onMouseLeave={removeHoverAnimation}
                            >
                                <div className="order-0 mb-4 md:mb-0 md:order-2 md:ml-4 rtl:md:mr-4 rtl:md:ml-0">
                                    <Image />
                                </div>
                                <div className="lg:w-8/12 text-center md:text-left md:text-right rtl:md:text-left">
                                    <h5 className="text-blue-950 text-lg font-semibold transition-all">{image.title}</h5>
                                    <p className="text-zinc-500 text-sm font-medium leading-loose">{image.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="hidden lg:w-1/3 xl:block">
                    <div className="relative d-benefits-img">
                        <BenefitsImage />
                    </div>
                </div>
                <div className="w-full xl:w-1/3 md:w-1/2">
                    {content.benefits.list.slice(Math.floor(content.benefits.list.length / 2)).map(image => {
                        const BenefitItemImage = dynamicImages.find(({ imageName }) => (imageName === image.imageName)).component;
                        return (
                            <div
                                key={image.title}
                                className="md:h-[120px] lg:h-[148px] flex flex-col md:flex-row items-center mb-10 md:pl-2 lg:pl-10 rtl:md:pr-2 rtl:lg:pr-10 rtl:md:pl-0 rtl:lg:pl-0"
                                onMouseEnter={addHoverAnimation}
                                onMouseLeave={removeHoverAnimation}
                            >
                                <div className="mb-4 md:mb-0 mr-0 md:mr-4 rtl:md:ml-4 rtl:md:mr-0">
                                    <BenefitItemImage />
                                </div>
                                <div className="lg:w-8/12 text-center md:text-left rtl:md:text-right">
                                    <h5 className="text-blue-950 text-lg font-semibold transition-all">{image.title}</h5>
                                    <p className="text-zinc-500 text-sm font-medium leading-loose">{image.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Benefits;