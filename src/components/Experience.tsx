import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'TechNSure Private Limited',
            period: 'Nov 2024 - Jan 2025',
            description: 'Developed responsive web applications using React and Next.js. Collaborated with designers and backend developers to deliver high-quality products.',
            type: 'work',
        },
        {
            title: 'BE Computer Science Engineering',
            company: 'Mumbai University',
            period: '2022 - 2026',
            description: 'Currently pursuing a Bachelor degree with a focus on Web Development and Software Engineering.',
            type: 'education',
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section id="experience" className="p-12 md:p-16 bg-[#121212]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl text-teal-400 md:text-4xl font-bold mb-4 text-center">
                        Work <span className="text-purple">Experience</span>
                    </h2>
                    <p className="text-center text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                        My professional journey and educational background
                    </p>

                    <div className="relative pl-8 border-l-2 border-muted">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="space-y-12"
                        >
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    <div className="absolute -left-[40px] bg-card p-1.5 rounded-full border-4 border-background">
                                        {exp.type === 'work' ? (
                                            <BriefcaseBusiness className="text-purple" size={20} />
                                        ) : (
                                            <GraduationCap className="text-yellow" size={20} />
                                        )}
                                    </div>

                                    <div className="border bg-[#0A0A0A] p-6 rounded-lg">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                            <h3 className="text-xl font-bold text-teal-400">{exp.title}</h3>
                                            <span className="text-sm font-medium text-teal-200 bg-background/30 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="text-white font-medium mb-3">{exp.company}</h4>
                                        <p className="text-gray-500">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;