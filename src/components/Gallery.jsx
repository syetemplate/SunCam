'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import content from '@/content';

const activeButtonClassName = 'px-[18px] py-4 md:py-2 mx-0 md:mx-0.5 my-0.5 md:my-0 text-[15px] font-medium rounded-full transition duration-300 bg-limegreen text-white shadow-[0px_0px_24px_0px_rgba(42,203,53,0.48)]';
const inactiveButtonClassName = 'px-[18px] py-4 md:py-2 mx-0 md:mx-0.5 my-0.5 md:my-0 text-[15px] font-medium rounded-full transition duration-300 bg-white text-zinc-500 hover:bg-limegreen hover:text-white border-transparent';

const addFadeInLeftAnimation = e => {
    e.currentTarget.querySelectorAll('[class*="animated"]').forEach(el => {
        el.classList.remove('fadeOut');
        el.classList.add('fadeInLeft');
    });
};

const removeFadeInLeftAnimation = e => {
    e.currentTarget.querySelectorAll('[class*="animated"]').forEach(el => {
        el.classList.remove('fadeInLeft');
        el.classList.add('fadeOut');
    });
};

const generateImageProps = image => ({
    ...(image ? {
        alt: image.categories.join(', '),
        width: image.width,
        height: image.height,
        className: 'object-contain w-full p-1',
    } : {
        className: 'w-full p-1 zoomIn animated duration-300'
    }),
});

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = React.useState(content.gallery.categories[Math.floor(content.gallery.categories.length / 2)]);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const filteredImages = content.gallery.images.filter(image => image.categories.includes(selectedCategory));

    const onImageContainerClick = e => {
        const image = e.currentTarget.querySelector('img');
        setSelectedImage({
            src: image.src,
            alt: image.alt,
            width: image.width,
            height: image.height,
            className: image.class,
        });
    };

    return (
        <section className="px-4 pt-28 pb-24">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-blue-950 text-4xl font-bold">{content.gallery.title}</h2>
                    <div className="relative h-0.5 w-44 bg-gray-300 mx-auto mt-6 mb-8 rounded-[50%]">
                        <div className="absolute -top-[3px] h-2 w-2 bg-limegreen rounded-full animated duration-2s infinite moveLeftRight"></div>
                    </div>
                </div>
                <div className="text-center mb-12">
                    <div className="flex flex-col md:flex-row md:inline-flex md:flex-wrap justify-center bg-white rounded-xl shadow-[0px_0px_27px_0px_rgba(149,149,149,0.22)] py-6 px-10 md:px-20">
                        {content.gallery.categories.map(category => {
                            const [categoryPart1, ...categoryRest] = category.split(' ');
                            return (
                                <button
                                    key={category}
                                    className={selectedCategory === category ? activeButtonClassName : inactiveButtonClassName}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {categoryPart1}{categoryRest?.length && <strong>{` ${categoryRest.join(' ')}`}</strong>}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-7.5">
                    <div className="md:w-1/3">
                        <div className="flex flex-col gap-7.5">
                            {filteredImages.map((image, i) => {
                                if (i % 3 !== 0) {
                                    return;
                                }

                                const Image = dynamic(() => import(`@/assets/media/${image.fileName}`).then(module => {
                                    const Component = () => <img src={module.default.src} {...generateImageProps(image)} />;
                                    Component.displayName = `Image-${image.fileName}`;
                                    return Component;
                                }), {
                                    loading: () => <img src={`https://placehold.co/${image.width}x${image.height}`} {...generateImageProps()} />
                                });

                                return (
                                    <div key={i} className={image.categories.join(' ')}>
                                        <div
                                            className="mb-7.5 relative group cursor-pointer"
                                            onMouseEnter={addFadeInLeftAnimation}
                                            onMouseLeave={removeFadeInLeftAnimation}
                                            onClick={onImageContainerClick}
                                        >
                                            <div className="relative">
                                                <Image />
                                                <div className="absolute inset-0 bg-limegreen opacity-0 transition-opacity duration-500 group-hover:opacity-75 m-1"></div>
                                            </div>
                                            <div className="absolute left-7 top-10 z-10 opacity-0 group-hover:opacity-100">
                                                <h5 className="text-2xl font-extrabold text-white relative duration-500 animated">
                                                    {image.title}
                                                </h5>
                                                <span className="inline-block text-sm font-medium text-white duration-500 delay-100 animated">{image.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="flex flex-col gap-7.5">
                            {filteredImages.map((image, i) => {
                                if (i % 3 !== 1) {
                                    return;
                                }

                                const Image = dynamic(() => import(`@/assets/media/${image.fileName}`).then(module => {
                                    const Component = () => <img src={module.default.src} {...generateImageProps(image)} />;
                                    Component.displayName = `Image-${image.fileName}`;
                                    return Component;
                                }), {
                                    loading: () => <img src={`https://placehold.co/${image.width}x${image.height}`} {...generateImageProps()} />
                                });

                                return (
                                    <div key={i} className={image.categories.join(' ')}>
                                        <div
                                            className="mb-7.5 relative group cursor-pointer"
                                            onMouseEnter={addFadeInLeftAnimation}
                                            onMouseLeave={removeFadeInLeftAnimation}
                                            onClick={onImageContainerClick}
                                        >
                                            <div className="relative">
                                                <Image />
                                                <div className="absolute inset-0 bg-limegreen opacity-0 transition-opacity duration-500 group-hover:opacity-75 m-1"></div>
                                            </div>
                                            <div className="absolute left-7 top-10 z-10 opacity-0 group-hover:opacity-100">
                                                <h5 className="text-2xl font-extrabold text-white relative duration-500 animated">
                                                    {image.title}
                                                </h5>
                                                <span className="inline-block text-sm font-medium text-white duration-500 delay-100 animated">{image.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="flex flex-col gap-7.5">
                            {filteredImages.map((image, i) => {
                                if (i % 3 !== 2) {
                                    return;
                                }

                                const Image = dynamic(() => import(`@/assets/media/${image.fileName}`).then(module => {
                                    const Component = () => <img src={module.default.src} {...generateImageProps(image)} />;
                                    Component.displayName = `Image-${image.fileName}`;
                                    return Component;
                                }), {
                                    loading: () => <img src={`https://placehold.co/${image.width}x${image.height}`} {...generateImageProps()} />
                                });

                                return (
                                    <div key={i} className={image.categories.join(' ')}>
                                        <div
                                            className="mb-7.5 relative group cursor-pointer"
                                            onMouseEnter={addFadeInLeftAnimation}
                                            onMouseLeave={removeFadeInLeftAnimation}
                                            onClick={onImageContainerClick}
                                        >
                                            <div className="relative">
                                                <Image />
                                                <div className="absolute inset-0 bg-limegreen opacity-0 transition-opacity duration-500 group-hover:opacity-75 m-1"></div>
                                            </div>
                                            <div className="absolute left-7 top-10 z-10 opacity-0 group-hover:opacity-100">
                                                <h5 className="text-2xl font-extrabold text-white relative duration-500 animated">
                                                    {image.title}
                                                </h5>
                                                <span className="inline-block text-sm font-medium text-white duration-500 delay-100 animated">{image.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {selectedImage && (console.log(selectedImage) || (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative h-4/6 max-w-4xl">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute p-4 -top-[52px] -right-[16px] bg-transparent hover:bg-transparent border-transparent text-white text-2xl flex items-center justify-center animated fadeIn"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Gallery;
