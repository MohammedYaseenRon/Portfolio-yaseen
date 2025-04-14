import { useState, useRef, ChangeEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            content: 'yaseenron070@gmail.com',
            href: 'mailto:yaseenron070@gmail.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            content: '+91 7208455991',
            href: '#',
        },
        {
            icon: MapPin,
            title: 'Location',
            content: 'Mumbai, Maharshtra',
            href: '#',
        },
    ];

    return (
        <section id="contacts" className="py-12 md:py-16 bg-[#0A0A0A]">
            <div className="max-w-5xl mx-auto px-4">
                {/* Decorative elements
                <div className="absolute left-0 w-64 h-64 bg-gray-400 rounded-full filter blur-3xl"></div>
                <div className="absolute right-0 w-72 h-72 bg-gray-500 rounded-full filter blur-3xl"></div> */}

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
                        Get In <span className="text-teal-400">Touch</span>
                    </h2>
                    <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                        Have a project in mind or just want to say hi? Drop me a message!
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="p-8 rounded-lg bg-gray-800/20 border border-gray-700 shadow-xl">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="bg-gray-700/20 border border-teal-200 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none transition-all duration-200"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required
                                            className="bg-gray-700/20 border border-teal-200 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none transition-all duration-200"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-white mb-2">Message</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message here..."
                                            rows={5}
                                            required
                                            className="bg-gray-700/20 border border-teal-200 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none transition-all duration-200"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-teal-400 hover:bg-teal/80 text-black font-medium transition-all duration-300 shadow-lg"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send size={16} className="ml-2" />
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-col justify-between"
                        >
                            <div className="p-8 rounded-lg bg-gray-800/20 border border-gray-700 shadow-xl mb-8">
                                <h3 className="text-xl text-teal-400 font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-start group"
                                        >
                                            <div className="bg-gray-700 p-3 rounded-lg mr-4 text-teal-200 group-hover:bg-teal/20 transition-colors">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">{item.title}</h4>
                                                <p className="text-gray-300 group-hover:text-teal transition-colors">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-lg bg-gray-800/80 border border-gray-700 shadow-xl">
                                <h3 className="text-xl text-teal-400 font-bold mb-4">Let&rsquo;s Connect</h3>
                                <p className="text-gray-300 mb-6">
                                    Follow me on social media to see my latest projects and updates.
                                </p>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href="https://github.com/MohammedYaseenRon"
                                        className="bg-gray-900/40 w-10 h-10 rounded-full flex items-center justify-center text-white-300 hover:bg-teal-200 hover:text-black transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/yaseen-ron-36319b305"
                                        className="bg-gray-900/40 w-10 h-10 rounded-full flex items-center justify-center text-white-300 hover:bg-teal-200 hover:text-black transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href="https://x.com/YaseenRon"
                                        className="bg-gray-900/40 w-10 h-10 rounded-full flex items-center justify-center text-white-300 hover:bg-teal-200 hover:text-black transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;