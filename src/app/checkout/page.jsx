'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/state/cart';
import Cart from '@/components/Cart';
import content from '@/content';

const CheckoutPage = () => {
    const router = useRouter();
    const cart = useCart();
    const { items: cartItems } = cart;

    const updateSearchParams = React.useCallback(() => {
        if (cartItems.length === 0) {
            router.replace('/checkout');
            return;
        }
        router.replace(`/checkout?${cart.toSearchParams()}`);
    }, [cartItems]);

    React.useEffect(updateSearchParams, [cartItems]);

    if (!cart.isInitialised) {
        return null;
    }

    if (cartItems.length === 0) {
        return (
            <section id="checkout" className="flex justify-center px-8 lg:px-28 xl:px-40 pt-16 pb-[320px] lg:pb-[160px]">
                <div className="flex flex-col items-center pt-8 pb-16">
                    <h2 className="text-2xl font-semibold leading-6 text-gray-800 m-0">{content.checkout.emptyCart.title}</h2>
                    <p className="text-base text-gray-600 m-0 py-4">{content.checkout.emptyCart.description}</p>
                    <a href={content.checkout.emptyCart.cta.href} className="text-blue-500 underline m-0">
                        {content.checkout.emptyCart.cta.text}
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section id="checkout" className="flex justify-center px-8 lg:px-28 xl:px-40 pt-16 pb-[320px] lg:pb-[160px]">
            <div className="flex w-full lg:w-full flex-col lg:flex-row lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                <div className="flex w-full flex-col">
                    <div>
                        <p className="text-2xl font-semibold leading-7 lg:leading-9 text-gray-800">{content.checkout.title}</p>
                    </div>
                    <div className="mt-8">
                        <input
                            className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-sm placeholder-gray-600 py-4 w-full"
                            type="email"
                            placeholder={content.checkout.labels.email}
                        />
                    </div>
                    <button
                        className="mt-8 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800"
                    >
                        {content.checkout.labels.submit}
                    </button>
                </div>

                <Cart />
            </div>
        </section>
    );
};

export default CheckoutPage;
