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
            className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-zinc-800"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl font-light tracking-wider text-white"
                    >
                        PORTFOLIO
                    </motion.div>
                    <div className="flex space-x-8">
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant="outline"
                                onClick={() => setCurrentPage(page)}
                                className={`
                                    group relative px-3 py-2 text-sm border-transparent
                                    ${currentPage === page ? 'text-white' : 'text-zinc-400 hover:text-white'}
                                    transition-colors duration-200 bg-transparent hover:bg-transparent
                                `}
                            >
                                <div className="flex items-center gap-2">
                                    {page === 'Home' && <User size={14} />}
                                    {page === 'About' && <User size={14} />}
                                    {page === 'Projects' && <Briefcase size={14} />}
                                    {page === 'Skills' && <Code size={14} />}
                                    <span className="font-light tracking-wide">{page.toUpperCase()}</span>
                                </div>
                                {currentPage === page && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-px bg-white"
                                        initial={false}
                                    />
                                )}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};