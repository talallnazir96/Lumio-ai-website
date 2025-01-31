"use client";
import Navbar from "@/features/landing/components/navbar";
import Footer from "@/features/landing/components/footer";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <section className="bannersection innerbanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bannerheading">
                                <h1>
                                    Advance businesses with the power of AI
                                </h1>
                                <h5>Transform and innovate your business with the use of AI. <br /> <strong>We know how to make it work</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meetteam">
                <div className="container">
                    <div className="flex items-center justify-center">
                        <h2 className="bg-black py-2 px-5 mb-3 rounded-full text-white text-sm md:text-3xl">Meet the team behind LumioAI</h2>
                    </div>
                    <div className="row">
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
            </section>

            <section className="storymission">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-end justify-content-center gap-4 mb-4">
                                <img src="/assets/img/abt-story.svg" width="100px" alt="abt-story" />
                                <h2 className="section-heading">Our Story</h2>
                            </div>
                            <p className="paratext  text-justify px-3 md:px-0">
                                At LumioAI our journey begun with realization of the transformative potential of artificial
                                intelligence. Coming from different backgrounds, the founding team members had a common
                                vision - to <strong>help companies</strong> adopt AI easier. After the initial testing of
                                our product and services we saw that companies loved what we were doing for them, our
                                feedbacks were greatly positive - this was when we decided to stick to it and to move onto
                                the next level. We are dedicated to offer the best services to businesses that are
                                forward-thinking and don’t want to fall behind. Join us to transform the future together.
                            </p>
                        </div>
                        <div className="col-lg-6"></div>

                        <div className="col-lg-6"></div>

                        <div className="col-lg-6">
                            <div className="d-flex align-items-end justify-content-center gap-4 mb-4">
                                <img src="/assets/img/abt-mission.svg" width="100px" alt="abt-mission" />
                                <h2 className="section-heading">Our Mission</h2>
                            </div>
                            <p className="paratext text-justify px-3 md:px-0">
                                Technology is changing rapidly, and it is transforming every industry. Those who cannot keep
                                up with it may fall behind. With the latest developments in AI, it is crucial for businesses
                                to integrate it and optimize their internal systems in order to stay competitive. We know
                                first-hand what challenges these businesses face. This is why we care to provide AI
                                solutions to our clients and help them hire the right tech talent tailored to their needs at
                                affordable prices. We are here to be <strong>your business partner.</strong>
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <div className="d-flex align-items-end justify-content-center gap-4 mb-4">
                                <img src="/assets/img/values.svg" width="100px" alt="value" />
                                <h2 className="section-heading">Our Values</h2>
                            </div>
                            <p className="paratext  text-justify px-3 md:px-0">
                                At LumioAI we value the quality and customer experience the most. Every <strong>business is
                                    special</strong> and we are here to show it to the world.
                            </p>
                        </div>

                        <div className="col-lg-6"></div>

                    </div>
                </div>
            </section>

            <section className="professional">
                <div className="container text-center">
                    <h2 className="section-heading mb-5">Professional photo requirements</h2>
                    <div className="row">
                        <div className="text-start flex items-center justify-center flex-col col-lg-6 px-3 md:px-0">
                            <p className="paratext">We ensure to provide companies with the best talent and great hiring
                                experience. </p>
                            <p className="paratext">Please check the requirements to provide a professional and up-to-date
                                photo of yourself.</p>
                            <p className="paratext">This will help you build trust and secure better chances at getting
                                hired.</p>
                            <br />
                            <h2 className="mb-3">Tips:</h2>
                            <ul>
                                <li>Use clear background, preferably pure white</li>
                                <li>Make sure the photo is not blurred or low in resolution</li>
                                <li>Make sure the photo is at least 400x400 pixels</li>
                                <li>Max size: 2MB</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <img src="/assets/img/professional.jpg" className="img-fluid" alt="professional" />
                        </div>
                    </div>
                </div>
            </section>
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
                    .storymission .row > div {
                        width: 100%;
                        text-align: center;
                    }
                    .professional .contentsec {
                        text-align: center;
                    }
                    .professional .contentsec ul {
                        list-style: none;
                        padding: 0;
                    }
                    .professional .contentsec ul li {
                        margin-bottom: 10px;
                    }
                }
            `}</style>
        </>
    );
}

export default AboutUs;