'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = true }: CardProps) {
    const baseStyles = 'p-12 border border-basalt/10 transition-all';
    const hoverStyles = hoverable ? 'hover:border-bronze' : '';

    return (
        <motion.div
            className={`${baseStyles} ${hoverStyles} ${className}`}
            whileHover={hoverable ? { scale: 1.01 } : {}}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
}
