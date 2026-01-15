import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import UnderConstruction from './UnderConstruction';
import logo from '../assets/images/logo-3.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/under-construction' }, // Placeholder
        { name: 'Contact', path: '/contact' },
        { name: 'Guide', path: '/road-safety-guide' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="w-10" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-700 hover:text-brand-yellow font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919876543210" // Replace with actual number if known, using placeholder
                            className=""
                        >
                            <Phone color="darkgreen" size={18} />
                        </a>

                        <a
                            href="https://wa.me/919876543210?text=Hello%20I%20am%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <MessageCircle color="green" size={18} />
                        </a>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <a
                            href="tel:+919876543210"
                            className="bg-green-600 text-white p-2 rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center"
                            aria-label="Call Now"
                        >
                            <Phone size={20} />
                        </a>

                        <a
                            href="https://wa.me/919876543210?text=Hello%20I%20am%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white p-2 rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center"
                        >
                            <MessageCircle size={18} />
                        </a>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-4 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
