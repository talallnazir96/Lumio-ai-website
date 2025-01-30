"use client";
import React from 'react';

const WeValue = () => {
    return (
        <>
            <section className="WeValue">
                <div className="container">
                    <div className="row flex flex-col md:flex-row justify-center items-center">
                        <div className="col-12 col-md-5 text-center md:text-left mb-4 mb-md-0">
                            <img
                                src="/assets/img/we-value.png"
                                className="img-fluid mx-auto md:mx-0"
                                alt="We value our clients and developers"
                            />
                        </div>
                        <div className="col-12 col-md-5 flex justify-center md:justify-start items-start flex-column text-center md:text-left">
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
