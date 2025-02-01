"use client";
const WeHire = () => {
    return (
        <>
            <section className="whyhire flex items-center justify-center">
                <div className="container">
                    <h2 className="SectionHeading whitetext mb-5 ml-[50px]">
                        Why hire from LumioAI talent network?
                    </h2>
                    <div className="row justify-content-center align-items-center">
                        {/* Left Column - Content */}
                        <div className="col-12 col-lg-7 flex justify-center items-center flex-col whyhirecontent text-center text-lg-start">
                            <p className="paratext whitetext mb-5 md:ml-[50px]">
                                We have developed a robust and advanced AI vetting system to meticulously evaluate each candidate, scan through their resumes and generate detailed reports.
                            </p>
                            <p className="paratext whitetext mb-5 md:ml-[50px]">
                                Our tests are designed to get a comprehensive analysis of each developer’s unique skills. This way, we are able to match developers with businesses that require those unique abilities. The results are satisfactory on both sides.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-12 col-lg-5 text-center">
                            <img
                                src="/assets/img/infograph.svg"
                                className="mx-auto w-[400px] h-[400px]"
                                alt="infograph"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .whyhire {
                    // padding: 2rem 0;
                    height: 100vh;
                }
                
                .SectionHeading {
                    font-size: 2rem;
                    font-weight: bold;
                }

                .whitetext {
                    color: #fff;
                }

                .paratext {
                    font-size: 1rem;
                    color: #fff;
                }

                /* Mobile-specific adjustments */
                @media (max-width: 767px) {
                    .whyhire {
                        // padding: 1rem;
                        height: auto; /* Allow height to adjust based on content */
                    }

                    .SectionHeading {
                        font-size: 1.5rem; /* Slightly smaller heading for mobile */
                        margin-left: 0; /* Remove left margin for mobile */
                        text-align: center; /* Center heading on mobile */
                        width: 100%; /* Full width for mobile */
                    }

                    .paratext {
                        font-size: 0.9rem; /* Slightly smaller text for mobile */
                        margin-left: -10%; /* Remove left margin for mobile */
                        margin-right: -10%; /* Remove right margin for mobile */
                        // text-align: center; /* Center text on mobile */
                        position: relative;
                        left: 15%;
                    }

                    .whyhirecontent {
                        align-items: center !important; /* Center content on mobile */
                    }

                    img {
                        width: 100%; /* Make image responsive */
                        max-width: 300px; /* Limit image size on mobile */
                        height: auto; /* Maintain aspect ratio */
                    }
                }
            `}</style>
        </>
    );
}

export default WeHire;