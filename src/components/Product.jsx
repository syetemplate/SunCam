'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { throttle } from 'lodash';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import { ImageViewer } from '@/components/Gallery';
import content from '@/content';

const smallImageWidth = 140;

const dynamicSmallImages = content.products.categories.flatMap(category =>
    category.images.map(image => ({
        imageName: image.imageName,
        component: dynamic(() => import(`@/assets/media/${image.imageName}`).then(module => {
            const Component = () => <img src={module.default.src} alt={image.title} width={smallImageWidth} height={smallImageWidth + 10} className={`object-cover w-[${smallImageWidth}px] h-[${smallImageWidth + 10}px] p-1`} />;
            Component.displayName = `Image-${image.imageName}`;
            return Component;
        }), {
            loading: () => <img width={smallImageWidth} height={smallImageWidth + 10} className={`object-cover w-[${smallImageWidth}px] h-[${smallImageWidth + 10}px] p-1`} />,
        }),
    }))
);

const dynamicLargeImages = content.products.categories.flatMap(category =>
    category.images.map(image => ({
        imageName: image.imageName,
        component: dynamic(() => import(`@/assets/media/${image.imageName}`).then(module => {
            const Component = () => <img src={module.default.src} alt={image.title} width={400} height={400} className="object-cover w-full aspect-[9/8] p-1" />;
            Component.displayName = `Image-${image.imageName}`;
            return Component;
        }), {
            loading: () => <img width={400} height={400} className="object-cover w-full aspect-[9/8] p-1" />,
        }),
    }))
);

const reviewerAvatarImages = content.products.categories.flatMap(category =>
    category.reviews.list.map(({ avatarImageName: imageName }) => ({
        imageName,
        component: dynamic(() => import(`@/assets/media/${imageName}`).then(module => {
            const Component = () => <img src={module.default.src} alt="review" width={130} height={130} className={'object-cover min-w-[130px] min-h-[130px] p-1'} />;
            Component.displayName = `Image-${imageName}`;
            return Component;
        }), {
            loading: () => <img width={130} height={130} className={'object-cover min-w-[130px] min-h-[130px] p-1'} />,
        }),
    }))
);

const Product = ({ product }) => {
    const sliderContainerRef = React.useRef(null);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [slidesToShow, setSlidesToShow] = React.useState(1);
    const [quantity, setQuantity] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState('description');
    const [slideIndex, setSlideIndex] = React.useState(0);

    const categoryLargeImages = dynamicLargeImages.filter(image => product.images.some(categoryImage => categoryImage.imageName === image.imageName));
    const categorySmallImages = dynamicSmallImages.filter(image => product.images.some(categoryImage => categoryImage.imageName === image.imageName));
    const currentSlideImage = categoryLargeImages[slideIndex];
    const averageRating = Math.round(product.reviews.list.reduce((sum, review) => sum + review.rating, 0) / product.reviews.list.length);

    const onActiveProductImageClick = e => {
        const image = e.currentTarget.querySelector('img');
        setSelectedImage({
            src: image.src,
            alt: image.alt,
            width: image.width,
            height: image.height,
            className: image.class,
        });
    };

    const onSlideClick = (index, clientX) => {
        const prevIndex = slideIndex;
        setSlideIndex(index);

        if (index === prevIndex) {
            return;
        }

        const [backArrow, nextArrow] = [...sliderContainerRef.current.querySelectorAll('button')];
        const { left: sliderLeft, right: sliderRight } = sliderContainerRef.current.getBoundingClientRect();
        const sliderCenter = (sliderLeft + sliderRight) / 2;
        const clickXDeltaFromCenter = clientX - sliderCenter;

        if (clickXDeltaFromCenter >= 0) {
            nextArrow.click();
            return;
        }
        backArrow.click();
    };

    const onQuantityChange = action => {
        if (action === 'increment') {
            setQuantity(prevQuantity => prevQuantity + 1);
            return;
        }
        if (action === 'decrement' && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const updateSlidesToShow = () => {
        if (!sliderContainerRef.current) {
            return 1;
        }
        const availableWidth = sliderContainerRef.current.clientWidth;
        setSlidesToShow(Math.floor(availableWidth / smallImageWidth));
    };

    const initNumOfSlides = () => {
        const throttledUpdateSlidesToShow = throttle(updateSlidesToShow, 100);
        window.addEventListener('resize', throttledUpdateSlidesToShow);
        updateSlidesToShow();

        return () => {
            window.removeEventListener('resize', throttledUpdateSlidesToShow);
        };
    };

    React.useLayoutEffect(initNumOfSlides, []);

    const smallImagesSettings = {
        arrows: true,
        dots: false,
        infinite: (categorySmallImages.length > slidesToShow),
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        centerMode: false,
    };

    return (
        <section id="product" className="px-4 lg:px-28 pt-4 pb-16">
            <div className="block lg:flex lg:flex-wrap">
                <div className="xl:w-3/5 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
                    <div className="product-wrap">
                        <div className="product-active" onClick={onActiveProductImageClick}>
                            {currentSlideImage && <currentSlideImage.component />}
                        </div>
                        <div className="product-nav-active" ref={sliderContainerRef}>
                            <Slider {...smallImagesSettings}>
                                {categorySmallImages.map((image, index) => (
                                    <div
                                        key={image.imageName}
                                        onClick={e => onSlideClick(index, e.clientX)}
                                    >
                                        <image.component />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="xl:w-2/5 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
                    <div className="product-details-content">
                        <h3>{product.name}</h3>
                        <h6>{product.price}</h6>
                        <div className="product-rating mb-35">
                            <ul>
                                {[...Array(5)].map((_, index) => (
                                    <li key={index}>
                                        <i className={`fas fa-star${index < averageRating ? ' text-limegreen' : ''}`} />
                                    </li>
                                ))}
                            </ul>
                            <span>({product.reviews.list.length} {product.customerReviewsLabel})</span>
                        </div>
                        <p>{product.text}</p>
                        <div className="perched-info">
                            <div className="cart-plus">
                                <form action="#">
                                    <div className="cart-plus-minus">
                                        <input type="text" value={quantity} readOnly />
                                        <div className="dec qtybutton" onClick={() => onQuantityChange('decrement')}>-</div>
                                        <div className="inc qtybutton" onClick={() => onQuantityChange('increment')}>+</div>
                                    </div>
                                </form>
                            </div>
                            <button>{content.products.ctaLabel}</button>
                        </div>
                        <div className="product-info mb-50">
                            <h5>{product.productInfo.title}</h5>
                            <ul>
                                {product.productInfo.list.map((item, index) => (
                                    <li key={index}><span>{item.title}:</span> {item.description}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="product-desc-wrap">
                            <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 mb-25" id="myTab" role="tablist">
                                <li>
                                    <a
                                        className={`inline-block py-2 px-4 no-underline${activeTab === 'description' ? ' text-limegreen' : ''} hover:text-limegreen cursor-pointer`}
                                        onClick={() => setActiveTab('description')}
                                    >
                                        {product.description.title}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`inline-block py-2 px-4 no-underline${activeTab === 'additionalInfo' ? ' text-limegreen' : ''} hover:text-limegreen cursor-pointer`}
                                        onClick={() => setActiveTab('additionalInfo')}
                                    >
                                        {product.additionalInfo.title}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`inline-block py-2 px-4 no-underline${activeTab === 'reviews' ? ' text-limegreen' : ''} hover:text-limegreen cursor-pointer`}
                                        onClick={() => setActiveTab('reviews')}
                                    >
                                        {product.reviews.title} ({product.reviews.list.length})
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                {activeTab === 'description' && (
                                    <div className="tab-pane opacity-100 block active">
                                        <p className="desc-content">{product.description.text}</p>
                                    </div>
                                )}
                                {activeTab === 'additionalInfo' && (
                                    <div className="tab-pane opacity-100 block active">
                                        <p className="desc-content">{product.additionalInfo.text}</p>
                                    </div>
                                )}
                                {activeTab === 'reviews' && (
                                    <div className="tab-pane opacity-100 block active">
                                        <div className="product-review-wrap">
                                            {product.reviews.list.map((review, index) => {
                                                const ReviewerAvatarImage = reviewerAvatarImages.find(({ imageName }) => imageName === review.avatarImageName).component;
                                                return (
                                                    <div key={index} className="single-review">
                                                        <div className="review-avatar">
                                                            <ReviewerAvatarImage />
                                                        </div>
                                                        <div className="review-content">
                                                            <div className="review-rating">
                                                                <ul>
                                                                    {[...Array(5)].map((_, index) => (
                                                                        <li key={index}>
                                                                            <i className={`fas fa-star${index < review.rating ? ' text-limegreen' : ''}`} />
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="review-meta">
                                                                <h6>{review.name} - <span>{review.date}</span></h6>
                                                            </div>
                                                            <p>{review.text}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} />
        </section>
    );
};

export default Product;