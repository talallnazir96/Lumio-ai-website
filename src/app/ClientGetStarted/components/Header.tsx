"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const loginItems = [
        { href: "/ClientDeveloperSignin/ClientSignin", label: "As a Client" },
        { href: "/ClientDeveloperSignin/DeveloperSignin", label: "As a Developer" }
    ];
    const router = useRouter()
    return (
        <header className="bg-[#2D2D2D] text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2 no-underline text-white">
                        <div className='flex items-center justify-center'>
                            <img
                                src={"/logo.png"}
                                alt="LumioAI"
                                className="h-12 w-12"
                            />
                            <h1 className='text-2xl'>LumioAi</h1>
                        </div>
                    </Link>
                </div>

                {/* Navigation for large screens */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <div className="relative group">
                        <button className="flex items-center text-gray-300 hover:text-white no-underline">
                            Our services
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    <Link href="/top-tier-talent" className="text-gray-300 hover:text-white no-underline">
                        Top-tier talent
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white no-underline">
                        How it works
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white no-underline">
                        For developers
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white no-underline">
                        Blog
                    </Link>
                    <Link href="/about-us" className="text-gray-300 hover:text-white no-underline">
                        About us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button className="text-gray-300 hover:text-white" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Auth Buttons for large screens */}
                <div className="hidden lg:flex items-center space-x-4">
                    <button onClick={() => router.push("/ClientGetStarted/GetStarted")} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 btnstyle1">Get started</button>
                    <div className="relative group">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-white hover:text-gray-300 flex items-center">
                                Login <ChevronDown className="ml-1" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-black border-gray-800">
                                {loginItems.map((item, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        className="text-white hover:bg-gray-800 focus:bg-gray-800"
                                    >
                                        <Link href={item.href} onClick={() => (console.log(''))} className='text-white no-underline px-3'>
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Mobile and Tablet Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <Link href="#" className="text-gray-300 hover:text-white no-underline">
                            Our services
                        </Link>
                        <Link href="/top-tier-talent" className="text-gray-300 hover:text-white no-underline">
                            Top-tier talent
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-white no-underline">
                            How it works
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-white no-underline">
                            For developers
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-white no-underline">
                            Blog
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-white no-underline">
                            About us
                        </Link>
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