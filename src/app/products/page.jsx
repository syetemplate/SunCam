'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import content from '@/content';

const images = content.products.items.flatMap(productItem =>
    productItem.images.map(image => ({
        imageName: image.imageName,
        component: dynamic(() => import(`@/assets/media/${image.imageName}`).then(module => {
            const Component = () => <img src={module.default.src} alt={image.title} className={`object-cover w-[425px] h-[265px] p-1`} />;
            Component.displayName = `Image-${image.imageName}`;
            return Component;
        }), {
            loading: () => <img className={`object-cover w-[425px] h-[265px] p-1`} />,
        }),
    }))
);

const ProductsPage = () => {
    return (
        <>
            <section id="products" className="text-gray-600 body-font">
                <div className="px-4 lg:px-28 pt-16 pb-[320px] md:pb-48 lg:pb-36">
                    <div className="flex flex-wrap -m-4">
                        {content.products.items.map((productItem, index) => (
                            <div key={index} className="xl:w-1/4 md:w-1/2 p-4 w-full flex flex-col md:block items-center md:items-left text-center md:text-left rtl:md:text-right">
                                <a className="block relative rounded overflow-hidden" href={productItem.href}>
                                    {images.find(img => img.imageName === productItem.images[0].imageName)?.component()}
                                </a>
                                <div className="mt-4 ml-2 rtl:mr-2 rtl:ml-0">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{productItem.description.title}</h3>
                                    <a href={productItem.href}><h2 className="text-gray-900 title-font text-lg font-medium">{productItem.name}</h2></a>
                                    <p className="mt-1">{content.products.currency}{productItem.price.toFixed(2)}</p>
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
