import content from '@/content';

const TermsAndConditionsPage = () => {
    return (
        <section id="terms-and-conditions" className="terms-and-conditions-area pt-110 pb-90">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 md:w-4/5 pr-4 pl-4">
                        <div className="section-title text-center mb-55">
                            <h2>{content.termsAndConditions.title}</h2>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="xl:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 md:w-4/5 pr-4 pl-4">
                        {content.termsAndConditions.sections.map((section, index) => (
                            <div key={index} className="mb-30">
                                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                <p>{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditionsPage;
