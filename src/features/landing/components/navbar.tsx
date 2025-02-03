'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu, ChevronDown, X } from "lucide-react";
import Image from 'next/image';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "", onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className={`text-white no-underline transition-colors hover:text-gray-300 ${className}`}
    >
        {children}
    </Link>
);

const MainNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled past the first section (100vh)
            const firstSectionHeight = 60; // Height of the first section
            const scrollPosition = window.scrollY;

            if (scrollPosition > firstSectionHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { href: "/how-it-works", label: "How it works" },
        { href: "/top-tier-talent", label: "Top-tier talent" },
        { href: "/about-us", label: "About us" }
    ];

    const developerItems = [
        { href: "/RegisterAsDeveloper/signup", label: "Apply as a Developer" },
        { href: "/how-it-works-for-developers", label: "How it works for Developers" }
    ];

    const loginItems = [
        { href: "/ClientDeveloperSignin/ClientSignin", label: "As a Client" },
        { href: "/ClientDeveloperSignin/DeveloperSignin", label: "As a Developer" }
    ];

    return (
        <nav
            style={{ backgroundColor: 'transparent' }}
            className={`sticky top-0 z-50 w-full px-4 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}
        >
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-5">
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src={"/assets/logo.png"} alt="Logo"
                            width={130}
                            height={20}
                        />
                    </Link>
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <NavigationMenu className="hidden lg:flex">
                            <NavigationMenuList className="flex space-x-9 m-0">
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.href}>
                                        <NavLink href={item.href} onClick={() => (console.log(''))}>
                                            {item.label}
                                        </NavLink>
                                    </NavigationMenuItem>
                                ))}
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-white hover:text-gray-300 flex items-center">
                                        For Talent <ChevronDown className="ml-1" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-black border-gray-800">
                                        {developerItems.map((item) => (
                                            <DropdownMenuItem
                                                key={item.href}
                                                className="text-white hover:bg-gray-800 focus:bg-gray-800"
                                            >
                                                <NavLink href={item.href} onClick={() => (console.log(''))}>
                                                    {item.label}
                                                </NavLink>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                    <Button
                        className="bg-primary text-white no-underline hover:bg-gray-200"
                        asChild
                    >
                        <Link href="/ClientGetStarted/GetStarted" className="btnstyle1 py-2">Get Started</Link>
                    </Button>

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
                                    <NavLink href={item.href} onClick={() => (console.log(''))}>
                                        {item.label}
                                    </NavLink>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile and Tablet Menu */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon" className="text-white">
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="fixed inset-0 flex items-center justify-center z-50 bg-black p-4">
                        <VisuallyHidden>
                            <DialogTitle>Mobile Navigation</DialogTitle>
                        </VisuallyHidden>
                        <div className="flex items-center justify-center flex-col space-y-4 w-full h-full text-center">
                            {/* Close Button */}
                            <div className="w-full flex justify-end">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-gray-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            {navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    className="text-lg hover:bg-gray-800 rounded-md px-4 py-2 w-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                            <div className="border-t border-gray-800 pt-4 w-full">
                                <p className="text-white mb-2 text-lg">For Developers:</p>
                                {developerItems.map((item) => (
                                    <NavLink
                                        key={item.href}
                                        href={item.href}
                                        className="text-lg hover:bg-gray-800 rounded-md px-4 py-2 w-full block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="border-t border-gray-800 w-full pt-4">
                                <Button
                                    className="w-full bg-primary btnstyle1 mb-4 py-6 text-lg"
                                    asChild
                                >
                                    <Link
                                        href="/ClientGetStarted/GetStarted"
                                        onClick={() => setIsOpen(false)}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Get Started
                                    </Link>
                                </Button>

                                <div className="space-y-2">
                                    <p className="text-white mb-2 text-lg">Login as:</p>
                                    {loginItems.map((item) => (
                                        <NavLink
                                            key={item.href}
                                            href={item.href}
                                            className="text-lg hover:bg-gray-800 rounded-md px-4 py-2 w-full block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <style jsx>{`
                @media (max-width: 1023px) {
                    .lg\\:hidden {
                        display: none;
                    }
                    .lg\\:flex {
                        display: flex;
                    }
                }

                /* Fade animation */
                nav {
                    transition: background-color 0.5s ease, opacity 0.5s ease;
                }

                nav.bg-black {
                    opacity: 1;
                }

                nav.bg-transparent {
                    opacity: 0.9; /* Slightly transparent to blend with the background */
                }
            `}</style>
        </nav>
    );
};

export default MainNav;