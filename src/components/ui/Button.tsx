import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button'
}: ButtonProps) {
    const baseStyles = 'px-10 py-4 font-medium uppercase tracking-widest transition-all text-center inline-block text-button';

    const variantStyles = {
        primary: 'bg-bronze text-white hover:bg-opacity-90 hover:scale-105',
        secondary: 'border border-basalt/20 text-basalt hover:bg-basalt/5',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={combinedStyles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
        >
            {children}
        </motion.button>
    );
}
