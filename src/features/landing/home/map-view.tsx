"use client"
import { useEffect } from 'react';
import './style.css'
import Link from 'next/link';

const MapView = () => {
    useEffect(() => {
        const persons = document.querySelectorAll('.person');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    persons.forEach((person, i) => {
                        setTimeout(() => {
                            person.classList.add('pop-up');
                            setTimeout(() => {
                                person.classList.remove('pop-up');
                                person.classList.add('static');
                            }, 500); // Duration of the pop-up animation
                        }, i * 200); // Stagger the pop-up effect
                    });
                    observer.unobserve(entry.target); // Unobserve after animation
                }
            });
        }, {
            threshold: 0.5, // Trigger when 50% of the element is visible
        });

        persons.forEach(person => {
            observer.observe(person);
        });

        // Clean up the observer on component unmount
        return () => {
            persons.forEach(person => {
                observer.unobserve(person);
            });
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
                                can work <span className='font-bold'>according</span> to your <strong>time zone</strong>
                            </h5>
                            <Link href="/ClientDeveloperSignin/ClientSignin" className="btnstyle1 mt-4 d-inline-block">
                                Hire Developers
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapView;