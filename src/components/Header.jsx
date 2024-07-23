'use client';

import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { throttle } from 'lodash';
import logoDark from '@/assets/media/logo-dark.webp';
import content from '@/content';
import { useCart } from '@/state/cart';

const stickyHeaderClassName = 'animated2 fadeInDown sticky top-0 left-0 w-full z-50 bg-white shadow-[0px_10px_15px_rgba(25,25,25,0.075)] rounded-none p-0 border-b-0';

const Header = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const headerRef = React.useRef(null);
    const mobileDrawerButtonRef = React.useRef(null);
    const pathname = usePathname();
    const cart = useCart();
    const shouldShowCartBadge = (cart.items.length > 0);

    const cartIcon = (
        <a
            className="relative cursor-pointer inline-flex items-center"
            href="/checkout"
            aria-label="Cart"
        >
            <i
                className="fas fa-shopping-basket px-4 text-primary text-xl p-4"
                aria-hidden="true"
            />
            {shouldShowCartBadge && (
                <span
                    className="absolute top-[16px] right-[14px] h-[8px] w-[8px] bg-red-500 rounded-full z-10"
                    aria-hidden="true"
                />
            )}
        </a>
    );

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleStickyAnimation = () => {
        if (!headerRef.current) {
            return;
        }
        if (window.scrollY === 0 && toggleStickyAnimation.isSticky) {
            headerRef.current.classList.remove(...stickyHeaderClassName.split(' '));
            headerRef.current.classList.add('transition-all', 'duration-600', 'ease-in-out', 'lg:py-4');
            toggleStickyAnimation.isSticky = false;
            return;
        }
        if (window.scrollY >= 250 && !toggleStickyAnimation.isSticky) {
            setIsCollapsed(true);
            headerRef.current.classList.add(...stickyHeaderClassName.split(' '));
            headerRef.current.classList.remove('lg:py-4');
            toggleStickyAnimation.isSticky = true;
            return;
        }
    };

    const collapseMenuOnMobileOutsideClick = React.useCallback(() => {
        const eventListener = document.addEventListener('click', e => {
            const isMobile = (mobileDrawerButtonRef.current && mobileDrawerButtonRef.current.getBoundingClientRect().top > 0);
            if (!isMobile) {
                return;
            }
            if (isCollapsed || !headerRef.current || e.target.closest('header')) {
                return;
            }
            setIsCollapsed(true);
        });
        return () => {
            document.removeEventListener('click', eventListener);
        }
    }, [isCollapsed]);

    const initStickyAnimation = () => {
        const throttledToggleStickyAnimation = throttle(toggleStickyAnimation, 100);
        window.addEventListener('scroll', throttledToggleStickyAnimation);

        return () => {
            window.removeEventListener('scroll', throttledToggleStickyAnimation);
        };
    };

    React.useEffect(collapseMenuOnMobileOutsideClick, [collapseMenuOnMobileOutsideClick]);
    React.useEffect(initStickyAnimation, []);

    return (
        <header className={clsx('bg-white text-gray-600 body-font lg:px-28 lg:py-4 border-b border-green-200 border-opacity-50', [className])} ref={headerRef}>
            <div className="flex flex-wrap px-4 sm:px-8 pt-[24px] pb-[8px] xl:p-5 flex-row items-center justify-between">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-2 xl:mb-0">
                    <img src={logoDark.src} alt="logo" width={164.25} height={36} className="h-[36px]" />
                </a>
                <div className="xl:hidden">
                    {cartIcon}
                    <button
                        type="button"
                        className="p-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm"
                        aria-label={isCollapsed ? "Open navigation menu" : "Close navigation menu"}
                        aria-controls="navbar"
                        aria-expanded={!isCollapsed}
                        onClick={toggleCollapse}
                        ref={mobileDrawerButtonRef}
                    >
                        <svg
                            className={`${isCollapsed ? 'block' : 'hidden'} flex-shrink-0 size-4`}
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1={3} x2={21} y1={6} y2={6} />
                            <line x1={3} x2={21} y1={12} y2={12} />
                            <line x1={3} x2={21} y1={18} y2={18} />
                        </svg>
                        <svg
                            className={`${isCollapsed ? 'hidden' : 'block'} flex-shrink-0 size-4`}
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
                <div
                    id="navbar"
                    className={`${isCollapsed ? 'max-h-0' : 'max-h-screen mt-2 p-2 shadow-[0px_10px_15px_rgba(25,25,25,0.1)] xl:mt-0 xl:p-0 xl:shadow-none'} transition-all duration-300 ease-in-out xl:max-h-screen overflow-hidden w-full xl:w-auto xl:flex-grow`}
                >
                    <nav className="flex flex-col xl:flex-row text-base justify-end py-4 xl:py-0">
                        {content.header.menu.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className={`${pathname === href ? 'text-primary' : 'text-gray-800'} hover:text-primary font-bold text-xl relative mx-5 py-2 capitalize`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="hidden xl:flex xl:ml-auto items-center">
                    {cartIcon}
                    <div className="hidden xl:block xl:border-l xl:border-gray-300 ml-4 mr-4 h-6"></div>
                    <a href={content.header.cta.href} className="hidden xl:block">
                        <button className="text-lg py-2 px-6 m-4">
                            {content.header.cta.text}
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
