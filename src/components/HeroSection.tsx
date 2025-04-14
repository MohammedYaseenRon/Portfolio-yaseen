'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });

// Animation variants
const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const navLinks = [
        { name: 'About', href: '#aboutus' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contacts' }
    ];

    return (
        <header className="relative min-h-screen flex flex-col items-center justify-center bg-black">
            <div className="particles-container">
                <ParticlesBg type="cobweb" bg={true} color="#06D6A0" num={100} />
            </div>

            <nav className="w-full fixed top-0 z-50 backdrop-blur-lg bg-black/30 px-6 py-4 border-b border-teal-500/30">
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-teal-400"
                    >
                        Yaseen.dev
                    </motion.div>

                    {/* Desktop Menu */}
                    <motion.ul
                        className="hidden md:flex space-x-8"
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {navLinks.map((link) => (
                            <motion.li key={link.name} variants={itemVariants}>
                                <a
                                    href={link.href}
                                    className="text-white hover:text-teal-400 transition-colors font-medium"
                                >
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            className="text-white hover:text-teal-400"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/60 backdrop-blur-lg p-4"
                    >
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block py-2 text-white hover:text-teal-400 transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </nav>

            {/* Hero Content */}
            <div className="container relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6"
                >
                    <span className="text-teal-400 drop-shadow-lg">Hello,</span> <span className="text-white drop-shadow-lg">I&rsquo;m</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">Mohammed Yaseen Ron</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="text-2xl md:text-3xl mb-8 text-white font-light"
                >
                    <span className="relative">
                        <span className="bg-teal-400/20 px-4 py-1 rounded-lg text-teal-600 font-semibold">
                            Computer Science Engineer with a passion for AI & Machine Learning
                        </span>
                        <span className="absolute -bottom-1 left-1/2 w-16 h-1 bg-teal-400 transform -translate-x-1/2"></span>
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    <div className='flex justify-center items-center gap-4'>
                        <Button asChild className="bg-teal-400 hover:bg-teal-500 text-black font-medium px-8 py-6 text-lg shadow-lg shadow-teal-400/30">
                            <a href="#contacts">Get in touch</a>
                        </Button>
                        <Button asChild className="bg-white hover:bg-white border hover:border-teal-400 text-black font-medium px-8 py-6 text-lg shadow-lg shadow-teal-400/30">
                            <a href="#projects">View Projects</a>
                        </Button>

                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <a href="#about" className="text-white/70 flex flex-col items-center hover:text-teal-400 transition-colors">
                    <span className="mb-2">Scroll</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path>
                    </svg>
                </a>
            </motion.div>
        </header>
    );
};

export default Header;