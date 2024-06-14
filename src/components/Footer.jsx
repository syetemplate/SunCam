'use client';

import React from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import newsletterBgImage from '@/assets/bg/newsletter.jpg';
import footerBgImage from '@/assets/bg/footer.jpg';
import logoLite from '@/assets/media/logo-lite.png';
import paymentMethodsImage from '@/assets/media/payment-methods.png';
import content from '@/content';

const numOfRecentPosts = 3;

const Footer = ({ className }) => {
    const recentPosts = content.blog.posts.slice(-numOfRecentPosts);

    return (
        <footer className={clsx('flex flex-col items-center relative', [className])}>
            <section id="newsletter" className="flex flex-wrap px-4 lg:px-28 w-full absolute z-10 top-[-232px] md:top-[-128px] lg:top-[-64px]">
                <div className="w-full">
                    <div
                        className="newsletter-wrap"
                        style={{
                            backgroundImage: `url(${newsletterBgImage.src})`,
                        }}
                    >
                        <div className="flex flex-wrap lg:flex-nowrap justify-center">
                            <div className="w-full pr-4 pl-4">
                                <div className="newsletter-content mb-[25px] text-center lg:text-left">
                                    <h4>{content.newsletter.title}</h4>
                                    <span>{content.newsletter.description}</span>
                                </div>
                            </div>
                            <div className="w-full pr-4 pl-4">
                                <div className="newsletter-form">
                                    <form action="#" className="flex-col sm:flex-row">
                                        <input type="email" placeholder={content.newsletter.emailPlaceholder} className="w-full" />
                                        <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline">{content.newsletter.submit}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-wrap pt-190 pb-40 px-4 lg:px-28 w-full background-cover background-center" style={{ backgroundImage: `url(${footerBgImage.src})` }}>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-4">
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
                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-4">
                        <div className="footer-widget mb-50">
                            <div className="fw-title mb-30">
                                <h5>recent posts</h5>
                            </div>
                            <div className="f-rc-post">
                                <ul>
                                    {recentPosts.map((recentPost, index) => {
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
                                                    <h5><a href={recentPost.href}>{recentPost.title}</a></h5>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-4">
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
                    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-4">
                        <div className="footer-widget mb-50">
                            <div className="fw-title mb-30">
                                <h5>{content.footer.contact.title}</h5>
                            </div>
                            <div className="footer-form" id="contact">
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
            <div className="copyright-wrap w-full px-4 lg:px-28">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="sm:w-1/2 px-4">
                        <div className="copyright-text mb-4 sm:mb-0">
                            <p>{content.footer.copyright}</p>
                        </div>
                    </div>
                    <div className="sm:w-1/2 px-4">
                        <div className="f-payment-method text-center md:text-right float-right">
                            <img src={paymentMethodsImage.src} alt="payment methods" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
