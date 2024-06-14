'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import clsx from 'clsx';
import factsBgImage from '@/assets/bg/facts.jpg';
import content from '@/content';

const Facts = ({ className }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section
            id="facts"
            className={clsx('fact-bg flex flex-col items-center min-w-full pt-110 pb-90', [className])}
            style={{
                backgroundImage: `url(${factsBgImage.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            ref={ref}
        >
            <div className="container mx-auto z-10 px-4 lg:px-28">
                <div className="flex flex-wrap justify-center">
                    <div className="xl:w-2/3 pr-4 pl-4 lg:w-4/5 pr-4 pl-4">
                        <div className="section-title white-title text-center mb-55">
                            <h2 dangerouslySetInnerHTML={{ __html: content.facts.title }} />
                            <p>{content.facts.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {content.facts.items.map((fact, index) => (
                        <div key={index} className="lg:w-1/4 pr-4 pl-4 sm:w-1/2 w-full pr-4 pl-4">
                            <div className="single-fact text-center mb-50">
                                <div className="fact-icon mb-25">
                                    <span className="material-symbols-outlined text-5xl text-white">{fact.icon}</span>
                                </div>
                                <div className="fact-content">
                                    <h5>
                                        <CountUp
                                            start={0}
                                            end={inView ? fact.value : 0}
                                            duration={2}
                                            separator=","
                                            decimal="."
                                            prefix=""
                                            suffix={` ${fact.unit}`}
                                        />
                                    </h5>
                                    <p>{fact.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facts;
