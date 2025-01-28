import Navbar from "@/features/landing/components/navbar"
import Footer from "@/features/landing/components/footer"
const TopTierTalent = () => {
    return <>
        <Navbar />
        <section className="bannersection innerbanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bannerheading w-70 m-auto">
                            <h1>
                                The LumioAI vetting process
                            </h1>
                            <h5>With a very rigorous and deep screening process we ensure to onboard only the top-tier
                                talent of AI and software engineering.</h5>
                            <h5>Those who survive our test are not only verified experts in their fields, but their
                                communication skills, performance and team working abilities are excellent.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="process">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="processItems">
                            <div className="d-flex align-items-center gap-4">
                                <div className="circle">
                                    Step 1
                                </div>
                                <h6 className="mb-0">Initial AI Vetting of Applicants</h6>
                            </div>
                            <div className="d-flex align-items-center gap-4 ms-4">
                                <img src="/assets/img/step-line.svg" className="step-line" alt="step-line" />
                                <img src="/assets/img/aplction.svg" className="processimg" alt="aplction" />
                                <p className="paratext mb-0 w-60">We receive a high volume of applications each month.
                                    Our AI evaluates them across various skills and prepares candidates for the next
                                    round of tests.</p>
                            </div>
                        </div>
                        <div className="processItems2">
                            <div className="d-flex align-items-center gap-4">
                                <div className="circle">
                                    Step 2
                                </div>
                                <h6 className="mb-0">Language, Communication Skills and Personality</h6>
                            </div>
                            <div className="d-flex align-items-center gap-4 ms-4">
                                <img src="/assets/img/step-line.svg" className="step-line" alt="step-line" />
                                <img src="/assets/img/cmnction.svg" className="processimg" alt="cmnction" />
                                <p className="paratext mb-0 w-60">Those who pass the initial evaluation will undergo
                                    assessments of English language proficiency and personality traits. This process
                                    includes both live screening and AI evaluation. We ensure that only passionate,
                                    committed, and professional candidates are onboarded.</p>
                            </div>
                        </div>
                        <div className="processItems3">
                            <div className="d-flex align-items-center gap-4">
                                <div className="circle">
                                    Step 3
                                </div>
                                <h6 className="mb-0">Deep AI Vetting</h6>
                            </div>
                            <div className="d-flex align-items-center gap-4 ms-4">
                                <img src="/assets/img/step-line.svg" className="step-line" alt="step-line" />
                                <img src="/assets/img/ai_vetting_3.svg" className="processimg" alt="ai_vetting_3" />
                                <p className="paratext mb-0 w-60">While some companies use AI simply as a filter, we
                                    developed more advanced and sophisticated engine to deeply vet developers. Our AI
                                    assesses problem solving skills on different levels, presents complex tasks and
                                    exercises and generates a detailed report.</p>
                            </div>
                        </div>
                        <div className="processItems4">
                            <div className="d-flex align-items-center gap-4">
                                <div className="circle">
                                    Step 4
                                </div>
                                <h6 className="mb-0">Live Interview</h6>
                            </div>
                            <div className="d-flex align-items-center gap-4 ms-4">
                                <img src="/assets/img/step-line.svg" className="step-line" alt="step-line" />
                                <img src="/assets/img/interview.svg" className="processimg" alt="interview" />
                                <p className="paratext mb-0 w-60">While some companies use AI simply as a filter, we
                                    have developed a more advanced and sophisticated engine to thoroughly vet
                                    developers. Our AI evaluates problem-solving skills at multiple levels, presents
                                    real-life scenarios and complex tasks, and generates a detailed report.</p>
                            </div>
                        </div>
                        <div className="processItems5">
                            <div className="d-flex align-items-center gap-4">
                                <div className="circle">
                                    Step 5
                                </div>
                                <h6 className="mb-0">Monitoring and Performance Tracking</h6>
                            </div>
                            <div className="d-flex align-items-center gap-5 ms-4">
                                <img src="/assets/img/step-line.svg" className="step-line" alt="step-line" />
                                <img src="/assets/img/monitor.svg" className="processimg" alt="monitor" />
                                <p className="paratext mb-0 w-60">We support and take care of our developers, actively
                                    monitoring their performance with clients and providing training in the latest AI
                                    technologies to keep their skills sharp and up-to-date.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center flex-column mt-5">
                            <div className="bottomarea">
                                <p className="mb-0">Top-tier AI and software developers certified by LumioAI ready to
                                    work.</p>
                                <img src="/assets/img/certified.svg" alt="certified" />
                            </div>
                            <a href="#" className="btnstyle1 mt-5 d-inline-block">Hire Developers</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default TopTierTalent