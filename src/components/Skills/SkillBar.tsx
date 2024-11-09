import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface SkillBarProps {
    skill: Skill;
    index: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="mb-6"
    >
        <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-700">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.level}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            />
        </div>
    </motion.div>
);