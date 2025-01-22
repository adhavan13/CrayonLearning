'use client';
import { ButtonGroup } from './components/ButtonGroup/page';
import { CardWrapper } from './components/CardWrapper/page';
import { HeadingText } from './components/HeadingTest/page';
import { Navbars } from './components/Navbars/page';
import { useState } from 'react';
import { CiCircleMore } from 'react-icons/ci'; // Import 'More' icon
import { RiBookLine, RiDashboardLine, RiMedalLine } from 'react-icons/ri'; // Import appropriate icons
export default function Page() {
	// State to track the active navbar item
	const [activeItem, setActiveItem] = useState('Dashboard'); // Default active item

	const navbarItems = [
		{
			uniqeId: 'Dashboard',
			label: 'Dashboard',
			icon: <RiDashboardLine />, // Dashboard icon
		},
		{
			uniqeId: 'Curriculum',
			label: 'Curriculum',
			icon: <RiBookLine />, // Curriculum icon
		},
		{
			uniqeId: 'Leaderboard',
			label: 'Leaderboard',
			icon: <RiMedalLine />, // Leaderboard icon
		},
		{
			uniqeId: 'More',
			label: 'More',
			icon: <CiCircleMore />, // More icon
		},
	];

	// Function to handle item click
	const handleItemClick = (label: string, data?: { uniqeId: string }[]) => {
		console.log('data:', data);
		setActiveItem(label); // Update the active item
		console.log(`${label} clicked`);
	};

	return (
		<div>
			{/* Page content here */}
			<Navbars
				items={navbarItems}
				uniqeId={activeItem}
				onPress={(item: { uniqeId: string }) => handleItemClick(item.uniqeId)}
				id={'navbars'}
			/>
			<br />
			<ButtonGroup
				data={navbarItems}
				uniqeId={activeItem}
				position='out'
				onPress={(item: { uniqeId: string }, data: { uniqeId: string }[]) => {
					handleItemClick(item.uniqeId, data);
				}}
				color='text-inherit'
				backgroundColor='bg-secondary'
				iconColor='text-white'
				id={'button-group'}
			/>
			<br />
			<ButtonGroup
				data={navbarItems}
				uniqeId={activeItem}
				position='in'
				onPress={(item: { uniqeId: string }) => handleItemClick(item.uniqeId)}
				id={'button-group'}
			/>
			<br />
			<ButtonGroup
				data={navbarItems?.map((item) => ({
					icon: item?.icon,
					uniqeId: item?.uniqeId,
				}))}
				uniqeId={activeItem}
				position='in'
				onPress={(item: { uniqeId: string }) => handleItemClick(item.uniqeId)}
				color='text-inherit'
				backgroundColor='bg-secondary'
				iconColor='text-white'
				id={'button-group'}
			/>
			<br />
			<ButtonGroup
				data={navbarItems?.map((item) => ({
					icon: item?.icon,
					uniqeId: item?.uniqeId,
				}))}
				uniqeId={activeItem}
				position='out'
				onPress={(item: { uniqeId: string }, data: { uniqeId: string }[]) => {
					handleItemClick(item.uniqeId, data);
				}}
				id={'button-group'}
			/>
			<br />
			<HeadingText title='Heading' color={'text-primary'} alignment={'left'} />
			<br />
			<HeadingText
				title='Reference (04)'
				color={'text-secondary'}
				alignment={'left'}
				id={'heading-tag'}
			/>
			<br />
			<CardWrapper>
				<img
					// biome-ignore lint/a11y/noRedundantAlt: <explanation>
					alt='NextUI hero Image'
					src='https://nextui.org/images/hero-card-complete.jpeg'
					width={100}
					height={100}
				/>
			</CardWrapper>
		</div>
	);
}