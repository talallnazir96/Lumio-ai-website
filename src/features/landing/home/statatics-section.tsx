"use client";
import React from 'react';
import CountUp from 'react-countup';

const StataticsSection = () => {
    const counterStyle = {
        backgroundColor: 'inherit', // This makes the background color the same as the parent div
        padding: '1px', // Optional: adds some padding around the numbers
        borderRadius: '5px' // Optional: adds rounded corners to the background
    };

    return (
        <section className="statistics">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="states ps-0 d-flex flex-column flex-md-row">
                            <li className="mb-4 mb-md-0 text-center">
                                <CountUp end={30} duration={3} style={counterStyle} className='bg-gray-200 font-bold md:font-normal' /> <br /> clients connected
                            </li>
                            <span className="d-none d-md-block"></span>
                            <li className="mb-4 mb-md-0 text-center">
                                <CountUp end={90} duration={3} style={counterStyle} className='bg-gray-200 font-bold md:font-normal' /> <br /> developers hired
                            </li>
                            <span className="d-none d-md-block"></span>
                            <li className="mb-4 mb-md-0 text-center">
                                <CountUp end={500} duration={3} style={counterStyle} className='bg-gray-200 font-bold md:font-normal' /> <br /> hours of recruitment saved
                            </li>
                            <span className="d-none d-md-block"></span>
                            <li className="d-flex align-items-center gap-4 text-center">
                                100% <br /> current success rate <img src="/assets/img/graph.svg" alt="graph" className="graph-img" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .statistics {
                    padding: 2rem 0;
                }
                
                .states {
                    list-style: none;
                    padding-left: 0;
                }

                @media (max-width: 767px) {
                    /* Mobile-specific styles */
                    .states {
                        flex-direction: column; /* Stack items vertically */
                        align-items: center; /* Center items horizontally */
                        gap: 1.5rem; /* Add spacing between stacked items */
                    }

                    .states li {
                        width: 100%; /* Ensure full width for mobile */
                        display: flex;
                        flex-direction: column;
                        align-items: center; /* Center content horizontally */
                        justify-content: center; /* Center content vertically */
                    }

                    .graph-img {
                        display: none; /* Hide the graph image on mobile */
                    }
                }
            `}</style>
        </section>
    )
}

export default StataticsSection;