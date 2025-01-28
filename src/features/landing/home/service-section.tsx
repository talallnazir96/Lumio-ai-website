const ServiceSection = () => {
    return <>
        <section className="ServiceSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/img/candidates.png" alt="candidates icon"/>
                            <p className="title mb-0">The New Way</p>
                        </div>
                        <p className="paratext mt-2">Going through 100+ candidates to evaluate them is a thing of the
                            past.</p>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/img/profit.png" alt="profit icon"/>
                            <p className="title mb-0">Cut Down Costs</p>
                        </div>
                        <p className="paratext mt-2">You don’t have to deal with expensive staffing agencies
                            anymore.</p>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/img/compliance.png" alt="compliance icon"/>
                            <p className="title mb-0">Simplify</p>
                        </div>
                        <p className="paratext mt-2">No need to worry about global compliance, benefits and payroll.</p>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="d-flex align-items-center gap-4">
                            <img src="/assets/img/time.png" alt="time icon"/>
                            <p className="title mb-0">Save Time</p>
                        </div>
                        <p className="paratext mt-2">Cut down talent recruitment time from 40+ days to just 48
                            hours.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ServiceSection