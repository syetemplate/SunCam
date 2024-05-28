'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import footerBgImage from '@/assets/bg/footer.jpg';
import logoLite from '@/assets/media/logo-lite.png';
import paymentMethodsImage from '@/assets/media/payment-methods.png';
import content from '@/content';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrap pt-190 pb-40" style={{ backgroundImage: `url(${footerBgImage.src})` }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap ">
                        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                            <div className="footer-widget mb-50">
                                <div className="footer-logo mb-35">
                                    <a href="index.html"><img src={logoLite.src} alt="logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>{content.footer.text}</p>
                                </div>
                                <div className="footer-social">
                                    <ul>
                                        {content.footer.social.map((social, index) => (
                                            <li key={index}>
                                                <a href={social.href}>
                                                    <i className={social.icon}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-30">
                                    <h5>recent posts</h5>
                                </div>
                                <div className="f-rc-post">
                                    <ul>
                                        {content.footer.recentPosts.list.map((recentPost, index) => {
                                            const Image = dynamic(() => import(`@/assets/media/${recentPost.imageName}`).then(module => {
                                                const Component = () => <img src={module.default.src} alt={recentPost.title} width="80" height="80" className="object-contain" />;
                                                Component.displayName = `Image-${recentPost.imageName}`;
                                                return Component;
                                            }), {
                                                loading: () => <img width="80" height="80" className="w-full p-1" />,
                                            });
                                            return (
                                                <li key={index}>
                                                    <div className="f-rc-thumb">
                                                        <a href={recentPost.href}><Image /></a>
                                                    </div>
                                                    <div className="f-rc-content">
                                                        <span>{recentPost.date}</span>
                                                        <h5><a href={recentPost.href}>{recentPost.description}</a></h5>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-30">
                                    <h5>{content.footer.usefulLinks.title}</h5>
                                </div>
                                <div className="fw-link">
                                    <ul>
                                        {content.footer.usefulLinks.list.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.href} className="whitespace-nowrap">
                                                    <i className="fas fa-caret-right" />
                                                    {` ${link.title}`}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-30">
                                    <h5>{content.footer.contact.title}</h5>
                                </div>
                                <div className="footer-form">
                                    <form action="#">
                                        <input type="email" placeholder={content.footer.contact.emailPlaceholder} />
                                        <textarea name="message" placeholder={content.footer.contact.messagePlaceholder}></textarea>
                                        <button className="inline-block align-middle text-center select-none border font-bold whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline">
                                            {content.footer.contact.submit}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        <div className="lg:w-1/2 pr-4 pl-4 md:w-3/5 pr-4 pl-4">
                            <div className="copyright-text">
                                <p>{content.footer.copyright}</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 pr-4 pl-4 md:w-2/5 pr-4 pl-4">
                            <div className="f-payment-method text-center md:text-right">
                                <img src={paymentMethodsImage.src} alt="payment methods" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
