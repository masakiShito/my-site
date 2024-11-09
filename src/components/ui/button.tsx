import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant = 'primary',
                                                  size = 'md',
                                                  className = '',
                                                  onClick,
                                              }) => {
    // サイズごとのスタイル
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    // バリアントごとのスタイル
    const variantStyles = {
        primary: 'bg-zinc-900 hover:bg-zinc-800 text-white',
        secondary: 'bg-white hover:bg-zinc-100 text-zinc-900',
        outline: 'border border-zinc-700 text-zinc-400 hover:text-white hover:border-white bg-transparent',
        gradient: 'bg-gradient-to-r from-zinc-900 to-zinc-800 text-white hover:from-zinc-800 hover:to-zinc-700',
    };

    // ホバーアニメーションの設定
    const hoverAnimation = {
        scale: 1.02,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
        },
    };

    // タップアニメーションの設定
    const tapAnimation = {
        scale: 0.98,
    };

    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={hoverAnimation}
            whileTap={tapAnimation}
            className={`
                relative
                inline-flex
                items-center
                justify-center
                rounded-none
                font-light
                tracking-wide
                transition-all
                duration-200
                ${sizeStyles[size]}
                ${variantStyles[variant]}
                ${className}
            `}
        >
            {/* リップルエフェクト */}
            <motion.div
                className="absolute inset-0 bg-white opacity-0"
                whileTap={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.3, 1],
                    transition: { duration: 0.3 },
                }}
            />

            {/* ボタンの中身 */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

// 使用例のコンポーネント
export const ButtonExample: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-4 p-4 bg-zinc-900">
            <Button variant="primary">
                PRIMARY
            </Button>

            <Button variant="secondary">
                SECONDARY
            </Button>

            <Button variant="outline">
                OUTLINE
            </Button>

            <Button variant="gradient">
                GRADIENT
            </Button>

            <Button variant="gradient" size="sm">
                SMALL
            </Button>

            <Button variant="gradient" size="lg">
                LARGE
            </Button>
        </div>
    );
};