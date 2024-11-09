// components/About/AboutPage.tsx
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Timeline from '../Timeline/Timeline';

export const AboutPage: React.FC = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <div
            ref={ref}
            className="min-h-screen pt-24 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-5xl mx-auto"
            >
                {/* Existing About section */}
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl transform rotate-6 opacity-20" />
                        <Image
                            src="/sampleimage.jpg"
                            alt="Profile"
                            width={500}
                            height={600}
                            className="relative rounded-2xl shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={controls}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            About Me
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            これは私のページです。私の興味やスキルについて知ってください。
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                                <h3 className="font-bold text-xl mb-2 text-purple-600">Experience</h3>
                                <p className="text-gray-600">5+ years in web development and design</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                                <h3 className="font-bold text-xl mb-2 text-blue-600">Education</h3>
                                <p className="text-gray-600">Computer Science, Design Theory</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                                <h3 className="font-bold text-xl mb-2 text-green-600">Skills</h3>
                                <p className="text-gray-600">JavaScript, React, UI/UX Design</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                                <h3 className="font-bold text-xl mb-2 text-red-600">Interests</h3>
                                <p className="text-gray-600">Photography, Travel, Tech Trends</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* おしゃれなタイムラインを追加 */}
                <Timeline />
            </motion.div>
        </div>
    );
};
