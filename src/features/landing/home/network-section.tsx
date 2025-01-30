import React from 'react';

const NetworkSection = () => {
    return (
        <>
            <section className="network-section">
                <div className="col-12 col-lg-12 position-relative d-flex align-items-center justify-content-center flex-column flex-md-row">
                    <img src="/assets/img/network.jpg" className="img-fluid" alt="network" />
                    <h2 className="whitetext text-center text-md-start mb-1 md:mb-5 text-[18px] md:text-[32px]">Currently our matching success rate is at 100%</h2>
                </div>
            </section>
        </>
    );
}

export default NetworkSection;