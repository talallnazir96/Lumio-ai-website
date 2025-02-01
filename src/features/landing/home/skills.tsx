"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Skills = () => {

    return (
        <>
            <section className="skills flex items-center justify-center flex-col">
                <div className="container mt-10 mb-10">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading mb-5">More than <strong>100</strong> skills available</h2>
                            <hr />
                            <div className="flex items-center justify-center flex-col overflow-hidden">
                                <div className="icon-container flex gap-10 animate-infinite-scroll">
                                    <img src="/assets/images/home/skill/java.png" className="img-fluid" alt="java" />
                                    <img src="/assets/images/home/skill/python.png" className="img-fluid" alt="python" />
                                    <img src="/assets/images/home/skill/html.png" className="img-fluid" alt="HTML" />
                                    <img src="/assets/images/home/skill/ts.png" className="img-fluid" alt="typescript" />
                                    <img src="/assets/images/home/skill/react.png" className="img-fluid" alt="Native" />
                                    <img src="/assets/images/home/skill/php.png" className="img-fluid" alt="Php" />
                                    <img src="/assets/images/home/skill/angular.png" className="img-fluid" alt="Angular" />
                                    {/* Repeat the icons to create a continuous scroll effect */}
                                    <img src="/assets/images/home/skill/java.png" className="img-fluid" alt="java" />
                                    <img src="/assets/images/home/skill/python.png" className="img-fluid" alt="python" />
                                    <img src="/assets/images/home/skill/html.png" className="img-fluid" alt="HTML" />
                                    <img src="/assets/images/home/skill/ts.png" className="img-fluid" alt="typescript" />
                                    <img src="/assets/images/home/skill/react.png" className="img-fluid" alt="Native" />
                                    <img src="/assets/images/home/skill/php.png" className="img-fluid" alt="Php" />
                                    <img src="/assets/images/home/skill/angular.png" className="img-fluid" alt="Angular" />
                                </div>
                                <div className="icon-container flex gap-10 animate-infinite-scroll-reverse mt-5">
                                    <img src="/assets/images/home/skill/java.png" className="img-fluid" alt="java" />
                                    <img src="/assets/images/home/skill/python.png" className="img-fluid" alt="python" />
                                    <img src="/assets/images/home/skill/html.png" className="img-fluid" alt="HTML" />
                                    <img src="/assets/images/home/skill/ts.png" className="img-fluid" alt="typescript" />
                                    <img src="/assets/images/home/skill/react.png" className="img-fluid" alt="Native" />
                                    <img src="/assets/images/home/skill/php.png" className="img-fluid" alt="Php" />
                                    <img src="/assets/images/home/skill/angular.png" className="img-fluid" alt="Angular" />
                                    {/* Repeat the icons to create a continuous scroll effect */}
                                    <img src="/assets/images/home/skill/java.png" className="img-fluid" alt="java" />
                                    <img src="/assets/images/home/skill/python.png" className="img-fluid" alt="python" />
                                    <img src="/assets/images/home/skill/html.png" className="img-fluid" alt="HTML" />
                                    <img src="/assets/images/home/skill/ts.png" className="img-fluid" alt="typescript" />
                                    <img src="/assets/images/home/skill/react.png" className="img-fluid" alt="Native" />
                                    <img src="/assets/images/home/skill/php.png" className="img-fluid" alt="Php" />
                                    <img src="/assets/images/home/skill/angular.png" className="img-fluid" alt="Angular" />
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .icon-container img {
                    width: 75px; /* Adjust width as needed */
                    height: 75px; /* Ensure height is consistent */
                    object-fit: contain; /* Maintain aspect ratio */
                }

                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }

                @keyframes infinite-scroll-reverse {
                    from { transform: translateX(0); }
                    to { transform: translateX(100%); }
                }

                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }

                .animate-infinite-scroll-reverse {
                    animation: infinite-scroll-reverse 40s linear infinite;
                }
            `}</style>
        </>
    );
};

export default Skills;