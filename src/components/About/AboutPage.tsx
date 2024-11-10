import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail, Coffee, Gamepad2, Camera, Music } from 'lucide-react';
import Timeline from "@/components/Timeline/Timeline";

// アニメーション設定
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Section: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { margin: "-100px", once: true });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={`mb-24 ${className}`}
        >
            {children}
        </motion.section>
    );
};

export const AboutPage: React.FC = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div
            ref={containerRef}
            className="min-h-screen pt-24 px-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
        >
            {/* 動的な背景要素 */}
            <motion.div
                className="fixed top-0 left-0 w-full h-full -z-10"
                style={{ y: backgroundY }}
            >
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-sky-50 rounded-full blur-3xl"
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
                    className="absolute bottom-20 left-20 w-96 h-96 bg-rose-50 rounded-full blur-3xl"
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
            </motion.div>

            <div className="max-w-6xl mx-auto relative">
                {/* メインプロフィール */}
                <Section>
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, x: -50 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    transition: { type: "spring", stiffness: 100, damping: 15 }
                                }
                            }}
                            className="relative group"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-sky-100 to-rose-100 rounded-2xl"
                                whileHover={{ rotate: 4 }}
                                style={{ rotate: 6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                            <Image
                                src="/sampleimage.jpg"
                                alt="Profile"
                                width={500}
                                height={600}
                                className="relative rounded-2xl shadow-xl object-cover w-full h-full transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                            />

                            <motion.div
                                className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 backdrop-blur-md bg-white/80 p-4 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#"
                                        className="text-slate-600 hover:text-sky-400 transition-colors"
                                    >
                                        <Icon size={24} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="space-y-4"
                            >
                                <motion.h1
                                    className="text-5xl font-bold text-slate-800"
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { type: "spring", stiffness: 100 }
                                        }
                                    }}
                                >
                                    John Doe
                                </motion.h1>
                                <motion.h2
                                    className="text-2xl font-medium text-slate-600"
                                    variants={fadeInUp}
                                >
                                    Frontend Developer & UI Designer
                                </motion.h2>
                                <motion.p
                                    className="text-slate-600 text-lg leading-relaxed backdrop-blur-md bg-white/80 p-4 rounded-xl"
                                    variants={fadeInUp}
                                >
                                    テクノロジーとデザインの世界に魅了され、日々新しい可能性を追求しています。
                                    コードを書くことと同じくらい、写真撮影や音楽を聴くことも大切な私の一部です。
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-2 gap-6"
                                variants={staggerContainer}
                            >
                                {['趣味', '活動拠点'].map((title, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { type: "spring", stiffness: 100 }
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { type: "spring", stiffness: 400 }
                                        }}
                                        className="p-6 backdrop-blur-md bg-white/80 rounded-xl shadow-sm border border-slate-100"
                                    >
                                        <h3 className="text-sm font-medium text-slate-600 mb-2">{title}</h3>
                                        <p className="text-slate-800">
                                            {index === 0 ? 'Photography / Music / Gaming' : '東京, 日本'}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </Section>

                {/* 趣味・興味セクション */}
                <Section>
                    <motion.h3
                        variants={fadeInUp}
                        className="text-2xl font-bold text-slate-800 mb-8"
                    >
                        趣味 & 興味
                    </motion.h3>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: Camera, title: "写真撮影", desc: "風景や日常の一瞬を切り取ることが好きです" },
                            { icon: Music, title: "音楽", desc: "ジャズとクラシックを主に聴いています" },
                            { icon: Gamepad2, title: "ゲーム", desc: "RPGとストラテジーゲームが特に好きです" },
                            { icon: Coffee, title: "カフェ巡り", desc: "新しいカフェを見つけるのが趣味です" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { type: "spring", stiffness: 100 }
                                    }
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                                className="p-6 backdrop-blur-md bg-white/80 rounded-xl shadow-sm border border-slate-100 transform-gpu"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <item.icon className="w-8 h-8 text-slate-600 mb-4" />
                                </motion.div>
                                <h4 className="font-medium text-slate-700 mb-2">{item.title}</h4>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                {/* Values & Interests セクション */}
                <Section>
                    <motion.h3
                        variants={fadeInUp}
                        className="text-2xl font-bold text-slate-800 mb-8"
                    >
                        Values & Interests
                    </motion.h3>

                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "クリエイティビティ",
                                content: "常に新しいアイデアを探求し、創造的な解決策を見出すことを心がけています。"
                            },
                            {
                                title: "継続的な学習",
                                content: "新しい技術や考え方を学ぶことに情熱を持っています。"
                            },
                            {
                                title: "コミュニティ",
                                content: "知識の共有とコミュニティへの貢献を大切にしています。"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { type: "spring", stiffness: 100 }
                                    }
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                                className="backdrop-blur-md bg-white/80 rounded-xl p-8 shadow-sm border border-slate-100"
                            >
                                <h4 className="font-medium text-slate-700 mb-4">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{item.content}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                {/* 好きな言葉 */}
                <Section>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { type: "spring", stiffness: 100 }
                            }
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="text-center p-12 backdrop-blur-md bg-white/80 rounded-xl shadow-sm border border-slate-100"
                    >
                        <motion.h3
                            className="text-2xl font-bold text-slate-800 mb-4"
                            variants={fadeInUp}
                        >
                            好きな言葉
                        </motion.h3>
                        <motion.p
                            className="text-xl text-slate-600 italic"
                            variants={fadeInUp}
                        >
                            Simplicity is the ultimate sophistication
                        </motion.p>
                        <motion.p
                            className="text-slate-500 mt-2"
                            variants={fadeInUp}
                        >
                            - Leonardo da Vinci
                        </motion.p>
                    </motion.div>
                </Section>
                <Timeline />
            </div>
        </div>
    );
};