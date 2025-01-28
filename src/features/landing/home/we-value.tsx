"use client"
import React from 'react';

const WeValue = () => {
    return (
        <>
            <section className="WeValue">
                <div className="container">
                    <div className="row flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-5 lg:mx-auto text-center text-lg-start mb-4 mb-lg-0">
                            <img src="/assets/img/we-value.png" className="img-fluid ml-8" alt="We value our clients and developers"/>
                        </div>
                        <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start align-items-start flex-column text-center text-lg-start whyhirecontent">
                            <h2 className="SectionHeading mb-4">We greatly value our clients and developers</h2>
                            <p className="paratext mb-4">
                                Our approach is to see things from the client’s perspective, their challenges, costs and needs.
                                We try to simplify what is complex, yet offer accessible pricing.
                            </p>
                            <p className="paratext mb-4">
                                We also provide developers with not just simple projects, but career building opportunities.
                                We connect them with prestigious companies that require skilled talent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .WeValue img {
                    max-width: 100%;
                    height: auto;
                }
                .WeValue .SectionHeading {
                    font-size: 2rem;
                }
                .WeValue .paratext {
                    font-size: 1rem;
                }
                @media (min-width: 992px) {
                    .WeValue .SectionHeading {
                        font-size: 2.5rem;
                    }
                    .WeValue .paratext {
                        font-size: 1.125rem;
                    }
                }
            `}</style>
        </>
    );
}

export default WeValue;