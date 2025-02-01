import Link from 'next/link';
import React from 'react';

const HireManager = () => {
    return (
        <>
            <section className="HireManage py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                            <img src="/assets/img/hire-team.png" className="img-fluid mx-auto lg:mx-0" alt="hire-team" />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl font-bold mb-4">Hire and manage amazing teams</h2>
                            <p className="text-base mb-6">
                                Build your dream team entirely with LumioAI, or augment your existing
                                team. Our developers possess exceptional communication skills and strong teamwork
                                abilities.
                            </p>
                            <Link href="/RegisterAsDeveloper/signup" className="btnstyle1 bg-blue-500 text-white py-2 w-36 mx-auto lg:mx-0 lg:ml-auto lg:mr-0 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HireManager;