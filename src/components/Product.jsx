'use client';

import React from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { throttle } from 'lodash';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import { ImageViewer } from '@/components/Gallery';
import Cart from '@/components/Cart';
import content from '@/content';
import { useCart } from '@/state/cart';

const smallImageWidth = 140;

const dynamicSmallImages = content.products.items.flatMap(productItem =>
    productItem.images.map(image => ({
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

const dynamicLargeImages = content.products.items.flatMap(productItem =>
    productItem.images.map(image => ({
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

const reviewerAvatarImages = content.products.items.flatMap(productItem =>
    productItem.reviews.list.map(({ avatarImageName: imageName }) => ({
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

const Product = ({ className, productItem }) => {
    const sliderContainerRef = React.useRef(null);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [slidesToShow, setSlidesToShow] = React.useState(1);
    const [quantity, setQuantity] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState('description');
    const [slideIndex, setSlideIndex] = React.useState(0);
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const cart = useCart();
    const { items: cartItems } = cart;

    const productItemLargeImages = dynamicLargeImages.filter(image => productItem.images.some(productItemImage => productItemImage.imageName === image.imageName));
    const productItemSmallImages = dynamicSmallImages.filter(image => productItem.images.some(productItemImage => productItemImage.imageName === image.imageName));
    const currentSlideImage = productItemLargeImages[slideIndex];
    const averageRating = Math.round(productItem.reviews.list.reduce((sum, review) => sum + review.rating, 0) / productItem.reviews.list.length);

    const smallImagesSettings = {
        arrows: true,
        dots: false,
        infinite: (productItemSmallImages.length > slidesToShow),
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        centerMode: false,
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const closeCartIfEmpty = React.useCallback(() => {
        if (!isCartOpen) {
            return;
        }
        if (cartItems.length > 0) {
            return;
        }
        closeCart();
    }, [cartItems]);

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

    const addToCart = () => {
        const newCartItems = [...cart.items];
        const cartItem = newCartItems.find(item => item.name === productItem.name);

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            newCartItems.push({ ...productItem, quantity });
        }

        setQuantity(1);
        cart.updateItems(newCartItems);
        openCart();
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

    React.useEffect(closeCartIfEmpty, [cartItems]);
    React.useLayoutEffect(initNumOfSlides, []);

    return (
        <section
            id="product"
            className={clsx('px-4 lg:px-28 pt-4 pb-16', [className])}
        >
            <>
                {isCartOpen && (
                    <div name="overlay" className="fixed inset-0 bg-black bg-opacity-50 z-50">
                        <div className="w-full lg:w-2/5 h-full flex flex-col animated fadeInRight fixed bottom-0 right-0 z-50 bg-white shadow-[0px_10px_15px_rgba(25,25,25,0.075)] rounded-none p-0 border-b-0 px-4 py-8">
                            <div className="flex flex-col items-center border-b border-gray-200 pb-8">
                                <i className="fas fa-times text-3xl absolute left-[24px] top-[24px] hover:text-limegreen cursor-pointer" onClick={closeCart} />
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                                    {content.cart.title}
                                </h2>
                            </div>
                            <Cart hideTitle />
                            <a href="/checkout">
                                <button
                                    className="mt-8 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 rounded-md"
                                >
                                    {content.checkout.title}
                                </button>
                            </a>
                        </div>
                    </div>
                )}
                <div className="block lg:flex lg:flex-wrap">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
                        <div className="product-wrap">
                            <div className="product-active" onClick={onActiveProductImageClick}>
                                {currentSlideImage && <currentSlideImage.component />}
                            </div>
                            <div className="product-nav-active" ref={sliderContainerRef}>
                                <Slider {...smallImagesSettings}>
                                    {productItemSmallImages.map((image, index) => (
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
                            <h3>{productItem.name}</h3>
                            <h6>{content.products.currency}{productItem.price.toFixed(2)}</h6>
                            <div className="product-rating mb-35">
                                <ul>
                                    {[...Array(5)].map((_, index) => (
                                        <li key={index}>
                                            <i className={`fas fa-star${index < averageRating ? ' text-limegreen' : ''}`} />
                                        </li>
                                    ))}
                                </ul>
                                <span>({productItem.reviews.list.length} {productItem.customerReviewsLabel})</span>
                            </div>
                            <p>{productItem.text}</p>
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
                                <button onClick={addToCart}>{content.products.addToCartLabel}</button>
                            </div>
                            <div className="product-info mb-50">
                                <h5>{productItem.productInfo.title}</h5>
                                <ul>
                                    {productItem.productInfo.list.map((productItem, index) => (
                                        <li key={index}><span>{productItem.title}:</span> {productItem.description}</li>
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
                                            {productItem.description.title}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`inline-block py-2 px-4 no-underline${activeTab === 'additionalInfo' ? ' text-limegreen' : ''} hover:text-limegreen cursor-pointer`}
                                            onClick={() => setActiveTab('additionalInfo')}
                                        >
                                            {productItem.additionalInfo.title}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`inline-block py-2 px-4 no-underline${activeTab === 'reviews' ? ' text-limegreen' : ''} hover:text-limegreen cursor-pointer`}
                                            onClick={() => setActiveTab('reviews')}
                                        >
                                            {productItem.reviews.title} ({productItem.reviews.list.length})
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    {activeTab === 'description' && (
                                        <div className="tab-pane opacity-100 block active">
                                            <p className="desc-content">{productItem.description.text}</p>
                                        </div>
                                    )}
                                    {activeTab === 'additionalInfo' && (
                                        <div className="tab-pane opacity-100 block active">
                                            <p className="desc-content">{productItem.additionalInfo.text}</p>
                                        </div>
                                    )}
                                    {activeTab === 'reviews' && (
                                        <div className="tab-pane opacity-100 block active">
                                            <div className="product-review-wrap">
                                                {productItem.reviews.list.map((review, index) => {
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
            </>
            <ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} />
        </section>
    );
};

export default Product;