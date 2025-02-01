"use client";
import React from 'react';

const ServiceSection = () => {
    return (
        <section className="ServiceSection -ml-[50px] md:-ml-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/img/candidates.png" alt="candidates icon" />
                            <p className="title mb-0">The New Way</p>
                        </div>
                        <p className="paratext mt-2">Going through 100+ candidates to evaluate them is a thing of the past.</p>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/images/home/cut-down.png" alt="profit icon" />
                            <p className="title mb-0">Cut Down Costs</p>
                        </div>
                        <p className="paratext mt-2">You don’t have to deal with expensive staffing agencies anymore.</p>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/images/home/simplify.png" alt="compliance icon" />
                            <p className="title mb-0">Simplify</p>
                        </div>
                        <p className="paratext mt-2">No need to worry about global compliance, benefits and payroll.</p>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/images/home/save-time.png" alt="time icon" />
                            <p className="title mb-0">Save Time</p>
                        </div>
                        <p className="paratext mt-2">Cut down talent recruitment time from 40+ days to just 48 hours.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .ServiceSection {
                    padding: 2rem 0;
                }

                .title {
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .paratext {
                    font-size: 1rem;
                    color: #555;
                }

                @media (max-width: 767px) {
                    /* Mobile styles */
                    .container {
                        padding: 0 1rem;
                    }

                    .row {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 1rem;
                    }

                    .col-lg-6 {
                        flex: 0 0 calc(50% - 0.5rem); /* Two columns with gap */
                        max-width: calc(50% - 0.5rem); /* Two columns with gap */
                        text-align: center; /* Center text on mobile */
                    }

                    .d-flex {
                        display: flex;
                        flex-direction: column; /* Stack icon and text vertically */
                        align-items: center;
                        // gap: 0.5rem; /* Reduce gap between icon and text */
                    }

                    .title {
                        font-size: 1rem;
                        text-align: center; /* Center title text */
                        width: 100px;
                        }
                        
                        .paratext {
                            font-size: 0.875rem;
                            text-align: left; /* Center paragraph text */
                            // margin-top: 0.5rem; /* Adjust spacing */
                            width: 100px;
                    }
                }

                @media (min-width: 768px) {
                    /* Tablet and Desktop styles */
                    .col-lg-6 {
                        flex: 0 0 50%;
                        max-width: 50%;
                    }

                    .d-flex {
                        flex-direction: row;
                        align-items: center;
                    }

                    .gap-4 {
                        gap: 1.5rem;
                    }

                    .title {
                        font-size: 1.5rem;
                    }

                    .paratext {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default ServiceSection;