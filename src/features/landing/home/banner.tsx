const HomeBanner = () => {
    return <>
        <section className="bannersection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bannerheading">
                            <h1>
                                <span className="gradient-text">AI-powered</span> talent recruiter for <br/> hiring
                                top-tier software engineers
                            </h1>
                            <h5>Hire deeply vetted developers globally, on-demand. <br/>
                                Scale your team and advance your software development.</h5>
                            <h6>Over 100 skilled developers available for immediate hire.</h6>
                            <div className="d-flex gap-3 flex-column align-items-center">
                                <a href="#" className="btnstyle1 py-2">Get Started</a>
                                <ul className="mb-0 ps-0">
                                    <li>
                                    2 Weeks No-Risk Trial
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/img/banner-shape.png" className="bannershape" alt="banner-shape"/>
        </section>
    </>
}

export default HomeBanner