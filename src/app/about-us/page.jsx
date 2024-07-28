import content from '@/content';

export const metadata = {
  title: content.meta.pages.aboutUs.title,
  description: content.meta.pages.aboutUs.description,
  canonical: 'https://minidrone.co.il/about-us',
  'og:title': content.meta.pages.aboutUs.title,
  'og:description': content.meta.pages.aboutUs.description,
  'og:url': 'https://minidrone.co.il/about-us',
  'twitter:card': 'summary_large_image',
  'twitter:title': content.meta.pages.aboutUs.title,
  'twitter:description': content.meta.pages.aboutUs.description,
};

const AboutUsPage = () => {
    return (
        <section id="about-us" className="px-4 sm:px-8 lg:px-28 pt-16 pb-[256px] md:pb-[160px]">
            <div className="flex flex-wrap justify-center">
                <div className="px-4 w-full lg:w-9/12">
                    <div className="section-title text-center mb-55">
                        <h2>{content.aboutUs.title}</h2>
                        <div className="bar"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="px-4 w-full lg:w-9/12">
                    {content.aboutUs.sections.map((section, index) => (
                        <div key={index} className="mb-30">
                            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsPage;