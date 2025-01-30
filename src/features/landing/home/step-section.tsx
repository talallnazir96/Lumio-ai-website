"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StepSection: React.FC = () => {
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent): void => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const stepVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
            },
        }),
    };

    return (
        <section className="stepssec">
            <div className="container outerbg">
                <div className="row">
                    <div className="col-lg-12">
                        <motion.div
                            className="topcard text-center ai-hover"
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;

                                card.style.background = `
                                    radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.2), transparent 60%), 
                                    linear-gradient(90deg, #6a11cb, #8e9cf7)`;
                            }}
                            onMouseLeave={(e) => {
                                const card = e.currentTarget;
                                card.style.background = "linear-gradient(90deg, #6a11cb, #8e9cf7)";
                            }}
                        >
                            <div className="flex items-center justify-center relative">
                                <h2 className="SectionHeading mb-0">
                                    Our AI handles the <br /> complex work for you
                                </h2>
                                <img src="/assets/ai-tab.png" alt="Matching icon" className="absolute right-20 h-20 w-20 hidden md:block" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-12 mt-5">
                        <div className="stepsParent row">
                            <motion.div
                                className="col step"
                                custom={0}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={stepVariants}
                            >
                                <div className="step-header">
                                    <span className="number">1</span>
                                    <div className="stepicon">
                                        <img src="/assets/img/sourcing.svg" alt="Sourcing icon" />
                                        <p className="title mb-0">Sourcing</p>
                                    </div>
                                    <img src="/assets/img/arrow.png" className="arrow" alt="arrow" />
                                </div>
                                <p className="paratext mt-4 text-center md:text-center lg:text-left">
                                    Source talent faster and more easily from our rich network
                                </p>
                            </motion.div>

                            <motion.div
                                className="col step "
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={stepVariants}
                            >
                                <div className="flex items-center justify-center flex-col">
                                    <div className="step-header">
                                        <span className="number">3</span>
                                        <div className="stepicon">
                                            <img src="/assets/img/hiring.svg" alt="Hiring icon" />
                                            <p className="title mb-0">Hiring</p>
                                        </div>
                                        <img src="/assets/img/arrow.png" className="arrow" alt="arrow" />
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        <p className="paratext mt-4 text-center md:text-center lg:text-left">
                                            Hire world-class, deeply vetted developers—fast
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="col step"
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={stepVariants}
                            >
                                <div className="step-header">
                                    <span className="number">3</span>
                                    <div className="stepicon">
                                        <img src="/assets/img/hiring.svg" alt="Hiring icon" />
                                        <p className="title mb-0">Hiring</p>
                                    </div>
                                </div>
                                <p className="paratext mt-4 text-center md:text-center lg:text-left">
                                    Hire world-class, deeply vetted developers—fast
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .topcard {
                    background: linear-gradient(90deg, #6a11cb, #8e9cf7);
                    color: white;
                    padding: 30px 20px;
                    border-radius: 20px;
                    transition: background 0.3s ease, transform 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .topcard:hover {
                    transform: scale(1.02);
                }

                .SectionHeading {
                    font-size: 2rem;
                    font-weight: bold;
                    line-height: 1.4;
                }

                .ai-hover {
                    position: relative;
                }   

                @media (max-width: 768px) {
                    .SectionHeading {
                        font-size: 1.4rem;
                    }

                    .stepsParent {
                        flex-direction: column;
                    }

                    .arrow {
                        display: none;
                    }

                    .step {
                        margin: 15px 0;
                    }
                }

                .stepssec {
                    position: relative;
                    overflow: hidden;
                }

                .step {
                    background: #f9f9f9;
                    padding: 10px;
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    margin: 15px;
                    text-align: center;
                }

                .step:hover {
                    transform: scale(1.05);
                    transition: transform 0.3s ease-in-out;
                }

                .stepsParent {
                    display: flex;
                    justify-content: space-around;
                }

                .number {
                    width: 30px;
                    height: 30px;
                    background: var(--black-color);
                    border-radius: 50%;
                    color: #fff;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                    margin-right: 5px;
                }

                .arrow {
                    width: 70px;
                    margin: 0 33px;
                }
                
                .paratext {
                    color: #6a6a6a;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .step-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .stepicon {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    border: 1px solid;
                    border-radius: 10px 60px 60px 10px;
                    padding-right: 5px;
                    width: 180px;
                }

                .stepicon img{
                    width: 60px;
                } 
            `}</style>
        </section>
    );
};

export default StepSection;