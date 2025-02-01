"use client"

import { useState, useEffect, type FC } from "react"
import Navbar from "@/features/landing/components/navbar"
import Footer from "@/features/landing/components/footer"

interface ProcessItemProps {
    step: number
    title: string
    image: string
    description: string
}

type TopTierTalentProps = {}

const TopTierTalent: FC<TopTierTalentProps> = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024) // Adjust breakpoint for tablet
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const processData = [
        {
            step: 1,
            title: "Initial AI Vetting of Applicants",
            image: "/assets/images/top-tier/ai.png",
            description: "We receive a high volume of applications each month. Our AI evaluates them across various skills and prepares candidates for the next round of tests.",
        },
        {
            step: 2,
            title: "Language, Communication Skills and Personality",
            image: "/assets/images/top-tier/language.png",
            description: "Those who pass the initial evaluation will undergo assessments of English language proficiency and personality traits. This process includes both live screening and AI evaluation. We ensure that only passionate, committed, and professional candidates are onboarded.",
        },
        {
            step: 3,
            title: "Deep AI Vetting",
            image: "/assets/images/top-tier/network.png",
            description: "While some companies use AI simply as a filter, we developed more advanced and sophisticated engine to deeply vet developers. Our AI assesses problem solving skills on different levels, presents complex tasks and exercises and generates a detailed report.",
        },
        {
            step: 4,
            title: "Live Interview",
            image: "/assets/images/top-tier/group.png",
            description: "While some companies use AI simply as a filter, we have developed a more advanced and sophisticated engine to thoroughly vet developers. Our AI evaluates problem-solving skills at multiple levels, presents real-life scenarios and complex tasks, and generates a detailed report.",
        },
        {
            step: 5,
            title: "Monitoring and Performance Tracking",
            image: "/assets/images/top-tier/perform.png",
            description: "We support and take care of our developers, actively monitoring their performance with clients and providing training in the latest AI technologies to keep their skills sharp and up-to-date.",
        },
    ]

    return (
        <>
            <Navbar />
            <section className="bannersection innerbanner py-5 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="bannerheading text-center">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">The LumioAI vetting process</h1>
                        <h5 className="text-base sm:text-lg mb-2">
                            With a very rigorous and deep screening process we ensure to onboard only the top-tier talent of AI and
                            software engineering.
                        </h5>
                        <h5 className="text-base sm:text-lg">
                            Those who survive our test are not only verified experts in their fields, but their communication skills,
                            performance and team working abilities are excellent.
                        </h5>
                    </div>
                </div>
            </section>
            <section className="process py-5 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {isMobile ? (
                            // Mobile layout: Display as paragraphs
                            <div className="flex flex-col gap-8">
                                {processData.map((item) => (
                                    <div key={item.step} className="flex flex-col gap-4">
                                        <h6 className="text-base font-bold">{item.step} {") "} {item.title}</h6>
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={item.image || "/placeholder.svg"}
                                                className="w-[200px] h-[200px] object-contain rounded-lg"
                                                alt={`step-${item.step}`}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Desktop layout: Display as step-by-step
                            <>
                                {processData.map((item) => (
                                    <div key={item.step} className="processItems mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="circle">Step {item.step}</div>
                                            <h6 className="mb-0">{item.title}</h6>
                                        </div>
                                        <div className="flex items-center gap-4 ml-4">
                                            <img src="/assets/img/step-line.svg" className="step-line" alt="step-line" />
                                            <img src={item.image || "/placeholder.svg"} className="processimg" alt={`step-${item.step}`} />
                                            <p className="paratext mb-0 w-60 md:w-full">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        <div className="flex flex-col items-center justify-center mt-8">
                            <div className="bottomarea text-center">
                                <p className="mb-2 text-sm sm:text-base">
                                    Top-tier AI and software developers certified by LumioAI ready to work.
                                </p>
                                <img src="/assets/img/certified.svg" alt="certified" className="mx-auto w-24 h-24 sm:w-32 sm:h-32" />
                            </div>
                            <a
                                href="#"
                                className="btnstyle1 mt-5 inline-block px-6 py-3 bg-blue-600 text-white text-sm sm:text-base rounded-full hover:bg-blue-700 transition-colors"
                            >
                                Hire Developers
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TopTierTalent