const WeHire = () => {
    return (
        <>
            <section className="whyhire">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        {/* Left Column - Content */}
                        <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column whyhirecontent text-center text-lg-start">
                            <h2 className="SectionHeading whitetext mb-5">
                                Why hire from LumioAI talent network?
                            </h2>
                            <p className="paratext whitetext mb-5">
                                We have developed a robust and advanced AI vetting system to meticulously evaluate each candidate, scan through their resumes and generate detailed reports.
                            </p>
                            <p className="paratext whitetext mb-5">
                                Our tests are designed to get a comprehensive analysis of each developer’s unique skills. This way, we are able to match developers with businesses that require those unique abilities. The results are satisfactory on both sides.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-12 col-lg-5 text-center">
                            <img
                                src="/assets/img/infograph.svg"
                                className="img-fluid d-block mx-auto w-100"
                                alt="infograph"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WeHire;
