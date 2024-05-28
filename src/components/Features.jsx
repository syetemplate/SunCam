'use client';

import featuresBgImage from '@/assets/bg/features.jpg';
import feature1Icon from '@/assets/media/feature-1.png';
import feature2Icon from '@/assets/media/feature-2.png';
import feature3Icon from '@/assets/media/feature-3.png';
import feature4Icon from '@/assets/media/feature-4.png';
import content from '@/content';

const addFlipAnimation = e => e.currentTarget.querySelector('img').classList.add('flip');
const removeFlipAnimation = e => e.currentTarget.querySelector('img').classList.remove('flip');

const Features = () => {
    return (
        <section
            id="features"
            className="container bg-cover bg-center px-4 py-20 2xl:px-28 min-w-full shadow-[0px_2px_12px_7px_rgba(82,33,162,0.05)]"
            style={{
                backgroundImage: `url(${featuresBgImage.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
                <div
                    className="bg-white text-center mb-8 shadow-[0px_0px_9px_1px_rgba(0,0,0,0.08)] px-8 py-12"
                    onMouseEnter={addFlipAnimation}
                    onAnimationEnd={removeFlipAnimation}
                >
                    <img
                        src={feature1Icon.src}
                        alt="img"
                        className="mx-auto mb-5 animated"
                    />
                    <h5 className="text-blue-950 text-lg font-semibold mb-3">{content.features.list[0].title}</h5>
                    <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                        {content.features.list[0].description}
                    </p>
                </div>
                <div
                    className="bg-white text-center mb-8 shadow-[0px_0px_9px_1px_rgba(0,0,0,0.08)] px-8 py-12"
                    onMouseEnter={addFlipAnimation}
                    onAnimationEnd={removeFlipAnimation}
                >
                    <img
                        src={feature2Icon.src}
                        alt="img"
                        className="mx-auto mb-5 animated"
                    />
                    <h5 className="text-blue-950 text-lg font-semibold mb-3">{content.features.list[1].title}</h5>
                    <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                        {content.features.list[1].description}
                    </p>
                </div>
                <div
                    className="bg-white text-center mb-8 shadow-[0px_0px_9px_1px_rgba(0,0,0,0.08)] px-8 py-12"
                    onMouseEnter={addFlipAnimation}
                    onAnimationEnd={removeFlipAnimation}
                >
                    <img
                        src={feature3Icon.src}
                        alt="img"
                        className="mx-auto mb-5 animated"
                    />
                    <h5 className="text-blue-950 text-lg font-semibold mb-3">{content.features.list[2].title}</h5>
                    <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                        {content.features.list[2].description}
                    </p>
                </div>
                <div
                    className="bg-white text-center mb-8 shadow-[0px_0px_9px_1px_rgba(0,0,0,0.08)] px-8 py-12"
                    onMouseEnter={addFlipAnimation}
                    onAnimationEnd={removeFlipAnimation}
                >
                    <img
                        src={feature4Icon.src}
                        alt="img"
                        className="mx-auto mb-5 animated"
                    />
                    <h5 className="text-blue-950 text-lg font-semibold mb-3">{content.features.list[3].title}</h5>
                    <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                        {content.features.list[3].description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;