'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import clsx from 'clsx';
import { isNaN } from 'lodash';
import content from '@/content';
import { useCart } from '@/state/cart';

const images = content.products.items.flatMap(item =>
    item.images.map(image => ({
        imageName: image.imageName,
        component: dynamic(() => import(`@/assets/media/${image.imageName}`).then(module => {
            const Component = ({ fill, ...props }) => (
                <Image
                    {...props}
                    src={module.default}
                    alt={image.description}
                    width={80}
                    height={80}
                    sizes="15vw"
                    className="w-[80px] h-[80px] object-contain rounded"
                />
            );
            Component.displayName = `Image-${image.imageName}`;
            return Component;
        }), {
            loading: () => <div className="w-[80px] h-[80px] object-contain rounded bg-gray-200 animate-pulse" />,
        }),
    }))
);

const Cart = ({ className, hideTitle = false }) => {
    const cart = useCart();

    const [cartItems, setCartItems] = React.useState(() => {
        if (cart.items.length > 0) {
            return cart.items;
        }
        return cart.fromSearchParams();
    });

    const updateQuantity = (itemName, newQuantity) => {
        if (isNaN(newQuantity)) {
            return;
        }

        if (newQuantity < 1) {
            return;
        }

        const newCartItems = cartItems.map(item => {
            if (item.name === itemName) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(item => item.quantity > 0);

        cart.updateItems(newCartItems);
        setCartItems(newCartItems);
        return newCartItems;
    };

    const removeItem = itemName => {
        const newCartItems = cartItems.filter(item => item.name !== itemName);
        cart.updateItems(newCartItems);
        setCartItems(newCartItems);
        return newCartItems;
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const estimatedTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0) + content.cart.shippingPrice;

    if (cartItems.length === 0) {
        return null;
    }

    return (
        <div className={clsx('flex flex-col w-full', [className])}>
            <div className="flex flex-col bg-white overflow-auto overflow-auto max-h-[50vh]">
                {!hideTitle && (
                    <h2 className="text-lg font-semibold leading-6 text-gray-800 rtl:text-right">
                        {content.cart.title}
                    </h2>
                )}
                <div className="mt-7 space-y-6">
                    {cartItems.map(item => (
                        <div key={item.name} className="flex justify-between items-center">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse rtl:space-x-4">
                                {images.find(img => img.imageName === item.images[0].imageName)?.component()}
                                <div className="rtl:text-right">
                                    <p className="text-sm font-semibold text-gray-800 mb-0">{item.name}</p>
                                    <p className="text-xs text-gray-600">{content.products.currency}{item.price.toFixed(2)}</p>
                                    <div className="mt-2 flex items-center space-x-2 rtl:space-x-reverse rtl:space-x-2">
                                        <input
                                            type="number"
                                            min="1"
                                            defaultValue={item.quantity}
                                            onChange={e => updateQuantity(item.name, parseInt(e.target.value, 10))}
                                            onBlur={e => {
                                                if (e.target.value === `${item.quantity}`) {
                                                    return;
                                                }
                                                e.target.value = item.quantity;
                                            }}
                                            className="w-16 px-2 py-1 text-gray-700 bg-gray-100 rounded rtl:text-right"
                                        />
                                        <div
                                            className="text-gray-500 cursor-pointer"
                                            onClick={() => removeItem(item.name)}
                                        >
                                            X
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-gray-800 rtl:text-left">
                                {content.products.currency}{(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col bg-gray-50 p-2 xl:p-10 mt-8">
                <div className="flex flex-col items-end w-full space-y-6 rtl:items-start">
                    <div className="flex justify-between w-full items-center">
                        <p className="text-sm leading-4 text-gray-600">{content.cart.labels.totalItems}</p>
                        <p className="text-sm font-semibold leading-4 text-gray-600">{totalItems}</p>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-sm leading-4 text-gray-600">{content.cart.labels.shippingCharges}</p>
                        <p className="text-sm font-semibold leading-4 text-gray-600">{content.products.currency}{content.cart.shippingPrice.toFixed(2)}</p>
                    </div>
                </div>
                <div className="flex justify-between w-full items-center mt-10">
                    <p className="text-md font-semibold leading-4 text-gray-800">{content.cart.labels.estimatedTotal}</p>
                    <p className="text-sm font-semibold leading-4 text-gray-800">{content.products.currency}{estimatedTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
