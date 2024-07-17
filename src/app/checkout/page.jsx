'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useCart } from '@/state/cart';
import Cart from '@/components/Cart';
import content from '@/content';

const CheckoutPage = () => {
    const router = useRouter();
    const cart = useCart();
    const { items: cartItems } = cart;

    const [formData, setFormData] = React.useState({ name: '', phone: '', email: '' });
    const [postSubmitMessage, setPostSubmitMessage] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('/api/submit-details', formData);
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            setFormData({ name: '', phone: '', email: '' });
            setPostSubmitMessage(content.checkout.labels.outOfStock);
        } catch (error) {
            console.error('Error submitting details:', error);
            setPostSubmitMessage(content.checkout.labels.error);
        } finally {
            setIsSubmitting(false);
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
        return <div className="h-[1100px] md:h-[600px]"/>
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
            <div className="flex w-full lg:w-full flex-col lg:flex-row">
                {!postSubmitMessage && (
                    <div className="flex w-full flex-col lg:ml-0 lg:mr-4 rtl:lg:ml-12 rtl:lg:mr-0">
                        <div>
                            <p className="text-2xl font-semibold leading-7 lg:leading-9 text-gray-800">{content.checkout.title}</p>
                        </div>
                        <div className="mt-8">
                            <input
                                className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-sm placeholder-gray-600 py-4 w-full lg:w-[95%] placeholder:text-left rtl:placeholder:text-right"
                                type="text"
                                name="name"
                                placeholder={content.checkout.labels.name}
                                value={formData.name}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="mt-8">
                            <input
                                className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-sm placeholder-gray-600 py-4 w-full lg:w-[95%] placeholder:text-left rtl:placeholder:text-right"
                                type="tel"
                                name="phone"
                                placeholder={content.checkout.labels.phone}
                                value={formData.phone}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="mt-8">
                            <input
                                className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-sm placeholder-gray-600 py-4 w-full lg:w-[95%] placeholder:text-left rtl:placeholder:text-right"
                                type="email"
                                name="email"
                                placeholder={content.checkout.labels.email}
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <button
                            className="mt-8 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none disabled:py-4 disabled:px-4 transition-all duration-1000"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {!isSubmitting && content.checkout.labels.submit}
                            {isSubmitting && (
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-limegreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            )}
                        </button>
                    </div>
                )}

                {postSubmitMessage && (
                    <div className="mt-4 text-center text-md text-gray-700">
                        <strong>{postSubmitMessage}</strong>
                    </div>
                )}

                {!postSubmitMessage && <Cart className="mt-14 lg:mt-0 ml-12 rtl:lg:ml-0 lg:mr-0 rtl:lg:mr-4" />}
            </div>
        </section>
    );
};

export default CheckoutPage;
