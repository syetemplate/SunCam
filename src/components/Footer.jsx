'use client';

import React from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import axios from 'axios';
import { useFormik, Field, FormikProvider } from 'formik';
import * as yup from 'yup';
import newsletterBgImage from '@/assets/bg/newsletter.jpg';
import footerBgImage from '@/assets/bg/footer.jpg';
import logoLite from '@/assets/media/logo-lite.webp';
import paymentMethodsImage from '@/assets/media/payment-methods.png';
import content from '@/content';

const numOfRecentPosts = 3;
const recentPosts = content.blog.posts.slice(-numOfRecentPosts);

const dynamicImages = recentPosts.map(({ title, imageName }) => ({
    imageName: imageName,
    component: dynamic(() => import(`@/assets/media/${imageName}`).then(module => {
        const Component = ({ fill, ...props }) => (
            <Image
                {...props}
                src={module.default}
                alt={title}
                width={80}
                height={80}
                sizes="20vw"
                className="w-[80px] h-[80px] min-w-[80px] min-h-[80px] object-contain"
            />
        );
        Component.displayName = `Image-${imageName}`;
        return Component;
    }), {
        loading: () => <img width="80" height="80" className="w-[80px] h-[80px] min-w-[80px] min-h-[80px]" />,
    }),
}));

const validationSchema = yup.object().shape({
    email: yup.string().email(content.newsletter.emailError).required(content.newsletter.emailError),
});

const Footer = ({ className }) => {
    const [postSubmitMessage, setPostSubmitMessage] = React.useState({ message: '', type: '' });
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema,
        onSubmit: async values => {
            try {
                debugger;
                const response = await axios.post('/api/subscribe', values);
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }
                formik.resetForm();
                setPostSubmitMessage({ message: content.newsletter.success, type: 'success' });
            } catch (error) {
                console.error('Error subscribing:', error);
                setPostSubmitMessage({ message: content.newsletter.error, type: 'error' });
            }
        },
    });

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
                            <div className="w-full pr-4 pl-4 rtl:lg:pl-4 rtl:lg:pr-0">
                                <div className="newsletter-content mb-[25px] text-center lg:text-left rtl:lg:text-right">
                                    <h4>{content.newsletter.title}</h4>
                                    <span>{content.newsletter.description}</span>
                                </div>
                            </div>
                            <div className="w-full pr-4 pl-4 rtl:lg:pr-0 rtl:lg:pl-4">
                                <div className="newsletter-form">
                                    <FormikProvider value={formik}>
                                        <form onSubmit={formik.handleSubmit} className="flex-col sm:flex-row">
                                            <Field name="email">
                                                {({ field, meta }) => (
                                                    <div className="fled-col">
                                                        <input
                                                            {...field}
                                                            type="email"
                                                            placeholder={content.newsletter.emailPlaceholder}
                                                            disabled={formik.isSubmitting || postSubmitMessage?.message}
                                                            className="w-full disabled:opacity-50 disabled:pointer-events-none disabled:cursor-default"
                                                        />
                                                        {meta.touched && meta.error && (
                                                            <p className="text-red-500 text-start m-1">{meta.error}</p>
                                                        )}
                                                        {postSubmitMessage?.message && (
                                                            <p className={clsx('text-start m-1', {
                                                                'text-green-500': (postSubmitMessage?.type === 'success'),
                                                                'text-red-500': (postSubmitMessage?.type === 'error'),
                                                            })}>
                                                                {postSubmitMessage?.message}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            </Field>
                                            <button
                                                type="submit"
                                                className="my-2 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-default"
                                                disabled={formik.isSubmitting || postSubmitMessage?.message}
                                            >
                                                {content.newsletter.submit}
                                            </button>
                                        </form>
                                    </FormikProvider>
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
                            <div className="footer-logo mb-4">
                                <a href="index.html"><img src={logoLite.src} alt="logo" className="h-[36px]" /></a>
                            </div>
                            <div className="footer-text rtl:text-right">
                                <p>{content.footer.text}</p>
                            </div>
                            <div className="footer-social">
                                <ul className="rtl:text-right">
                                    {content.footer.social.map((social, index) => (
                                        <li key={index}>
                                            <a href={social.href} target="_blank">
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
                                <h5>{content.footer.recentPosts}</h5>
                            </div>
                            <div className="f-rc-post">
                                <ul>
                                    {recentPosts.map((recentPost, index) => {
                                        const RecentPostImage = dynamicImages.find(({ imageName }) => (imageName === recentPost.imageName)).component;
                                        return (
                                            <li key={index}>
                                                <div className="f-rc-thumb">
                                                    <a href={recentPost.href}><RecentPostImage /></a>
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
                            <div className="fw-title mb-30 rtl:text-right">
                                <h5>{content.footer.usefulLinks.title}</h5>
                            </div>
                            <div className="fw-link">
                                <ul className="rtl:text-right">
                                    {content.footer.usefulLinks.list.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className="whitespace-nowrap">
                                                <i className="fas fa-caret-right rtl:ml-2 rtl:rotate-180" />
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
                            <div className="fw-title mb-30 rtl:text-right">
                                <h5>{content.footer.contact.title}</h5>
                            </div>
                            <div className="footer-form rtl:text-right" id="contact">
                                <form action="#">
                                    <input type="email" placeholder={content.footer.contact.emailPlaceholder} className="rtl:text-right" />
                                    <textarea name="message" placeholder={content.footer.contact.messagePlaceholder} className="rtl:text-right"></textarea>
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
                        <div className="copyright-text mb-4 sm:mb-0 rtl:text-right">
                            <p>{content.footer.copyright}</p>
                        </div>
                    </div>
                    <div className="sm:w-1/2 px-4">
                        <div className="f-payment-method text-center md:text-right float-right rtl:float-left rtl:md:text-left">
                            <img src={paymentMethodsImage.src} alt="payment methods" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
