'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import logo from '@/assets/media/logo.png';
import labels from '@/labels';

const menu = [
    { label: labels.header.menu.home, href: '/' },
    { label: labels.header.menu.products, href: '/products' },
    { label: labels.header.menu.blog, href: '/blog' },
];

const Header = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const pathname = usePathname();

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <header className="text-gray-600 body-font lg:px-28 lg:py-4 sm:border-b sm:border-green-200 sm:border-opacity-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo.src} alt="logo" />
                </a>
                <div className="md:hidden">
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
                    className={`${isCollapsed ? 'max-h-0' : 'max-h-screen'} md:max-h-screen overflow-hidden w-full md:w-auto md:flex-grow`}
                >
                    <nav className="flex flex-col md:flex-row items-center text-base justify-end py-4 md:py-0">
                        {menu.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className={`${pathname === href ? 'text-green-500' : 'text-gray-800'} font-semibold relative mx-5 py-2 capitalize`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="hidden md:flex md:ml-auto items-center">
                    <div className="hidden md:block">
                        <i className="fas fa-shopping-basket px-4 text-green-500"></i>
                    </div>
                    <div className="hidden md:block border-l border-gray-300 ml-4 mr-4 h-6"></div>
                    <button className="hidden md:block">{labels.header.cta}</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
