// src/components/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Assuming you are using lucide-react for icons

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="/" className="hover:text-emerald-400">Home</a>
                    <a href="/about" className="hover:text-emerald-400">About</a>
                    <a href="/contact" className="hover:text-emerald-400">Contact</a>
                    <a href="/terms" className="hover:text-emerald-400">Terms of Service</a>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook className="h-6 w-6 hover:text-emerald-400" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-6 w-6 hover:text-emerald-400" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="h-6 w-6 hover:text-emerald-400" />
                    </a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} SlaughterGangLLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;