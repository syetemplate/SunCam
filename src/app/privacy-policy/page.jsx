import content from '@/content';

export const metadata = {
  title: content.meta.pages.privacyPolicy.title,
  description: content.meta.pages.privacyPolicy.description,
  canonical: 'https://suncam.co.il/privacy-policy',
  'og:title': content.meta.pages.privacyPolicy.title,
  'og:description': content.meta.pages.privacyPolicy.description,
  'og:url': 'https://suncam.co.il/privacy-policy',
  'twitter:card': 'summary_large_image',
  'twitter:title': content.meta.pages.privacyPolicy.title,
  'twitter:description': content.meta.pages.privacyPolicy.description,
};

const PrivacyPolicyPage = () => {
    return (
        <section id="privacy-policy" className="px-4 sm:px-8 lg:px-28 pt-16 pb-[256px] md:pb-[160px]">
            <div className="flex flex-wrap justify-center">
                <div className="px-4 w-full lg:w-9/12">
                    <div className="section-title text-center mb-55">
                        <h2>{content.privacyPolicy.title}</h2>
                        <div className="bar"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="px-4 w-full lg:w-9/12">
                    {content.privacyPolicy.sections.map((section, index) => (
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

export default PrivacyPolicyPage;
