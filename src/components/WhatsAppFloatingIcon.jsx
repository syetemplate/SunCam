'use client';

import React from 'react';
import content from '@/content';

const WhatsAppFloatingIcon = () => {

    const onClick = () => {
        if (typeof window !== 'undefined') {
            window.open(`https://wa.me/${content.whatsApp.phoneNumber}?text=${content.whatsApp.text}`, '_blank');
        }
    };

    return (
        <a
            className="fixed z-50 flex items-center justify-center cursor-pointer size-14 hover:size-16 bottom-6 right-6 bg-limegreen text-white rounded-full shadow-xl"
            onClick={onClick}
        >
            <i className="fab fa-whatsapp text-3xl"/>
        </a>
    );
};

export default WhatsAppFloatingIcon;
