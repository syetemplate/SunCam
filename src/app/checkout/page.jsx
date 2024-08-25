import React from 'react';
import Checkout from '@/components/Checkout';
import content from '@/content';

export const metadata = {
    title: content.meta.pages.checkout.title,
    description: content.meta.pages.checkout.description,
    canonical: 'https://suncam.co.il/checkout',
    openGraph: {
        siteName: content.meta.pages.checkout.title,
        title: content.meta.pages.checkout.title,
        description: content.meta.pages.checkout.description,
        url: 'https://suncam.co.il/checkout',
    },
    twitter: {
        card: 'summary_large_image',
        title: content.meta.pages.checkout.title,
        description: content.meta.pages.checkout.description,
    },
};

const CheckoutPage = () => {
    return (
        <Checkout />
    );
};

export default CheckoutPage;
