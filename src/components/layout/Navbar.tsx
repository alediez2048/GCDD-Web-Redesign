'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-display font-bold tracking-tight text-foreground">
                    GCDD<span className="text-accent">GROUP</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-accent text-white px-6 py-2 text-sm font-medium hover:bg-opacity-90 transition-all uppercase tracking-widest"
                    >
                        Work With Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-black/10 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium hover:text-accent transition-colors py-2 border-b border-black/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-accent text-white px-6 py-3 text-center text-sm font-medium uppercase tracking-widest mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Work With Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
