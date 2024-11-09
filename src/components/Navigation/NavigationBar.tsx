import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Page } from '@/types';

interface NavigationBarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ currentPage, setCurrentPage }) => {
    const pages: Page[] = ['Home', 'About', 'Projects', 'Skills'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg z-50 border-b border-white/20"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        Portfolio
                    </motion.div>
                    <div className="flex space-x-6">
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "primary" : "outline"}
                                onClick={() => setCurrentPage(page)}
                                className={`flex items-center gap-2 text-sm transition-all duration-300`}
                            >
                                {page === 'Home' && <User size={16} />}
                                {page === 'About' && <User size={16} />}
                                {page === 'Projects' && <Briefcase size={16} />}
                                {page === 'Skills' && <Code size={16} />}
                                {page}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};