'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const ImageViewer = ({ image, onClose = () => { } }) => {
    const [isHoveringOutside, setIsHoveringOutside] = React.useState(true);

    const onImageViewerClick = e => {
        const isOutsideClick = (e.target === e.currentTarget);
        if (!isOutsideClick) {
            return;
        }
        onClose();
    };

    const DynamicImage = React.useMemo(() => (
        dynamic(() => import(`@/assets/media/${image.imageName}`).then(
            module => {
                const Component = props => (
                    <Zoom>
                        <Image
                            {...props}
                            src={module.default}
                            alt={image.title}
                            size="100vw"
                            className="object-contain p-1"
                        />
                    </Zoom>
                );
                Component.displayName = `Image-${image.imageName}`;
                return Component;
            },
        ))),
        [image]
    );

    if (!image) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={onImageViewerClick}
        >
            <div className="relative max-w-4xl">
                <button
                    onClick={onClose}
                    className="absolute p-4 -top-[52px] -right-[16px] bg-transparent hover:bg-transparent border-transparent text-white text-2xl flex items-center justify-center animated2 fadeIn"
                >
                    <i className={`fas fa-times ${isHoveringOutside ? 'text-limegreen' : 'text-white'}`} />
                </button>
                <DynamicImage
                    onMouseEnter={() => setIsHoveringOutside(false)}
                    onMouseLeave={() => setIsHoveringOutside(true)}
                />
            </div>
        </div>
    );
};

export default ImageViewer;
