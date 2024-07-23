'use client';

import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ImageViewer from '@/components/ImageViewer';
import galleryBgImage from '@/assets/bg/gallery.jpg';
import content from '@/content';

export const activeProductItemButtonClassName = 'px-[18px] py-4 md:py-2 mx-0 md:mx-0.5 my-0.5 md:my-0 text-[15px] font-medium rounded-full transition duration-300 bg-primary text-white shadow-md shadow-primary/50';
export const inactiveProductItemButtonClassName = 'px-[18px] py-4 md:py-2 mx-0 md:mx-0.5 my-0.5 md:my-0 text-[15px] font-medium rounded-full transition duration-300 bg-white text-zinc-500 hover:bg-primary hover:text-white border-transparent';

const getThumbnailDimensions = index => {
    const mod = (index % 6);
    if (mod === 0) {
        return { width: 450, height: 500 };
    }
    if (mod === 1) {
        return { width: 450, height: 600 };
    }
    if (mod === 2) {
        return { width: 450, height: 400 };
    }
    if (mod === 3) {
        return { width: 400, height: 460 };
    }
    if (mod === 4) {
        return { width: 450, height: 420 };
    }
    return { width: 400, height: 550 };
};

const addFadeInLeftAnimation = e => {
    e.currentTarget.querySelectorAll('[class*="animated2"]').forEach(el => {
        el.classList.remove('fadeOut');
        el.classList.add('fadeInLeft');
    });
};

const removeFadeInLeftAnimation = e => {
    e.currentTarget.querySelectorAll('[class*="animated2"]').forEach(el => {
        el.classList.remove('fadeInLeft');
        el.classList.add('fadeOut');
    });
};

const dynamicThumbnailImages = content.products.items
    .map(({ images }) => images)
    .flat()
    .map((image, i) => {
        return {
            ...image,
            component: dynamic(() => import(`@/assets/media/${image.imageName}`).then(module => {
                const { width, height } = getThumbnailDimensions(i);
                const Component = ({ fill, ...props }) => (
                    <Image
                        {...props}
                        src={module.default}
                        alt={image.description}
                        width={width}
                        height={height}
                        sizes="(min-width: 768px) 20vw, 90vw"
                        style={{ objectFit: 'contain', padding: '24px' }}
                    />
                );
                Component.displayName = `DynamicThumbnail-${image.imageName}`;
                return Component;
            }), {
                loading: () => <div style={{ width: '100%', height: '100%', background: '#f0f0f0' }} className="bg-gray-200 animate-pulse" />,
            }),
        };
    });

const Gallery = ({ className }) => {
    const [selectedProductItem, setSelectedProductItem] = React.useState(content.products.items[0]);
    const [selectedImage, setSelectedImage] = React.useState(null);

    return (
        <section
            id="gallery"
            className={clsx('px-4 sm:px-8 lg:px-28 pt-28 pb-24', [className])}
            style={{
                backgroundImage: `url(${galleryBgImage.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="text-center mb-12">
                <h2 className="text-blue-950 text-4xl font-bold">{content.gallery.title}</h2>
                <div className="relative h-0.5 w-44 bg-gray-300 mx-auto mt-6 mb-8 rounded-[50%]">
                    <div className="absolute -top-[3px] h-2 w-2 bg-primary rounded-full animated duration-4000 infinite moveLeftRight"/>
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
                        <div className="flex flex-col gap-7.5 items-center">
                            {selectedProductItem.images.map((image, i) => {
                                if (i % 3 !== colIndex) {
                                    return null;
                                }
                                const { width } = getThumbnailDimensions(i);
                                const DynamicThumbnail = dynamicThumbnailImages.find(
                                    img => img.imageName === image.imageName
                                ).component;
                                return (
                                    <div key={i} className="relative" style={{ aspectRatio: 1, maxWidth: `${width}px`, width: '100%' }}>
                                        <div
                                            className="relative group cursor-pointer w-full h-full"
                                            onMouseEnter={addFadeInLeftAnimation}
                                            onMouseLeave={removeFadeInLeftAnimation}
                                            onClick={() => setSelectedImage(image)}
                                        >
                                            <DynamicThumbnail />
                                            <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-75 m-1"></div>
                                            <div className="absolute left-7 right-7 top-10 z-10 opacity-0 group-hover:opacity-100">
                                                <h1 className="text-2xl font-extrabold text-white relative duration-500 animated2 rtl:text-right">
                                                    {selectedProductItem.name}
                                                </h1>
                                                <span className="inline-block text-sm font-medium text-white duration-500 delay-100 animated2 rtl:text-right">{image.description}</span>
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
