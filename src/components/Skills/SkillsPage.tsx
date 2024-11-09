import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/types';
import { SkillBar } from '../Skills/SkillBar';

export const SkillsPage: React.FC = () => {
    const skills: Skill[] = [
        { name: "Frontend Development", level: 95 },
        { name: "UI/UX Design", level: 90 },
        { name: "Backend Development", level: 85 },
        { name: "Mobile Development", level: 80 },
        { name: "Cloud Services", level: 75 }
    ];

    return (
        <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-8"
                >
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                        <div className="space-y-6">
                            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index + Math.ceil(skills.length / 2)} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};