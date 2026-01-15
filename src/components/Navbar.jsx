import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin } from 'lucide-react';
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
                            href="https://wa.me/917045638762?text=Hello%20I%20am%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <MessageCircle color="green" size={18} />
                        </a>

                        <a
                            href="tel:+917045638762"
                            className=""
                        >
                            <Phone color="darkgreen" size={18} />
                        </a>

                        <a
                            href="https://www.google.com/maps/dir//Kiran+Motor+Training+School,+Devichapada,+Taloja,+Panvel,+Navi+Mumbai,+Maharashtra+410208/@19.0717489,73.1400801,88m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3be7ebd3d21315eb:0x9347748f5219ceec!2sKiran+Motor+Training+School!8m2!3d19.0718375!4d73.1400878!16s%2Fg%2F11t49_29jv!4m7!1m0!1m5!1m1!1s0x3be7ebd3d21315eb:0x9347748f5219ceec!2m2!1d73.1400878!2d19.0718375?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
                            className=""
                        >
                            <MapPin color="green" size={18} />
                        </a>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <a
                            href="https://wa.me/917045638762?text=Hello%20I%20am%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white p-2 rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center"
                        >
                            <MessageCircle size={18} />
                        </a>

                        <a
                            href="tel:+917045638762"
                            className="bg-green-600 text-white p-2 rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center"
                            aria-label="Call Now"
                        >
                            <Phone size={20} />
                        </a>


                        <a
                            href="https://www.google.com/maps/dir//Kiran+Motor+Training+School,+Devichapada,+Taloja,+Panvel,+Navi+Mumbai,+Maharashtra+410208/@19.0717489,73.1400801,88m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3be7ebd3d21315eb:0x9347748f5219ceec!2sKiran+Motor+Training+School!8m2!3d19.0718375!4d73.1400878!16s%2Fg%2F11t49_29jv!4m7!1m0!1m5!1m1!1s0x3be7ebd3d21315eb:0x9347748f5219ceec!2m2!1d73.1400878!2d19.0718375?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
                            className="bg-green-600 text-white p-2 rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center"
                        >
                            <MapPin size={18} />
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
