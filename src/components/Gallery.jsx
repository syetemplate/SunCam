'use client';

import React from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import galleryBgImage from '@/assets/bg/gallery.jpg';
import content from '@/content';

export const activeProductItemButtonClassName = 'px-[18px] py-4 md:py-2 mx-0 md:mx-0.5 my-0.5 md:my-0 text-[15px] font-medium rounded-full transition duration-300 bg-limegreen text-white shadow-[0px_0px_24px_0px_rgba(42,203,53,0.48)]';
export const inactiveProductItemButtonClassName = 'px-[18px] py-4 md:py-2 mx-0 md:mx-0.5 my-0.5 md:my-0 text-[15px] font-medium rounded-full transition duration-300 bg-white text-zinc-500 hover:bg-limegreen hover:text-white border-transparent';

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

const dynamicImages = content.products.items.map(({ images }) => images).flat().map(image => ({
    imageName: image.imageName,
    component: dynamic(() => import(`@/assets/media/${image.imageName}`).then(module => {
        const Component = () => <img src={module.default.src} alt={image.alt} width={image.width} height={image.height} className="object-contain w-full p-1" />;
        Component.displayName = `Image-${image.imageName}`;
        return Component;
    }), {
        loading: () => <img width={image.width} height={image.height} className="w-full p-1" />,
    }),
}));

export const ImageViewer = ({ image, onClose = () => { } }) => {
    if (!image) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex productItems-center justify-center z-50 p-4">
            <div className="relative max-w-4xl">
                <button
                    onClick={onClose}
                    className="absolute p-4 -top-[52px] -right-[16px] bg-transparent hover:bg-transparent border-transparent text-white text-2xl flex productItems-center justify-center animated fadeIn"
                >
                    <i className="fas fa-times"/>
                </button>
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

const Gallery = ({ className }) => {
    const [selectedProductItem, setSelectedProductItem] = React.useState(content.products.items[Math.floor(content.products.items.length / 2)]);
    const [selectedImage, setSelectedImage] = React.useState(null);

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
        <section
            id="gallery"
            className={clsx('px-4 lg:px-28 pt-28 pb-24', [className])}
            style={{
                backgroundImage: `url(${galleryBgImage.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="text-center mb-12">
                <h2 className="text-blue-950 text-4xl font-bold">{content.gallery.title}</h2>
                <div className="relative h-0.5 w-44 bg-gray-300 mx-auto mt-6 mb-8 rounded-[50%]">
                    <div className="absolute -top-[3px] h-2 w-2 bg-limegreen rounded-full animated duration-4000 infinite moveLeftRight"></div>
                </div>
            </div>
            <div className="text-center mb-12">
                <div className="flex flex-col md:flex-row md:inline-flex md:flex-wrap justify-center bg-white rounded-xl shadow-[0px_0px_27px_0px_rgba(149,149,149,0.22)] py-6 px-10 md:px-20">
                    {content.products.items.map(productItem => (
                        <button
                            key={productItem.name}
                            className={selectedProductItem === productItem ? activeProductItemButtonClassName : inactiveProductItemButtonClassName}
                            onClick={() => setSelectedProductItem(productItem)}
                            dangerouslySetInnerHTML={{ __html: productItem.title }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-7.5">
                {content.products.items.map((productItems, colIndex) => (
                    <div key={productItems.name} className="md:w-1/3">
                        <div className="flex flex-col gap-7.5">
                            {selectedProductItem.images.map((image, i) => {
                                if (i % 3 !== colIndex) {
                                    return null;
                                }
                                const Image = dynamicImages.find(({ imageName }) => (imageName === image.imageName)).component;
                                return (
                                    <div key={i} className={content.products.items.map(({ name }) => name).join(' ')}>
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
                ))}
            </div>
            <ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} />
        </section>
    );
};

export default Gallery;
