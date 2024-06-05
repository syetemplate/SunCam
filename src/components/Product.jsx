'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageViewer, activeCategoryButtonClassName, inactiveCategoryButtonClassName } from '@/components/Gallery';
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

const Product = () => {
    const sliderContainerRef = React.useRef(null);
    const [selectedCategory, setSelectedCategory] = React.useState(content.products.categories[1]);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [slidesToShow, setSlidesToShow] = React.useState(1);
    const [quantity, setQuantity] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState('description');
    const [slideIndex, setSlideIndex] = React.useState(0);

    const categoryLargeImages = dynamicLargeImages.filter(image => selectedCategory.images.some(categoryImage => categoryImage.imageName === image.imageName));
    const categorySmallImages = dynamicSmallImages.filter(image => selectedCategory.images.some(categoryImage => categoryImage.imageName === image.imageName));
    const currentSlideImage = categoryLargeImages[slideIndex];
    const averageRating = Math.round(selectedCategory.reviews.list.reduce((sum, review) => sum + review.rating, 0) / selectedCategory.reviews.list.length);

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

    const updateSlidesToShow = React.useCallback(() => {
        if (!sliderContainerRef.current) {
            return 1;
        }
        const availableWidth = sliderContainerRef.current.clientWidth;
        const maxSlides = Math.floor(availableWidth / smallImageWidth);
        setSlidesToShow(Math.min(maxSlides, categorySmallImages.length));
    }, []);

    React.useLayoutEffect(updateSlidesToShow, [updateSlidesToShow]);

    const smallImagesSettings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        centerMode: false,
    };

    return (
        <section id="product" className="perched-area px-4 2xl:px-28 pt-4 pb-4">
            <div className="container mx-auto">
                {/* <div className="flex flex-wrap justify-center">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 md:w-4/5 pr-4 pl-4">
                        <div className="section-title text-center mb-55">
                            <h2>{content.products.title}</h2>
                            <div className="bar" />
                            <p>{content.products.description}</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="text-center mb-12">
                    <div className="flex flex-col md:flex-row md:inline-flex md:flex-wrap justify-center bg-white rounded-xl shadow-[0px_0px_27px_0px_rgba(149,149,149,0.22)] py-6 px-10 md:px-20">
                        {content.products.categories.map(category => {
                            const [categoryNamePart1, ...categoryNameRest] = category.name.split(' ');
                            return (
                                <button
                                    key={category.name}
                                    className={selectedCategory === category ? activeCategoryButtonClassName : inactiveCategoryButtonClassName}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {categoryNamePart1}{categoryNameRest?.length && <strong>{` ${categoryNameRest.join(' ')}`}</strong>}
                                </button>
                            );
                        })}
                    </div>
                </div> */}

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
                            <h3>{selectedCategory.name}</h3>
                            <h6>{selectedCategory.price}</h6>
                            <div className="product-rating mb-35">
                                <ul>
                                    {[...Array(5)].map((_, index) => (
                                        <li key={index}>
                                            <i className={`fas fa-star${index < averageRating ? ' text-limegreen' : ''}`} />
                                        </li>
                                    ))}
                                </ul>
                                <span>({selectedCategory.reviews.list.length} {selectedCategory.customerReviewsLabel})</span>
                            </div>
                            <p>{selectedCategory.text}</p>
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
                                <h5>{selectedCategory.productInfo.title}</h5>
                                <ul>
                                    {selectedCategory.productInfo.list.map((item, index) => (
                                        <li key={index}><span>{item.title}:</span> {item.description}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="product-desc-wrap">
                                <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 mb-25" id="myTab" role="tablist">
                                    <li>
                                        <a
                                            className={`inline-block py-2 px-4 no-underline${activeTab === 'description' ? ' text-limegreen' : ''} hover:text-limegreen`}
                                            onClick={() => setActiveTab('description')}
                                        >
                                            {selectedCategory.description.title}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`inline-block py-2 px-4 no-underline${activeTab === 'additionalInfo' ? ' text-limegreen' : ''} hover:text-limegreen`}
                                            onClick={() => setActiveTab('additionalInfo')}
                                        >
                                            {selectedCategory.additionalInfo.title}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`inline-block py-2 px-4 no-underline${activeTab === 'reviews' ? ' text-limegreen' : ''} hover:text-limegreen`}
                                            onClick={() => setActiveTab('reviews')}
                                        >
                                            {selectedCategory.reviews.title} ({selectedCategory.reviews.list.length})
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    {activeTab === 'description' && (
                                        <div className="tab-pane opacity-100 block active">
                                            <p className="desc-content">{selectedCategory.description.text}</p>
                                        </div>
                                    )}
                                    {activeTab === 'additionalInfo' && (
                                        <div className="tab-pane opacity-100 block active">
                                            <p className="desc-content">{selectedCategory.additionalInfo.text}</p>
                                        </div>
                                    )}
                                    {activeTab === 'reviews' && (
                                        <div className="tab-pane opacity-100 block active">
                                            <div className="product-review-wrap">
                                                {selectedCategory.reviews.list.map((review, index) => (
                                                    <div key={index} className="single-review">
                                                        <div className="review-avatar">
                                                            <img src={`img/images/${review.avatarImageName}`} alt="img" />
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
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
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