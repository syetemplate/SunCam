'use client';

import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { throttle } from 'lodash';
import logoDark from '@/assets/media/logo-dark.png';
import content from '@/content';
import { useCart } from '@/state/cart';

const stickyHeaderClassName = 'animated fadeInDown sticky top-0 left-0 w-full z-50 bg-white shadow-[0px_10px_15px_rgba(25,25,25,0.075)] rounded-none p-0 border-b-0';

const Header = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const headerRef = React.useRef(null);
    const pathname = usePathname();
    const cart = useCart();
    const shouldShowCartBadge = (cart.items.length > 0);

    const cartIcon = (
        <a className="relative cursor-pointer" href="/checkout">
            <i className="fas fa-shopping-basket px-4 text-limegreen text-xl" />
            {shouldShowCartBadge && <span className="absolute top-0 right-[14px] h-[8px] w-[8px] bg-red-500 rounded-full z-10" />}
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

    const initStickyAnimation = () => {
        const throttledToggleStickyAnimation = throttle(toggleStickyAnimation, 100);
        window.addEventListener('scroll', throttledToggleStickyAnimation);

        return () => {
            window.removeEventListener('scroll', throttledToggleStickyAnimation);
        };
    };

    React.useEffect(initStickyAnimation, []);

    return (
        <header className={clsx('bg-white text-gray-600 body-font lg:px-28 lg:py-4 border-b border-green-200 border-opacity-50', [className])} ref={headerRef}>
            <div className="flex flex-wrap px-4 pt-[24px] pb-[8px] xl:p-5 flex-row items-center justify-between">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logoDark.src} alt="logo" />
                </a>
                <div className="md:hidden">
                    {cartIcon}
                    <button
                        type="button"
                        className="p-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm"
                        aria-controls="navbar"
                        aria-expanded={!isCollapsed}
                        onClick={toggleCollapse}
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
                    className={`${isCollapsed ? 'max-h-0' : 'max-h-screen mt-2 p-2 shadow-[0px_10px_15px_rgba(25,25,25,0.1)] md:mt-0 md:p-0 md:shadow-none'} transition-all duration-300 ease-in-out md:max-h-screen overflow-hidden w-full md:w-auto md:flex-grow`}
                >
                    <nav className="flex flex-col md:flex-row text-base justify-end py-4 md:py-0">
                        {content.header.menu.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className={`${pathname === href ? 'text-limegreen' : 'text-gray-800'} hover:text-limegreen font-semibold relative mx-5 py-2 capitalize`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="hidden md:flex md:ml-auto items-center">
                    {cartIcon}
                    <div className="hidden md:block md:border-l md:border-gray-300 ml-4 mr-4 h-6"></div>
                    <a href={content.header.cta.href} className="hidden md:block">
                        <button>{content.header.cta.text}</button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
