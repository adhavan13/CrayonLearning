'use client';

import { cn } from '@nextui-org/react'; // Import Button and cn from Next UI
import type React from 'react';

interface CardWrappers {
	children: React.ReactNode;
	className?: string;
}

export const CardWrapper: React.FC<CardWrappers> = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn('shadow-light-xl rounded overflow-hidden w-max', className)}
		>
			{children}
		</div>
	);
};