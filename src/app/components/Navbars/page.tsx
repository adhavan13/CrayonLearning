'use client';

import { Button, cn } from '@nextui-org/react';
import type { ReactElement } from 'react';
import React from 'react';

// Interface defining each navbar item
interface NavbarItem {
	label?: string; // Text displayed below the icon
	icon?: ReactElement; // Icon component (e.g., from react-icons), now explicitly a ReactElement
	uniqeId: string; // Key to identify the active item
}

// Interface for the Navbars component props
interface NavbarsProps {
	items: NavbarItem[]; // Array of NavbarItem objects
	uniqeId?: string; // Active key to highlight the active item
	onPress: (item: NavbarItem) => void; // Click handler for the button
	id?: string; // Optional unique identifier
	className?: string; // Optional class name for the container
	color?: string; // Custom text color for the icon/label
	backgroundColor?: string; // Custom background color for the active button
}

// Navbar component
export const Navbars: React.FC<NavbarsProps> = ({
	items,
	uniqeId,
	onPress,
	id = 'navbars',
	className = '',
	color = 'text-primary', // Default text color class
	backgroundColor = 'bg-primary-foreground', // Default background color class
}) => {
	return (
		<nav
			className={cn(
				'fixed bottom-0 w-full bg-background shadow-md border-t border-gray-200 rounded-tr-3xl rounded-tl-3xl',
				className,
			)}
		>
			{/* Container for navbar items */}
			<ul className='flex justify-around items-center p-2'>
				{items?.map((item: NavbarItem) => {
					const active = uniqeId === item?.uniqeId;
					return (
						<li key={item?.label} className='flex flex-col items-center'>
							{/* Button for each navbar item */}
							{item?.icon && (
								<Button
									id={id}
									isIconOnly // Only the icon is displayed
									variant={active ? 'solid' : 'light'} // Style depends on active state
									className={cn(active ? backgroundColor : 'hover:bg-gray-100')} // Custom background color for active state
									onPress={() => onPress(item)} // Trigger click handler
								>
									{/* Ensure item.icon is a valid ReactElement and clone it to modify className */}
									{React.cloneElement(item?.icon, {
										className: cn(
											'w-6 h-6',
											active ? color : 'text-gray-500', // Custom text color for active state
										),
									})}
								</Button>
							)}
							{/* Text label for the item */}
							<span
								className={cn(
									'text-[0.875rem] font-mont font-regular',
									active ? color : 'text-gray-500', // Custom text color for the label
								)}
							>
								{item?.label} {/* Display the label */}
							</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};