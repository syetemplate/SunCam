'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import content from '@/content';

const images = content.products.categories.flatMap(category =>
    category.images.map(image => ({
        imageName: image.imageName,
        component: dynamic(() => import(`@/assets/media/${image.imageName}`).then(module => {
            const Component = () => <img src={module.default.src} alt={image.title} width={425} height={265} className={`object-cover w-[425px] h-[265px] p-1`} />;
            Component.displayName = `Image-${image.imageName}`;
            return Component;
        }), {
            loading: () => <img width={425} height={265} className={`object-cover w-[425px] h-[265px] p-1`} />,
        }),
    }))
);

const ProductsPage = () => {
    return (
        <>
            <section id="products" className="text-gray-600 body-font">
                <div className="container px-4 2xl:px-28 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {content.products.categories.map((category, index) => (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col md:block items-center md:items-left text-center md:text-left">
                                <a className="block relative rounded overflow-hidden" href={category.href}>
                                    {images.find(img => img.imageName === category.images[0].imageName)?.component()}
                                </a>
                                <div className="mt-4 ml-2">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category.description.title}</h3>
                                    <a href={category.href}><h2 className="text-gray-900 title-font text-lg font-medium">{category.name}</h2></a>
                                    <p className="mt-1">{category.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;