const HomeBanner = () => {
    return (
        <>
            <style>
                {`
                    /* Apply animation to all elements with .animate-from-top class */
                    @keyframes slideInFromTop {
                        0% {
                            opacity: 0;
                            transform: translateY(-30px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-from-top {
                        animation: slideInFromTop 1s ease-out forwards;
                    }

                    /* Stagger the animations */
                    .animate-from-top:nth-child(1) {
                        animation-delay: 0s;
                    }

                    .animate-from-top:nth-child(2) {
                        animation-delay: 0.3s;
                    }

                    .animate-from-top:nth-child(3) {
                        animation-delay: 0.6s;
                    }

                    .animate-from-top:nth-child(4) {
                        animation-delay: 0.9s;
                    }

                    .animate-from-top:nth-child(5) {
                        animation-delay: 1.2s;
                    }

                    .bannerheading h1, .bannerheading h5, .bannerheading h6, .bannerheading .btnstyle1 {
                        opacity: 0; /* Initial state before animation */
                    }

                    /* Optional: Customize the button */
                    .btnstyle1 {
                        background-color: #2d33e3; /* Example green background */
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        text-decoration: none;
                        font-size: 16px;
                        transition: background-color 0.3s;
                    }

                    .btnstyle1:hover {
                        background-color: #45a049; /* Darker green on hover */
                    }
                `}
            </style>

            <section className="bannersection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bannerheading mx-auto flex flex-col justify-center gap-10 relative z-10">
                                <h1 className="animate-from-top lg:text-[60px]  sm:text-[30px] lg:w-full">
                                    <span className="gradient-text">AI-powered</span> talent recruiter for <br /> hiring
                                    top-tier software engineers
                                </h1>
                                <h5 className="animate-from-top">
                                    Hire deeply vetted developers globally, on-demand. <br />
                                    Scale your team and advance your software development.
                                </h5>
                                <h6 className="animate-from-top">Over 100 skilled developers available for immediate hire.</h6>
                                <div className="d-flex gap-3 flex-column align-items-center">
                                    <a href="#" className="btnstyle1 py-2 animate-from-top ">Get Started</a>
                                    <ul className="mb-0 ps-0 animate-from-top">
                                        <li>2 Weeks No-Risk Trial</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/img/banner-shape.png" className="bannershape" alt="banner-shape" />
            </section>
        </>
    );
}

export default HomeBanner;
