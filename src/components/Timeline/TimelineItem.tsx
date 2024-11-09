import React from 'react';
import { motion } from 'framer-motion';

type TimelineItemProps = {
    date: string;
    title: string;
    description: string;
    isImportant?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`relative flex items-center mb-24`}
        >
            <div className="w-5/12 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <span className="text-sm font-bold text-gray-600">{date}</span>
                <h4 className="text-xl font-bold mb-2 text-gray-800">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default TimelineItem;