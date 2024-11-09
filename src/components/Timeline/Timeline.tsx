import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { date: '2018', title: '大学入学', description: '情報工学を専攻し、プログラミングとAIの基礎を学びました。' },
        { date: '2020', title: 'インターンシップ', description: 'システムエンジニアとしての実務経験を積みました。' },
        { date: '2022', title: '卒業', description: '情報工学の学士号を取得し、専門知識を深めました。' },
        { date: '2023', title: '現在のプロジェクト', description: 'AI技術を活用した新しいシステムの開発に取り組んでいます。', isImportant: true },
    ];

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Journey
            </h2>

            <div className="relative">
                {/* タイムラインの中心線 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-orange-400 rounded-full" />

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative mb-24"
                    >
                        {/* コンテンツのラッパー */}
                        <div className={`flex items-center ${
                            index % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}>
                            {/* 日付インジケーター */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="w-8 h-8 bg-white rounded-full border-4 border-blue-400"
                                >
                  <span className="absolute top-10 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-600 whitespace-nowrap">
                    {event.date}
                  </span>
                                </motion.div>
                            </div>

                            {/* カードコンテナ */}
                            <div className="relative w-5/12 transform-gpu">
                                <motion.div
                                    whileHover={{
                                        scale: 1.01,
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className={`w-full p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                                        event.isImportant
                                            ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-400'
                                            : 'bg-gradient-to-br from-white to-gray-50'
                                    }`}
                                >
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
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