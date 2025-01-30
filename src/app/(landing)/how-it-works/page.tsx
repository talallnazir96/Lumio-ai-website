"use client";
import Navbar from "@/features/landing/components/navbar";
import Footer from "@/features/landing/components/footer";

const HowItWorks = () => {
    return (
        <>
            <Navbar />
            <section className="bannersection innerbanner py-16 md:py-24">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bannerheading text-center">
                                <h1 className="text-3xl md:text-4xl font-semibold">
                                    How does LumioAI talent hiring work?
                                </h1>
                                <h5 className="text-lg md:text-xl mt-4">
                                    We simplify sourcing and vetting of developers for you. <br />
                                    Let us know your requirements, we’ll find the perfect fit.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stepsection py-16">
                <div className="container">
                    <div className="flex flex-wrap gap-8 justify-center">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="steps text-center md:text-left">
                                <span className="text-3xl font-semibold text-primary">{step}</span>
                                <div className="icon mt-4 mb-4">
                                    <img
                                        src={`/assets/img/step${step}.svg`}
                                        alt={`step${step}`}
                                        className="mx-auto md:mx-0"
                                    />
                                </div>
                                <a href="#" className="btnstyle2 greenish inline-block mt-4 px-6 py-2 text-sm md:text-base">
                                    {`Step ${step} Action`}
                                </a>
                                <p className="paratext mb-0 text-sm md:text-base mt-4">
                                    Description for step {step}. You can add more details here.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="globesec py-16">
                <div className="container">
                    <div className="row flex flex-col md:flex-row items-center">
                        <div className="col-12 md:col-4 mb-8 md:mb-0">
                            <img src="/assets/img/world-map.png" className="img-fluid mx-auto" alt="worldmap" />
                        </div>
                        <div className="col-12 md:col-8 text-center md:text-left ps-5">
                            <h4 className="SectionHeading text-xl md:text-2xl font-semibold">
                                Many companies already trust LumioAI to hire developer teams on-demand
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container getStart py-16">
                <div className="row">
                    <div className="col-12 d-flex justify-center gap-4">
                        <a href="#" className="btnstyle1 px-8 py-4 text-lg">
                            Hire Developer
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HowItWorks;