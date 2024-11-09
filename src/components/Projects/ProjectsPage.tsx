import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

export const ProjectsPage: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Modern Web App",
            description: "A full-stack application with real-time features",
            tags: ["React", "Node.js", "WebSocket"],
            image: "/api/placeholder/400/300"
        },
        {
            title: "E-commerce Platform",
            description: "Complete shopping experience with payment integration",
            tags: ["Next.js", "Stripe", "MongoDB"],
            image: "/api/placeholder/400/300"
        },
        {
            title: "Mobile Application",
            description: "Cross-platform mobile app for productivity",
            tags: ["React Native", "Firebase"],
            image: "/api/placeholder/400/300"
        }
    ];

    return (
        <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};