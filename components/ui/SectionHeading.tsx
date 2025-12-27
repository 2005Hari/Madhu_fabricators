"use client";

import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    alignment?: 'left' | 'center' | 'right';
    light?: boolean;
}

export function SectionHeading({
    title,
    subtitle,
    alignment = 'center',
    light = false,
    className,
    ...props
}: SectionHeadingProps) {

    const alignClass = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end',
    };

    return (
        <div className={cn("flex flex-col mb-12", alignClass[alignment], className)} {...props}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "text-3xl md:text-4xl font-bold tracking-tight mb-4",
                    light ? "text-white" : "text-white"
                )}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={cn(
                        "text-lg md:text-xl max-w-2xl",
                        light ? "text-white/80" : "text-gray-400"
                    )}
                >
                    {subtitle}
                </motion.p>
            )}

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={cn(
                    "h-1 mt-6 rounded-full",
                    light ? "bg-white/50" : "bg-secondary"
                )}
            />
        </div>
    );
}
