import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const HomePage: React.FC = () => {
    const [text] = useTypewriter({
        words: ['Crafting Digital Experiences', 'Design & Development', 'Innovation & Creation'],
        loop: true,
        delaySpeed: 2000,
    });

    const letterAnimation = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const title = "ようこそ、MSK Studioへ";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
        >
            {/* 背景のアニメーション要素 */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,transparent_95%,rgba(0,0,0,0.05)_95%,rgba(0,0,0,0.05)_100%)] bg-[length:24px_24px]" />
            </div>

            {/* 動的な背景要素 */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-50/20 to-purple-50/20 blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [180, 0, 180]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-50/20 to-blue-50/20 blur-3xl"
            />

            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="overflow-hidden mb-12">
                        <div className="flex flex-wrap justify-center mb-8 relative">
                            {title.split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterAnimation}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="text-6xl md:text-7xl font-bold text-black inline-block relative hover:text-blue-600 transition-colors duration-300"
                                    style={{
                                        textShadow: '0 4px 12px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="text-2xl text-gray-600 h-12 font-light tracking-wide"
                    >
                        <span>{text}</span>
                        <Cursor cursorStyle="_" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex flex-col md:flex-row justify-center gap-8 items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <Button className="bg-black text-white px-10 py-7 rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                            View Projects
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <Button variant="outline" className="px-10 py-7 rounded-full border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Contact Me
                        </Button>
                    </motion.div>
                </motion.div>

                {/* 装飾的な要素 */}
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="absolute top-20 right-20 w-40 h-40 border border-black/10 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{
                        rotate: {
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="absolute bottom-20 left-20 w-24 h-24 border border-black/10 rounded-full"
                />
            </div>
        </motion.div>
    );
};