'use client';

import { Button, cn } from '@nextui-org/react'; // Import Button and cn from Next UI
import React, { type ReactElement } from 'react';

interface ButtonGroupProps {
	data: ButtonProps[]; // Array of button data
	uniqeId: string; // Active button key to highlight the active button
	onPress: (item: ButtonProps, data: ButtonProps[]) => void; // Function to handle button press
	position?: 'out' | 'in';
	color?: string; // Custom text color class
	backgroundColor?: string; // Custom background color class
	iconColor?: string; // Custom icon color class
	id?: string; // Optional unique identifier
	className?: string;
}

interface ButtonProps {
	label?: string; // Button label
	icon?: ReactElement; // Optional icon for the button
	uniqeId: string; // Optional active button key
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data?: any;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
	data,
	uniqeId,
	onPress,
	position = 'out',
	color = 'text-inherit', // Default text color class
	backgroundColor = 'bg-primary', // Default background color class
	iconColor = 'text-background', // Default icon color class
	id = 'button-group',
	className,
}) => {
	return (
		<div
			className={cn(
				'flex rounded-md w-min border bg-background',
				className,
				position === 'out' && 'border-none',
			)}
			id={id}
		>
			{/* Parent container with rounded corners and hidden overflow */}
			{data?.map((button: ButtonProps, index: number) => {
				const active = uniqeId === button?.uniqeId;

				return (
					<Button
						id={id}
						key={button?.uniqeId}
						onPress={() => onPress(button, data)} // Handle the button click
						variant={active ? 'solid' : 'bordered'} // 'solid' for active, 'bordered' for inactive
						className={cn(
							'min-w-0 px-4 py-2 border border-gray-200',
							{
								'text-background': active,
								'hover:bg-gray-100': !active,
								[color]: !active, // Apply custom text color class when not active
								[backgroundColor]: active, // Apply custom background color class when active
							},
							position === 'out' && 'rounded-none',
							index === 0 && position === 'out' && 'rounded-l-md',
							index === data?.length - 1 &&
								position === 'out' &&
								'rounded-r-md',
							position !== 'out' && 'm-1',
							// index !== data?.length - 1 && 'border-r border-gray-200',
						)}
					>
						{/* Ensure item.icon is a valid ReactElement and clone it to modify className */}
						{button?.icon &&
							React.cloneElement(button?.icon, {
								className: cn(
									'w-6 h-6',
									active ? iconColor : 'text-gray-500', // Use custom icon color
								),
							})}
						{button?.label && (
							<span className='text-[0.875rem] font-mont font-regular'>
								{button?.label} {/* Display the label */}
							</span>
						)}
					</Button>
				);
			})}
		</div>
	);
};