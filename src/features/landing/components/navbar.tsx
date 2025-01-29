'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu, ChevronDown } from "lucide-react";
import Image from 'next/image';

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const NavLink = ({ href, children, className = "" }) => (
        <Link
            href={href}
            className={`text-white no-underline transition-colors hover:text-gray-300 ${className}`}
        >
            {children}
        </Link>
    );

    return (
        <nav className={`sticky top-0 z-50 w-full bg-black  px-4 transition-all duration-300 `}>
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className={"flex items-center gap-5"}>
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={"/assets/logo.png"} alt="Logo"
                            width={130}
                            height={20}
                        />
                    </Link>
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <NavigationMenu className="hidden md:flex">
                            <NavigationMenuList className="flex space-x-9 m-0">
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.href}>
                                        <NavLink href={item.href}>
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
                                                <NavLink href={item.href}>
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

                <div className="hidden md:flex items-center space-x-4">
                    <Button
                        className="bg-primary text-white no-underline hover:bg-gray-200"
                        asChild
                    >
                        <Link href="/ClientGetStarted/GetStarted">Get Started</Link>
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
                                    <NavLink href={item.href}>
                                        {item.label}
                                    </NavLink>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Menu */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-white">
                            <Menu />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="fixed inset-0 flex items-end justify-end z-50 bg-black p-4">
                        <VisuallyHidden>
                            <DialogTitle>Mobile Navigation</DialogTitle>
                        </VisuallyHidden>
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    className="p-2 hover:bg-gray-800 rounded-md"
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                            <div className="py-2">
                                <p className="text-white mb-2">For Developers</p>
                                {developerItems.map((item) => (
                                    <NavLink
                                        key={item.href}
                                        href={item.href}
                                        className="block p-2 hover:bg-gray-800 rounded-md ml-2"
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-gray-800">
                                <Button
                                    className="w-full bg-primary no-underline text-white hover:bg-gray-200 mb-4"
                                    asChild
                                >
                                    <Link href="/register">Get Started</Link>
                                </Button>

                                <div className="space-y-2">
                                    <p className="text-white mb-2">Login as:</p>
                                    {loginItems.map((item) => (
                                        <NavLink
                                            key={item.href}
                                            href={item.href}
                                            className="block p-2 hover:bg-gray-800 rounded-md ml-2"
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
        </nav>
    );
};

export default MainNav;