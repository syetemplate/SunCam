import content from '@/content';

const TermsAndConditionsPage = () => {
    return (
        <section id="terms-and-conditions" className="px-4 lg:px-28 pt-16 pb-[256px] md:pb-[160px]">
            <div className="flex flex-wrap justify-center">
                <div className="px-4 w-full lg:w-9/12">
                    <div className="section-title text-center mb-55">
                        <h2>{content.termsAndConditions.title}</h2>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="px-4 w-full lg:w-9/12">
                    {content.termsAndConditions.sections.map((section, index) => (
                        <div key={index} className="pb-12">
                            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditionsPage;
