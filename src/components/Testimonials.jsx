import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import testimonialsBgImage from '@/assets/bg/testimonials.jpg';
import content from '@/content';

const testimonialAvatarImages = content.testimonials.list.map(({ avatarImageName: imageName }) => ({
    imageName,
    component: dynamic(() => import(`@/assets/media/${imageName}`).then(module => {
        const Component = ({ fill, ...props }) => (
            <Image
                {...props}
                src={module.default}
                alt="testimonial"
                width={90}
                height={90}
                className="object-cover min-w-[90px] min-h-[90px] p-1"
            />
        );
        Component.displayName = `Image-${imageName}`;
        return Component;
    }), {
        loading: () => <img width={90} height={90} className={'object-cover min-w-[90px] min-h-[90px] p-1'} />,
    }),
}));

const Testimonials = ({ className }) => {
    return (
        <section
            id="testimonials"
            className={clsx('testimonials-bg flex flex-col items-center min-w-full py-28 pb-[344px] lg:pb-[190px]', [className])}
            style={{
                backgroundImage: `url(${testimonialsBgImage.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto z-10 px-4 lg:px-28">
                <div className="flex flex-wrap justify-center">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 md:w-4/5 pr-4 pl-4">
                        <div className="section-title white-title text-center mb-55">
                            <h2>{content.testimonials.title}</h2>
                            <div className="bar" />
                            <p>{content.testimonials.description}</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials-wrap pl-80 pr-80">
                    <div className="flex flex-wrap">
                        {content.testimonials.list.map((testimonial, index) => {
                            const TestimonialAvatarImage = testimonialAvatarImages.find(({ imageName }) => imageName === testimonial.avatarImageName).component;
                            return (
                                <div key={index} className="md:w-1/2 pr-4 pl-4">
                                    <div className="single-testimonials mb-55">
                                        <div className="testimonials-thumb flex justify-center sm:justify-left">
                                            <TestimonialAvatarImage />
                                        </div>
                                        <div className="testimonials-content">
                                            <div className="testimonials-icon">
                                                <span className="material-symbols-outlined text-3xl text-limegreen">verified</span>
                                            </div>
                                            <p>{testimonial.text}</p>
                                            <div className="testimonials-info">
                                                <h6>{testimonial.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
