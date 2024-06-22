'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/state/cart';
import Cart from '@/components/Cart';
import content from '@/content';

const CheckoutPage = () => {
    const router = useRouter();
    const cart = useCart();
    const { items: cartItems } = cart;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [message, setMessage] = useState(''); // ******************************

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/submit-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                // ******************************
                setFormData({
                    name: '',
                    phone: '',
                    email: ''
                });
                setMessage('Your information has been received. You will get a notification soon.'); // ******************************
            } else {
                // Handle error
                setMessage('There was an error submitting your details. Please try again.'); // ******************************
            }
        } catch (error) {
            console.error('Error submitting details:', error);
            setMessage('There was an error submitting your details. Please try again.'); // ******************************
        }
    };

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
                            type="text"
                            name="name"
                            placeholder={content.checkout.labels.name}
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-8">
                        <input
                            className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-sm placeholder-gray-600 py-4 w-full"
                            type="tel"
                            name="phone"
                            placeholder={content.checkout.labels.phone}
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-8">
                        <input
                            className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-sm placeholder-gray-600 py-4 w-full"
                            type="email"
                            name="email"
                            placeholder={content.checkout.labels.email}
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        className="mt-8 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800"
                        onClick={handleSubmit}
                    >
                        {content.checkout.labels.submit}
                    </button>
                    {message && (
                        <div className="mt-4 text-center text-sm text-green-600">
                            {message}
                        </div>
                    )}
                </div>

                <Cart />
            </div>
        </section>
    );
};

export default CheckoutPage;
