import Navbar from "@/features/landing/components/navbar"
import Footer from "@/features/landing/components/footer"
import Link from "next/link"

const HowItWorksForDev = () => {
    return <>
        <Navbar />
        <section className="bannersection innerbanner pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bannerheading">
                            <h1>
                                How LumioAI works for developers
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="developerSteps">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="devstep">
                            <span>1</span>
                            <div className="text-start">
                                <div className="bgbox mb-2">Let us know about you</div>
                                <p className="paratext">Complete the registration process with your basic
                                    information.</p>
                            </div>
                        </div>
                        <div className="devstep">
                            <span>2</span>
                            <div className="text-start">
                                <div className="bgbox mb-2">Get verified by LumioAI</div>
                                <p className="paratext">When ready, you can begin LumioAI screening process. A 5 step
                                    evaluation system powered by AI.</p>
                            </div>
                        </div>
                        <div className="devstep">
                            <span>3</span>
                            <div className="text-start">
                                <div className="bgbox mb-2">Start working with the top companies</div>
                                <p className="paratext">Once verified, you are ready to go! We will match you with the
                                    best companies that are looking for exact skills that you possess. Building your
                                    career starts here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src="/assets/img/devstepimg.jpg" className="devstepimg img-fluid"
                            alt="devstepimg" />
                    </div>
                </div>
            </div>
        </section>

        <section className="benefitslumio text-center">
            <h2 className="bg-[var(--blue-color)] inline-block py-[10px] px-[10px] text-white rounded-[56px] mb-5">Benefits of working with LumioAI</h2>
            <div className="container">
                <div className="col-lg-10 m-auto">
                    <div className="row mt-5">
                        <div className="col-lg-6 mb-5 position-relative">
                            <img src="/assets/img/earn.png" alt="earn" />
                            <h3>Keep what you earn</h3>
                        </div>
                        <div className="col-lg-6 mb-5 position-relative">
                            <img src="/assets/img/paid.png" alt="paid" />
                            <h3>Get paid on time</h3>
                        </div>
                        <div className="col-lg-6 mb-5 position-relative">
                            <img src="/assets/img/benefits.png" alt="benefits" />
                            <h3>Get the benefits</h3>
                        </div>
                        <div className="col-lg-6 mb-5 position-relative">
                            <img src="/assets/img/skill.png" alt="skill" />
                            <h3>Upgrade your skills</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <p className="mb-4 paratext">Ready to Elevate Your Career?</p>
                    <Link href="/RegisterAsDeveloper/signup" className="btnstyle1 d-inline-block">Apply as developer</Link>
                </div>
            </div>
        </section>

        <section className="heartofLumio">
            <div className="container">
                <h2 className="SectionHeading mb-5">Developers are at the heart of LumioAI</h2>
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <p className="mb-4">We support our developers at every stage of their careers. We constantly
                            monitor their performances and feedback to help them get better job opportunities. We make
                            sure that their unique skills are matched accordingly.</p>
                        <p className="mb-5">At LumioAI developers can work with the best companies, upgrade their
                            resumes and build careers. With us, developers keep what they earn.</p>
                        <Link href="/RegisterAsDeveloper/signup" className="btnstyle1 d-inline-block">Apply as developer</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="tips">
            <div className="container">
                <h2 className="SectionHeading text-center mb-5">Here are some tips for developers to guide you on your
                    journey with LumioAI</h2>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-start mb-4">
                        <div className="tipscard">
                            <h3>Stay Curious and Keep Learning.</h3>
                            <ul className="mt-4">
                                <li className="paratext">The field of AI and software development is constantly
                                    evolving. Stay curious and invest time in continuous learning through online
                                    courses, certifications, and attending workshops.
                                </li>
                                <li className="paratext">Don’t be afraid to explore and experiment with new technologies
                                    and frameworks. This will broaden your skill set and keep you ahead of the curve.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-end mb-4">
                        <div className="tipscard">
                            <h3>Master the Basics: be so valuable they can’t replace you.</h3>
                            <ul className="mt-4">
                                <li className="paratext">Ensure you have a strong understanding of fundamental concepts
                                    in computer science, programming, and algorithms. A solid foundation is crucial for
                                    tackling complex problems.
                                </li>
                                <li className="paratext">Master core programming languages relevant to your field, such
                                    as Python for AI and machine learning, and languages like Java, C++, or JavaScript
                                    for software development.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-start mb-4">
                        <div className="tipscard">
                            <h3>Build a Portfolio.</h3>
                            <ul className="mt-4">
                                <li className="paratext">Create a portfolio showcasing your best projects. Include
                                    detailed descriptions, technologies used, and your contributions. This is essential
                                    for demonstrating your skills to potential employers.
                                </li>
                                <li className="paratext">Participate in open-source projects. It’s a great way to
                                    collaborate with other developers, learn from the community, and build your
                                    reputation.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-end mb-4">
                        <div className="tipscard">
                            <h3>Practice Problem-Solving.</h3>
                            <ul className="mt-4">
                                <li className="paratext">Regularly practice coding challenges. This sharpens your
                                    problem-solving skills and prepares you for technical interviews.
                                </li>
                                <li className="paratext">Participate in open-source projects. It’s a great way to
                                    collaborate with other developers, learn from the community, and build your
                                    reputation.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-start mb-4">
                        <div className="tipscard">
                            <h3>Collaborate and Network.</h3>
                            <ul className="mt-4">
                                <li className="paratext">Engage with developer communities on different platforms.
                                    Networking with peers can lead to new opportunities and insights.
                                </li>
                                <li className="paratext">Participate in industry conferences, hackathons, and local
                                    meetups. These events are great for learning, networking, and staying updated with
                                    industry trends.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-end mb-4">
                        <div className="tipscard">
                            <h3>Stay Updated with Industry Trends.</h3>
                            <ul className="mt-4">
                                <li className="paratext">Regularly read industry blogs, articles, and research papers to
                                    stay informed about the latest advancements in AI and software development.
                                </li>
                                <li className="paratext">Follow industry leaders and influencers on social media
                                    platforms like LinkedIn and Twitter. Their insights and updates can be very
                                    valuable.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-start mb-4">
                        <div className="tipscard">
                            <h3>Develop Soft Skills.</h3>
                            <ul className="mt-4">
                                <li className="paratext">Develop strong communication skills. Being able to clearly
                                    articulate your ideas and collaborate effectively with team members is crucial.
                                </li>
                                <li className="paratext">Hone your time management and organizational skills. Being able
                                    to manage your time efficiently will help you meet deadlines and balance multiple
                                    projects.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-end mb-4">
                        <div className="tipscard">
                            <h3>Maintain a Work-Life Balance.</h3>
                            <ul className="mt-4">
                                <li className="paratext">Ensure you maintain a healthy work-life balance. Taking breaks
                                    and engaging in hobbies outside of work helps you stay motivated and productive.
                                </li>
                                <li className="paratext">Prioritize your physical and mental health. Regular exercise, a
                                    balanced diet, and adequate sleep are essential for sustaining high performance.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center mt-5">
                        <Link href="/RegisterAsDeveloper/signup" className="btnstyle1 d-inline-block">Apply as developer</Link>
                    </div>

                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default HowItWorksForDev