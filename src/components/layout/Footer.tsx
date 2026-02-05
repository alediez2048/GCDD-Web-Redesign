import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-basalt text-limestone pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-3xl font-display font-bold tracking-tight mb-6 block">
                            GCDD<span className="text-accent">GROUP</span>
                        </Link>
                        <p className="max-w-md text-limestone/60 leading-relaxed mb-6">
                            Crafting high-end environments and premium commercial spaces with unmatched precision and architectural excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-accent font-medium uppercase tracking-widest text-sm mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-accent font-medium uppercase tracking-widest text-sm mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="hover:text-accent transition-colors">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">LinkedIn</Link></li>
                            <li><Link href="mailto:hello@gcddgroup.com" className="hover:text-accent transition-colors">hello@gcddgroup.com</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-limestone/40">
                    <p>© {currentYear} GCDD Group. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
