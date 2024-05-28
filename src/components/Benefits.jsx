'use client';
import benefitsImage from '@/assets/media/benefits.png';
import benefit1Icon from '@/assets/media/benefit-1.png';
import benefit2Icon from '@/assets/media/benefit-2.png';
import benefit3Icon from '@/assets/media/benefit-3.png';
import benefit4Icon from '@/assets/media/benefit-4.png';
import benefit5Icon from '@/assets/media/benefit-5.png';
import benefit6Icon from '@/assets/media/benefit-6.png';
import content from '@/content';

const addHoverAnimation = e => {
    e.currentTarget.querySelector('h5').classList.remove('duration-500');
    e.currentTarget.querySelector('img').classList.remove('duration-500');
    e.currentTarget.querySelector('h5').classList.add('text-limegreen', 'duration-300');
    e.currentTarget.querySelector('img').classList.add('border-limegreen', 'duration-300');
};

const removeHoverAnimation = e => {
    e.currentTarget.querySelector('h5').classList.add('duration-500');
    e.currentTarget.querySelector('img').classList.add('duration-500');
    e.currentTarget.querySelector('h5').classList.remove('text-limegreen', 'duration-300');
    e.currentTarget.querySelector('img').classList.remove('border-limegreen', 'duration-300');
};

const Benefits = () => {
    return (
        <section id="benefits" className="px-4 py-24">
            <div className="container mx-auto">
                <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-blue-950 text-4xl font-bold">{content.benefits.title}</h2>
                        <div className="relative h-0.5 w-44 bg-gray-300 mx-auto mt-6 mb-8 rounded-[50%]">
                            <div className="absolute -top-[3px] h-2 w-2 bg-limegreen rounded-full animated duration-4000 infinite moveLeftRight"></div>
                        </div>
                        <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.subtitle}</p>
                    </div>
                </div>
                <div className="w-full lg:w-11/12 xl:w-full mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-full xl:w-1/3 md:w-1/2">
                        <div
                            className="flex flex-col justify-end md:flex-row items-center mb-10 md:pr-2 lg:pr-10"
                            onMouseEnter={addHoverAnimation}
                            onMouseLeave={removeHoverAnimation}
                        >
                            <div className="order-0 mb-4 md:mb-0 md:order-2 md:ml-4">
                                <img
                                    className="block w-min-20 h-min-20 text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] transition-all"
                                    src={benefit1Icon.src}
                                    alt={content.benefits.list[0].title}
                                />
                            </div>
                            <div className="lg:w-8/12 text-center md:text-left md:text-right">
                                <h5 className="text-blue-950 text-lg font-semibold transition-all">{content.benefits.list[0].title}</h5>
                                <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.list[0].description}</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-end md:flex-row items-center mb-10 md:pr-2 lg:pr-10"
                            onMouseEnter={addHoverAnimation}
                            onMouseLeave={removeHoverAnimation}
                        >
                            <div className="order-0 mb-4 md:mb-0 md:order-2 md:ml-4">
                                <img
                                    className="block w-min-20 h-min-20 text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] transition-all"
                                    src={benefit2Icon.src}
                                    alt={content.benefits.list[1].title}
                                />
                            </div>
                            <div className="lg:w-8/12 text-center md:text-left md:text-right">
                                <h5 className="text-blue-950 text-lg font-semibold transition-all">{content.benefits.list[1].title}</h5>
                                <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.list[1].description}</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-end md:flex-row items-center mb-10 md:pr-2 lg:pr-10"
                            onMouseEnter={addHoverAnimation}
                            onMouseLeave={removeHoverAnimation}
                        >
                            <div className="order-0 mb-4 md:mb-0 md:order-2 md:ml-4">
                                <img
                                    className="block w-min-20 h-min-20 text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] transition-all"
                                    src={benefit3Icon.src}
                                    alt={content.benefits.list[2].title}
                                />
                            </div>
                            <div className="lg:w-8/12 text-center md:text-left md:text-right">
                                <h5 className="text-blue-950 text-lg font-semibold transition-all">{content.benefits.list[2].title}</h5>
                                <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.list[2].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:w-1/3 xl:block">
                        <div className="relative">
                            <img src={benefitsImage.src} alt="" className="mx-auto" />
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 md:w-1/2">
                        <div
                            className="flex flex-col md:flex-row items-center mb-10 md:pl-2 lg:pl-10"
                            onMouseEnter={addHoverAnimation}
                            onMouseLeave={removeHoverAnimation}
                        >
                            <div className="mb-4 md:mb-0 mr-0 md:mr-4">
                                <img
                                    className="block w-min-20 h-min-20 text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] transition-all"
                                    src={benefit4Icon.src}
                                    alt={content.benefits.list[3].title}
                                />
                            </div>
                            <div className="lg:w-8/12 text-center md:text-left">
                                <h5 className="text-blue-950 text-lg font-semibold transition-all">{content.benefits.list[3].title}</h5>
                                <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.list[3].description}</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col md:flex-row items-center mb-10 md:pl-2 lg:pl-10"
                            onMouseEnter={addHoverAnimation}
                            onMouseLeave={removeHoverAnimation}
                        >
                            <div className="mb-4 md:mb-0 mr-0 md:mr-4">
                                <img
                                    className="block w-min-20 h-min-20 text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] transition-all"
                                    src={benefit5Icon.src}
                                    alt={content.benefits.list[4].title}
                                />
                            </div>
                            <div className="lg:w-8/12 text-center md:text-left">
                                <h5 className="text-blue-950 text-lg font-semibold transition-all">{content.benefits.list[4].title}</h5>
                                <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.list[4].description}</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col md:flex-row items-center mb-10 md:pl-2 lg:pl-10"
                            onMouseEnter={addHoverAnimation}
                            onMouseLeave={removeHoverAnimation}
                        >
                            <div className="mb-4 md:mb-0 mr-0 md:mr-4">
                                <img
                                    className="block w-min-20 h-min-20 text-center leading-[80px] text-4xl border-2 border-dashed border-[#062a4d] rounded-full text-[#062a4d] transition-all"
                                    src={benefit6Icon.src}
                                    alt={content.benefits.list[5].title}
                                />
                            </div>
                            <div className="lg:w-8/12 text-center md:text-left">
                                <h5 className="text-blue-950 text-lg font-semibold transition-all">{content.benefits.list[5].title}</h5>
                                <p className="text-zinc-500 text-sm font-medium leading-loose">{content.benefits.list[5].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
