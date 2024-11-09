import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { date: '2018', title: '大学入学', description: '情報工学を専攻し、プログラミングとAIの基礎を学びました。', color: 'sky' },
        { date: '2020', title: 'インターンシップ', description: 'システムエンジニアとしての実務経験を積みました。', color: 'indigo' },
        { date: '2022', title: '卒業', description: '情報工学の学士号を取得し、専門知識を深めました。', color: 'rose' },
        { date: '2023', title: '現在のプロジェクト', description: 'AI技術を活用した新しいシステムの開発に取り組んでいます。', isImportant: true, color: 'amber' },
    ];

    return (
        <div className="max-w-4xl mx-auto py-16 px-4 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
            {/* 装飾的な背景要素 */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-50/50 to-rose-50/50 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-50/50 to-amber-50/50 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl font-bold text-center mb-16 text-slate-800 relative inline-block w-full"
            >
                略歴
            </motion.h2>

            <div className="relative">
                {/* タイムラインの中心線 */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-200 via-indigo-200 to-rose-200"
                />

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative mb-24"
                    >
                        <div className={`flex items-center ${
                            index % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}>
                            {/* 日付インジケーター */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                <motion.div
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 180,
                                        transition: { type: "spring", stiffness: 300, damping: 15 }
                                    }}
                                    className={`w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full border-2 border-${event.color}-200 flex items-center justify-center shadow-lg`}
                                >
                                    <motion.div
                                        className={`w-4 h-4 rounded-full bg-${event.color}-300`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute top-14 left-1/2 transform -translate-x-1/2 text-sm font-medium text-slate-600 whitespace-nowrap backdrop-blur-sm bg-white/80 px-4 py-1.5 rounded-full border border-slate-100 shadow-sm"
                                >
                                    {event.date}
                                </motion.div>
                            </div>

                            {/* カードコンテナ */}
                            <div className="relative w-5/12">
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        y: -5,
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className={`w-full p-6 rounded-xl backdrop-blur-md transition-all duration-300 
                                        ${event.isImportant
                                        ? `bg-gradient-to-br from-${event.color}-100/80 to-${event.color}-50/80 shadow-lg`
                                        : `bg-white/80 border border-${event.color}-100 shadow-md`
                                    }
                                    `}
                                >
                                    <div className={`w-12 h-1 rounded-full mb-4 bg-${event.color}-300`} />
                                    <h3 className="text-xl font-bold mb-2 text-slate-700">
                                        {event.title}
                                    </h3>
                                    <p className="leading-relaxed text-slate-600">
                                        {event.description}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;