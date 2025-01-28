import Navbar from "@/features/landing/components/navbar"
import Footer from "@/features/landing/components/footer"

const HowItWorks = () => {
    return <>
    <Navbar />
        <section className="bannersection innerbanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bannerheading">
                            <h1>
                                How does LumioAI talent hiring work?
                            </h1>
                            <h5>We simplify sourcing and vetting of developers for you. <br/>
                                Let us know your requirements, we’ll find the perfect fit.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="stepsection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="steps">
                            <span>1</span>
                            <div className="icon">
                                <img src="/assets/img/step1.svg" alt="step1"/>
                            </div>
                            <a href="#" className="btnstyle2 greenish">Tell us what skills you need</a>
                            <span className="dash"></span>
                            <p className="paratext mb-0">With few <strong>simple steps</strong> you can let us know what
                                exactly you’re looking for. You can also schedule a demo with one of our experts.</p>
                        </div>
                        <div className="steps">
                            <span>2</span>
                            <div className="icon">
                                <img src="/assets/img/step2.svg" alt="step1"/>
                            </div>
                            <a href="#" className="btnstyle2 greenish">We’ll find you the perfect match</a>
                            <span className="dash"></span>
                            <p className="paratext mb-0">Our <strong>AI</strong> will evaluate your request, and we will
                                find you candidates who perfectly match your requirements. You will receive an email
                                from us.</p>
                        </div>
                        <div className="steps">
                            <span>3</span>
                            <div className="icon">
                                <img src="/assets/img/step3.svg" alt="step1"/>
                            </div>
                            <a href="#" className="btnstyle2 greenish">Meet your developers</a>
                            <span className="dash"></span>
                            <p className="paratext mb-0">After you select developers, you can start right away or have
                                a <strong>call</strong> with them to ensure they fit your business needs.</p>
                        </div>
                        <div className="steps">
                            <span>4</span>
                            <div className="icon">
                                <img src="/assets/img/step4.svg" alt="step1"/>
                            </div>
                            <a href="#" className="btnstyle2 greenish">Start your 2 week no-risk trial</a>
                            <span className="dash"></span>
                            <p className="paratext mb-0">If you’re happy with the developer you can start your <strong>free
                                trial</strong>. You can track the job progress on dedicated dashboard to easily monitor
                                everything.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="globesec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <img src="/assets/img/world-map.png" className="img-fluid" alt="worldmap"/>
                    </div>
                    <div className="col-lg-8 ps-5">
                        <h4 className="SectionHeading">
                            Many companies already trust LumioAI to hire developer teams on-demand
                        </h4>
                    </div>
                </div>
            </div>
        </section>

        <div className="container getStart">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center gap-4">
                    <a href="#" className="btnstyle1">Hire Developer</a>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default HowItWorks