import React from 'react';
import Checkout from '@/components/Checkout';
import content from '@/content';

export const metadata = {
    title: content.meta.pages.checkout.title,
    description: content.meta.pages.checkout.description,
    canonical: 'https://minidrone.co.il/checkout',
    'og:title': content.meta.pages.checkout.title,
    'og:description': content.meta.pages.checkout.description,
    'og:url': 'https://minidrone.co.il/checkout',
    'twitter:card': 'summary_large_image',
    'twitter:title': content.meta.pages.checkout.title,
    'twitter:description': content.meta.pages.checkout.description,
};

const CheckoutPage = () => {
    return (
        <Checkout />
    );
};

export default CheckoutPage;
