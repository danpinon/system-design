import type { ReactNode } from 'react';
import './badge.css';

export type BadgeProps = {
    children: ReactNode
    size?: 'sm' | 'md' | 'lg'
    variant?: 'neutral' | 'danger' | 'warning' | 'success' | 'info'
}

export function Badge({
    children,
    size = 'md',
    variant = 'neutral'
}: BadgeProps) {
    return (
        <span className={`ds-badge ds-badge--${size} ds-badge--${variant}`}>
            {children}
        </span>
    )
}