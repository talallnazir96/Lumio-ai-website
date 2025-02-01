import Link from "next/link"

const BookDemo = () => {
    return <>
        <section className="bookdemo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="/assets/img/bookdemo.png" className="img-fluid" alt="bookdemo" />
                    </div>
                    <div className="col-lg-6 ps-5 d-flex justify-content-center align-items-start flex-column">
                        <h2 className="SectionHeading mb-4">Tell us your needs, we’ll take care of the rest</h2>
                        <p className="paratext mb-4">On-demand, thoroughly vetted engineers
                            at <strong>accessible</strong> prices to reduce your expenses and help you
                            stay <strong>competitive.</strong></p>
                        <p className="paratext mb-4">With a talent pool offering over <strong>100 skills,</strong> your
                            company will always have what it takes to stay ahead of the curve.</p>
                        <p className="paratext mb-4">Hire with a two-week, <strong>no-risk trial.</strong> If you're not
                            satisfied with the developer for any reason, you pay 0. No credit card required.</p>
                        <p className="paratext mb-4"><strong>Payroll,
                            taxes,</strong> global <strong>compliance</strong> and <strong>benefits</strong> - all
                            handled by us, you don’t need to do anything.</p>
                        <p className="paratext mb-4">We are on the forefront of the <strong>latest
                            technologies</strong> in <strong>AI</strong> to offer you the best tools. We know how you
                            can benefit from them.</p>
                        <div className="mx-auto text-center">
                            <Link href="#" className="btnstyle1">Book a Demo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default BookDemo