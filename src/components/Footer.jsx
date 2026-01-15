import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-black text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-brand-yellow mb-2">Kiran Motor Training School</h3>
                        <p className="text-gray-400 text-sm">Safe Driving, Safe Life.</p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-300">
                        <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
                        <Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link>
                        <Link to="/" className="hover:text-brand-yellow transition-colors">Privacy Policy</Link>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Kiran Motor Training School. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
