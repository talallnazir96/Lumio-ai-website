"use client";
import Navbar from "@/features/landing/components/navbar";
import Footer from "@/features/landing/components/footer";

const HowItWorks = () => {
    const steps = [
        {
            title: "Tell us what skills you need",
            description:
                "With few simple steps you can let us know what exactly you're looking for. You can also schedule a demo with one of our experts.",
            icon: "/assets/img/step1.svg",
        },
        {
            title: "We'll find you the perfect match",
            description:
                "Our AI will evaluate your request, and we will find you candidates who perfectly match your requirements. You will receive an email from us.",
            icon: "/assets/img/step2.svg",
        },
        {
            title: "Meet your developers",
            description:
                "After you select developers, you can start right away or have a call with them to ensure they fit your business needs.",
            icon: "/assets/img/step3.svg",
        },
        {
            title: "Start your 2 week no-risk trial",
            description:
                "If you're happy with the developer you can start your free trial. You can track the job progress on dedicated dashboard to easily monitor everything.",
            icon: "/assets/img/step4.svg",
        },
    ];

    return (
        <>
            <Navbar />
            <section className="bannersection innerbanner py-16 md:py-24">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bannerheading text-center">
                                <h1>
                                    <span className="text-3xl md:text-4xl font-semibold">
                                        How does LumioAI talent hiring work?
                                    </span>
                                </h1>
                                <h5 className="text-sm md:text-1xl mt-4">
                                    We simplify sourcing and vetting of developers for you. <br />
                                    Let us know your requirements, we’ll find the perfect fit.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="stepsection py-16">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="relative">
                        {/* Vertical line for larger screens */}
                        {/* <div className="hidden md:block absolute left-[240px] top-[40px] bottom-[40px] w-[2px] bg-[#E5E7EB]" /> */}

                        <div className="flex flex-col space-y-16 items-center justify-center">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                                        {/* Number */}
                                        <span className="text-gray-700 text-xl md:text-3xl font-semibold">{index + 1}</span>

                                        {/* Icon circle */}
                                        <div className="relative z-10 flex-shrink-0 w-[56px] h-[56px] md:w-[88px] md:h-[88px] rounded-full bg-white border-2 border-[#7ECFB3] flex items-center justify-center">
                                            <img
                                                src={step.icon || "/placeholder.svg"}
                                                alt={`Step ${index + 1}`}
                                                className="w-8 h-8 md:w-12 md:h-12"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                                        {/* Button */}
                                        <div className="flex h-11 w-56 bg-[#7ECFB3] text-white rounded-2xl px-6 py-3 md:px-3 md:py-3 text-sm md:text-base font-medium items-center justify-center">
                                            {step.title}
                                        </div>

                                        {/* Description */}
                                        <p className="mt-4 text-sm md:text-base text-gray-600 text-center md:text-left w-full md:w-[350px]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Globe Section */}
            <section className="globesec py-12 md:py-16">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="text-center md:text-left">
                            <img src="/assets/img/world-map.png" className="h-[200px] w-[200px] md:h-[300px] md:w-[300px]" alt="worldmap" />
                        </div>
                        <div className="text-center md:text-left md:w-[650px]">
                            <h4 className="SectionHeading">
                                <span className="text-lg md:text-2xl font-semibold">
                                    Many companies already trust LumioAI to hire developer teams on-demand
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Started Section */}
            <div className="container getStart py-16">
                <div className="row">
                    <div className="col-12 d-flex justify-center gap-4">
                        <a href="#" className="btnstyle1 px-8 py-2 text-lg">
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