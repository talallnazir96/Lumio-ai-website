"use client"
import React from 'react';
import CountUp from 'react-countup';

const StataticsSection = () => {
    const counterStyle = {
        backgroundColor: 'inherit', // This makes the background color the same as the parent div
        padding: '5px', // Optional: adds some padding around the numbers
        borderRadius: '5px' // Optional: adds rounded corners to the background
    };

    return (
        <section className="statistics">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="states ps-0 d-flex flex-column flex-md-row">
                            <li className="mb-4 mb-md-0 ">
                                <CountUp end={30} duration={3} style={counterStyle} className='bg-gray-200' />+ clients <br /> connected
                            </li>
                            <span className="d-none d-md-block"></span>
                            <li className="mb-4 mb-md-0">
                                <CountUp end={90} duration={3} style={counterStyle} className='bg-gray-200' />+ developers <br /> hired
                            </li>
                            <span className="d-none d-md-block"></span>
                            <li className="mb-4 mb-md-0">
                                <CountUp end={500} duration={3} style={counterStyle} className='bg-gray-200' />+ hours of <br /> recruitment saved
                            </li>
                            <span className="d-none d-md-block"></span>
                            <li className="d-flex align-items-center gap-4">
                                100% current <br /> success rate <img src="/assets/img/graph.svg" alt="graph" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StataticsSection;