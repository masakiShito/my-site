import React from 'react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
        >
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl transform rotate-6 opacity-20" />
                    <img
                        src="/api/placeholder/500/600"
                        alt="Profile"
                        className="relative rounded-2xl shadow-xl object-cover w-full h-full"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        I'm a passionate developer and designer with a love for creating beautiful,
                        functional digital experiences. With expertise in modern web technologies
                        and an eye for design, I bring ideas to life through code.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="font-bold text-xl mb-2 text-purple-600">Experience</h3>
                            <p className="text-gray-600">5+ years in web development and design</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="font-bold text-xl mb-2 text-blue-600">Education</h3>
                            <p className="text-gray-600">Computer Science, Design Theory</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </div>
);