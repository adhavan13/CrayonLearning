'use client';

import { cn } from '@nextui-org/react';
import type React from 'react';

interface HeadingTextProps {
	title: string; // Main heading text
	alignment?: 'left' | 'center' | 'right'; // Alignment of the text
	color?: string; // Text color
	className?: string; // Optional additional class names
	id?: string; // Optional ID for the heading text
}

export const HeadingText: React.FC<HeadingTextProps> = ({
	title,
	alignment = 'left',
	color = 'text-primary',
	className = '',
	id,
}) => {
	return (
		<h1
			className={cn(
				'font-mont',
				color,
				{
					'text-center': alignment === 'center',
					'text-right': alignment === 'right',
				},
				className,
			)}
			id={id}
		>
			{title}
		</h1>
	);
};