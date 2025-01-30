"use client";
const WhatExpected = () => {
    return (
        <>
            <section className="whatExpacted">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 m-auto text-center">
                            <h2 className="SectionHeading text-center mb-5"><span>What to</span> expect</h2>
                            <div className="d-flex align-center justify-content-center flex-wrap gap-10 mt-4">
                                <div className="d-flex align-items-center expact">
                                    <img src="/assets/img/objective.svg" alt="objective" /> Objective and fair hiring
                                </div>
                                <div className="d-flex align-items-center expact">
                                    <img src="/assets/img/handling.svg" alt="handling" /> Handling of all the complexities
                                </div>
                                <div className="d-flex align-items-center expact">
                                    <img src="/assets/img/custom.svg" alt="custom" /> Custom fit
                                </div>
                                <div className="d-flex align-items-center expact">
                                    <img src="/assets/img/expert.svg" alt="expert" /> Expert support
                                </div>
                                <div className="d-flex align-items-center expact">
                                    <img src="/assets/img/speed.svg" alt="SPEED" /> Efficiency and speed
                                </div>
                                <div className="d-flex align-items-center expact">
                                    <img src="/assets/img/Scalability.svg" alt="Scalability" /> Scalability
                                </div>
                                <div className="d-flex align-items-center expact">
                                    <img src="/assets/img/quality.svg" alt="quality" /> Top quality
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .whatExpacted {
                    padding: 2rem 0;
                }
                .SectionHeading {
                    font-size: 2rem;
                    font-weight: bold;
                }
                .expact {
                    display: flex;
                    align-items: center;
                    margin: 0.5rem;
                    font-size: 1.125rem;
                }
                .expact img {
                    margin-right: 0.5rem;
                }
                @media (max-width: 767px) {
                    /* Mobile styles */
                    .d-flex {
                        flex-direction: column;
                    }
                    .expact {
                        justify-content: center;
                        text-align: center;
                    }
                    .expact img {
                        margin-right: 0;
                        margin-bottom: 0.5rem;
                    }
                }
                @media (min-width: 768px) {
                    /* Tablet and Desktop styles */
                    .d-flex {
                        flex-direction: row;
                    }
                }
            `}</style>
        </>
    );
}

export default WhatExpected;