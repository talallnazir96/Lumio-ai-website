"use client";
import Navbar from "@/features/landing/components/navbar";
import Footer from "@/features/landing/components/footer";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <section className="bannersection innerbanner md:h-[100vh]">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bannerheading">
                                <h1>Advance businesses with the power of AI</h1>
                                <div className="w-full flex items-center justify-center">
                                    <h5 className="text-sm py-4 text-center w-[500px]">
                                        We help companies reimagine and innovate the way they operate. AI is a powerful tool and{" "}
                                        <strong>We know how to make it work.</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meetteam">
                <div className="container">
                    <div className="flex items-center justify-center">
                        <h2 className="bg-black py-2 px-5 mb-20 rounded-full text-white text-sm md:text-3xl">
                            Meet the team behind LumioAI
                        </h2>
                    </div>
                    <div className="row">
                        <div className="flex items-center justify-around">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="teamimage flex items-center justify-center flex-col">
                                    <img src="/assets/img/george-murusidze.png" className="mb-3" alt="george-murusidze" />
                                    <h3>George Murusidze</h3>
                                    <p className="paratext">Founder/CEO</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="teamimage flex items-center justify-center flex-col">
                                    <img src="/assets/img/luis-anton.png" className="mb-3" alt="luis-anton" />
                                    <h3>Luis Anton Gollonet</h3>
                                    <p className="paratext">Founder/CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-around">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="teamimage flex items-center justify-center flex-col">
                                    <img src="/assets/img/rahul.png" className="mb-3" alt="rahul" />
                                    <h3>Rahul Kapoor</h3>
                                    <p className="paratext">Tech Lead/CTO</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="teamimage flex items-center justify-center flex-col">
                                    <img src="/assets/img/george-murusidze.png" className="mb-3" alt="george-murusidze" />
                                    <h3>George Murusidze</h3>
                                    <p className="paratext">Founder/CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto space-y-16 px-4 md:px-0">
                {/* Our Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
                    <h2 className="text-3xl font-bold">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At LumioAI our journey begun with realization of the transformative potential of artificial
                        intelligence. Coming from different backgrounds, the founding team members had a common vision -{" "}
                        <span className="font-semibold">to help companies</span> adopt AI easier. After the initial testing of
                        our product and services we saw that companies loved what we were doing for them, our feedbacks were
                        greatly positive - this was when we decided to stick to it and to move onto the next level. We are
                        dedicated to offer the best services to businesses that are forward-thinking and don't want to fall
                        behind. Join us to transform the future together.
                    </p>
                </div>

                {/* Our Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Technology is changing rapidly, and it is transforming every industry. Those who cannot keep up with it
                        may fall behind. With the latest developments in AI, it is crucial for businesses to integrate it and
                        optimize their internal systems in order to stay competitive. We know first-hand what challenges these
                        businesses face. This is why we care to provide AI solutions to our clients and help them hire the right
                        tech talent tailored to their needs at affordable prices. We are here to be{" "}
                        <span className="font-semibold">your business partner</span>.
                    </p>
                </div>

                {/* Our Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
                    <h2 className="text-3xl font-bold">Our Values</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At LumioAI we value the quality and customer experience the most. Every{" "}
                        <span className="font-semibold">business is special</span> and we are here to show it to the world.
                    </p>
                </div>
            </div>
            <Footer />
            <style jsx>{`
                @media (max-width: 767px) {
                    .bannerheading h1 {
                        font-size: 1.5rem;
                    }
                    .bannerheading h5 {
                        font-size: 1rem;
                    }
                    .meetteam .col-sm-6 {
                        width: 100%;
                        text-align: center;
                    }
                    .storymission .section-heading {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }
                    .storymission .paratext {
                        font-size: 0.9rem;
                        text-align: justify;
                    }
                }
            `}</style>
        </>
    );
};

export default AboutUs;