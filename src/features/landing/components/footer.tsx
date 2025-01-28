import React from "react";
import Link from "next/link";

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <h2>
                            <strong>LumioAI</strong>
                        </h2>
                        <img
                            src="/assets/img/microsoft.png"
                            className="mt-4"
                            width="125px"
                            alt="microsoft"
                        />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <h4>AI solutions</h4>
                        <ul>
                            <li>
                                <a href="#">Generative AI</a>
                            </li>
                            <li>
                                <a href="#">LLM training</a>
                            </li>
                            <li>
                                <a href="#">AI &amp; ML</a>
                            </li>
                            <li>
                                <a href="#">Custom services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <h4>On-demand talent</h4>
                        <ul>
                            <li>
                                <a href="#">AI engineers</a>
                            </li>
                            <li>
                                <a href="#">Software engineers</a>
                            </li>
                            <li>
                                <a href="#">Teams of developers</a>
                            </li>
                            <li>
                                <a href="#">Cloud services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <h4>For Developers</h4>
                        <ul>
                            <li>
                                <a href="#">Apply for jobs</a>
                            </li>
                            <li>
                                <a href="#">Tips for developers</a>
                            </li>
                            <li>
                                <a href="#">LumioAI certified</a>
                            </li>
                            <li>
                                <a href="#">Build career</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Jobs</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <h4>Connect</h4>
                        <ul>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Help center</a>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row align-items-center pb-3">
                    <div className="col-lg-4">
                        <p className="paratext whitetext mb-0">© 2024 LumioAI</p>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-end align-items-center gap-5">
                        <ul className="ps-0 d-flex gap-3 mb-0">
                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                            <li>
                                <a href="#">Terms &amp; conditions</a>
                            </li>
                            <li>
                                <a href="#">Language policy</a>
                            </li>
                            <li>
                                <a href="#">Cookie policy</a>
                            </li>
                            <li>
                                <a href="#">Privacy policy</a>
                            </li>
                        </ul>
                        <div className="socialmedia">
                            <a href="#">
                                <img src="/assets/img/twitter-x.svg" alt="twitter-x"/>
                            </a>
                            <a href="#">
                                <img src="/assets/img/linkedin.svg" alt="Linkedin"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
