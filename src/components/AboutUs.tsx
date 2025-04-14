"use client";

import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { BookOpen, Coffee, User } from 'lucide-react';
import Image from 'next/image';

export const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <section id="aboutus" className='py-12 md:py-16 bg-[#0A0A0A] relative overflow-hidden'>
            <div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className='max-w-4xl mx-auto'
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                        About <span className="text-teal-400">Me</span>
                    </h2>

                    <div className='flex flex-col md:flex-row items-center gap-12'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="w-full md:w-2/5"
                        >
                            <div className="relative group">
                                <div className="w-64 h-64 rounded-full mx-auto overflow-hidden bg-gradient-to-br from-teal via-purple to-magenta p-1 
                                    transition-all duration-500 group-hover:from-magenta group-hover:via-purple group-hover:to-teal">
                                    <Image
                                        src="/photos.jpg"
                                        alt="Jane Doe"
                                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -z-10 w-64 h-64 bg-magenta/30 rounded-full blur-3xl opacity-70 -top-5 -right-5 
                                    transition-all duration-500 group-hover:bg-teal/30"></div>
                                <div className="absolute -z-10 w-64 h-64 bg-teal/30 rounded-full blur-3xl opacity-70 -bottom-5 -left-5
                                    transition-all duration-500 group-hover:bg-magenta/30"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="w-full md:w-3/5"
                        >
                            <div className="glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                                <p className="text-lg mb-6 text-white">
                                    Hey there! I&rsquo;m <span className="text-purple-400">Mohammed Yaseen Ron</span>, a passionate and detail-driven Fullstack Developer who loves crafting clean, efficient, and engaging digital experiences.
                                </p>
                                <p className="text-lg mb-6 text-white">
                                    I specialize in modern JavaScript frameworks like React, Next.js, and Node.js, and I’m dedicated to building high-performance, accessible, and visually striking web applications that leave a lasting impact.
                                </p>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/20 rounded-full">
                                            <User className="text-purple-400" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Based in</h4>
                                            <p className="text-muted-foreground">Mumbai</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/20 rounded-full">
                                            <BookOpen className="text-blue-500" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Education</h4>
                                            <p className="text-muted-foreground">B.Sc. Computer Science</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/20 rounded-full">
                                            <Coffee className="text-red-400" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Interests</h4>
                                            <p className="text-muted-foreground">Gaming, Reading, Cooking</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-4">
                                    <motion.a
                                        href="#contact"
                                        className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-400 to-purple hover:opacity-90 text-white font-medium transition-all duration-300 shadow-lg shadow-magenta/20 hover:shadow-magenta/30"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Me
                                    </motion.a>
                                    <motion.a
                                        href="#experience"
                                        className="px-6 py-3 rounded-md bg-transparent border border-purple-400 hover:border-purple-400 text-white hover:bg-yellow/5 font-medium transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        My Experience
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
