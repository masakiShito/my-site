import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group relative"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform opacity-20" />
        <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {project.title}
            </h3>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm"
                    >
            {tag}
          </span>
                ))}
            </div>
        </div>
    </motion.div>
);