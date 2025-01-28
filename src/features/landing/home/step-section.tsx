"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StepSection: React.FC = () => {
    // Define mouse position state
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    // Handle mouse movement and update position
    const handleMouseMove = (event: MouseEvent): void => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        // Add event listener for mouse movement
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            // Cleanup event listener on component unmount
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Animation variants for steps
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

    // Define step details
    const steps: { title: string; description: string; icon: string }[] = [
        {
            title: "Sourcing",
            description: "Source talent faster and more easily from our rich network",
            icon: "/assets/img/sourcing.svg",
        },
        {
            title: "Matching",
            description: "Get matched with the exact skills you need",
            icon: "/assets/img/matching.svg",
        },
        {
            title: "Hiring",
            description: "Hire world-class, deeply vetted developers—fast",
            icon: "/assets/img/hiring.svg",
        },
    ];

    return (
        <section className="stepssec">
            <div className="container outerbg">
                <div className="row">
                    {/* AI Section with Smog-Like Hover Effect */}
                    <div className="col-lg-12">
                        <motion.div
                            className="topcard text-center ai-hover"
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;

                                // Smog effect using the same gradient colors
                                card.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.2), transparent 60%), 
                linear-gradient(90deg, #6a11cb, #8e9cf7)`;
                            }}
                            onMouseLeave={(e) => {
                                const card = e.currentTarget;
                                // Reset to the default gradient
                                card.style.background = "linear-gradient(90deg, #6a11cb, #8e9cf7)";
                            }}
                        >
                            <h2 className="SectionHeading mb-0">
                                Our AI handles the <br /> complex work for you
                            </h2>
                        </motion.div>
                    </div>


                    {/* Steps Section with Margins */}
                    <div className="col-lg-12 mt-5">
                        <div className="stepsParent row">
                            {steps.map((step, index) => (
                                <motion.div
                                    className="step col"
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={stepVariants}
                                    style={{ margin: "0 15px" }}
                                >
                                    <span className="number">{index + 1}</span>
                                    <div className="d-flex align-items-center">
                                        <div className="stepicon">
                                            <img src={step.icon} alt={`${step.title} icon`} />
                                            <p className="title mb-0 pr-14">{step.title}</p>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <img
                                                src="/assets/img/arrow.png"
                                                className="arrow"
                                                alt="arrow"
                                            />
                                        )}
                                    </div>
                                    <p className="paratext mt-4">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles for Effects */}
            <style jsx>{`
            .topcard {
        background: linear-gradient(90deg, #6a11cb, #8e9cf7); /* Default gradient */
        color: white;
        padding: 30px 20px;
        border-radius: 20px;
        transition: background 0.3s ease, transform 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .topcard:hover {
        transform: scale(1.02); /* Subtle zoom effect */
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
    }

            .stepssec {
                    position: relative;
                    overflow: hidden;
                }

                .topcard {
                    background: linear-gradient(90deg, #6a11cb, #2575fc);
                    background-size: 400% 400%;
                    color: white;
                    padding: 30px 20px;
                    border-radius: 20px;
                    transition: all 0.5s ease;
                }

                .ai-hover:hover {
                    background-position: 200% center;
                }

                .step {
                    background: #f9f9f9;
                    padding: 20px;
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
                    font-size: 24px;
                    font-weight: bold;
                    color: #2575fc;
                }

                .arrow {
                    margin-left: 10px;
                }

                .paratext {
                    color: #6a6a6a;
                    font-size: 14px;
                    line-height: 1.6;
                }
            `}</style>
        </section>
    );
};

export default StepSection;
