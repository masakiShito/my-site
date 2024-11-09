import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HomePage: React.FC = () => {
    const backgroundVariants = {
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-white z-0" />

            <motion.div
                variants={backgroundVariants}
                animate="animate"
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-20 blur-3xl"
            />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Hello, I'm Your Name
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Crafting Digital Experiences with Code & Design
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center gap-6"
                >
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-6 rounded-full hover:opacity-90 transition-opacity">
                        View Projects
                    </Button>
                    <Button variant="outline" className="px-8 py-6 rounded-full border-2 hover:bg-purple-50 transition-colors">
                        Contact Me
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
};