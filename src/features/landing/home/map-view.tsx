"use client"
import { useEffect } from 'react';
import './style.css'

const MapView = () => {
    useEffect(() => {
        const handleScroll = () => {
            const persons = document.querySelectorAll('.person');
            persons.forEach(person => {
                if (person.getBoundingClientRect().top < window.innerHeight && person.getBoundingClientRect().bottom > 0) {
                    person.classList.add('pop-up-down');
                } else {
                    person.classList.remove('pop-up-down');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="col-12 text-center mt-12">
                <h2 className="section-heading gradient-text d-inline-block">
                    There are no limits for LumioAI
                </h2>
            </div>
            <section className="mapview">
                <div className="container">
                    <div className="row">
                        <div className="col-12 position-relative">
                            <img src="/assets/img/map.svg" className="mapbg img-fluid" alt="map" />
                            <ul className="ps-0 mb-0">
                                <li className="person-locate1">
                                    <img src="/assets/img/person1.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate2">
                                    <img src="/assets/img/person2.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate3">
                                    <img src="/assets/img/person3.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate4">
                                    <img src="/assets/img/person4.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate5">
                                    <img src="/assets/img/person5.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate6">
                                    <img src="/assets/img/person6.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate7">
                                    <img src="/assets/img/person7.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate8">
                                    <img src="/assets/img/person1.png" className="person" alt="person-locate" />
                                </li>
                                <li className="person-locate9">
                                    <img src="/assets/img/person2.png" className="person" alt="person-locate" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8 col-md-10 col-sm-12 m-auto text-center">
                            <h5>
                                Hire <strong>remotely</strong> from around the world. We make sure that your developers
                                can work <span>according</span> to your <strong>time zone</strong>
                            </h5>
                            <a href="#" className="btnstyle1 mt-4 d-inline-block">
                                Hire Developers
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapView;