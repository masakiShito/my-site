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
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // バリアントごとのスタイル
    const variantStyles = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
        gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
    };

    // ホバーアニメーションの設定
    const hoverAnimation = {
        scale: 1.03,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
        },
    };

    // タップアニメーションの設定
    const tapAnimation = {
        scale: 0.97,
    };

    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={hoverAnimation}
            whileTap={tapAnimation}
            className={`
        relative
        inline-flex
        items-center
        justify-center
        rounded-full
        font-medium
        tracking-wide
        transition-all
        duration-300
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
        >
            {/* グラデーションホバーエフェクト（gradientバリアント用） */}
            {variant === 'gradient' && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 0.2 }}
                />
            )}

            {/* リップルエフェクト */}
            <motion.div
                className="absolute inset-0 rounded-full bg-white opacity-0"
                whileTap={{
                    opacity: [0, 0.2, 0],
                    scale: [1, 1.5, 1],
                    transition: { duration: 0.4 },
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
        <div className="flex flex-wrap gap-4 p-4">
            <Button variant="primary">
                Primary Button
            </Button>

            <Button variant="secondary">
                Secondary Button
            </Button>

            <Button variant="outline">
                Outline Button
            </Button>

            <Button variant="gradient">
                Gradient Button
            </Button>

            <Button variant="gradient" size="sm">
                Small Button
            </Button>

            <Button variant="gradient" size="lg">
                Large Button
            </Button>
        </div>
    );
};