"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#2D2D2D] text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={"/assets/logo.png"}
                        alt="LumioAI"
                        className="h-8"
                        width={130}
                        height={40}
                    />
                </Link>
                </div>

                {/* Navigation for large screens */}
                <nav className="hidden md:flex items-center space-x-6">
                    <div className="relative group">
                        <button className="flex items-center text-gray-300 hover:text-white no-underline">
                            Our services
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <a href="#" className="text-gray-300 hover:text-white no-underline">
                        Top-tier talent
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white no-underline">
                        How it works
                    </a>
                    <div className="relative group">
                        <button className="flex items-center text-gray-300 hover:text-white no-underline">
                            For developers
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <a href="#" className="text-gray-300 hover:text-white no-underline">
                        Blog
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white no-underline">
                        About us
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Auth Buttons for large screens */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get started</button>
                    <div className="relative group">
                        <button className="flex items-center text-gray-300 hover:text-white no-underline">
                            Login
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <a href="#" className="text-gray-300 hover:text-white no-underline">
                            Our services
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white no-underline">
                            Top-tier talent
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white no-underline">
                            How it works
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white no-underline">
                            For developers
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white no-underline">
                            Blog
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white no-underline">
                            About us
                        </a>
                        <div className="flex flex-col items-center space-y-2 mt-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get started</button>
                            <button className="flex items-center text-gray-300 hover:text-white no-underline">
                                Login
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;