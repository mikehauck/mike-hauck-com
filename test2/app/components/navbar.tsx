'use client'

import Link from 'next/link';
import { InputText } from 'primereact/inputtext';
import { MegaMenu } from 'primereact/megamenu';



// import { useRouter } from 'next/router';
// import React from 'react';

//export const NavBar = () => {
export const NavBar = (props: any) => {
	console.log('navbar props');
	// const router = useRouter();

	const megaItems: any[] = [
		{
			label: 'Admin',
			icon: 'pi pi-fw pi-video',
			items: [
				[
					{
						label: 'stock',
						items: [
							{
								label: 'Upload EDC',
								command: () => {
									//router.push('/secure/admin/upload-edc');
								},
							},
							{ label: 'Upload Other' },
						],
					},
					{
						label: 'Master data',
						items: [
							{
								label: 'Brands',
								command: () => {
									//router.push('/secure/admin/brand');
								},
							},
							{ label: 'Categories' },
							{ label: 'promote' },
						],
					},
				],
				// [
				// 	{
				// 		label: 'Video 3',
				// 		items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }],
				// 	},
				// 	{
				// 		label: 'Video 4',
				// 		items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }],
				// 	},
				// ],
			],
		},
		// {
		// 	label: 'Users',
		// 	icon: 'pi pi-fw pi-users',
		// 	items: [
		// 		[
		// 			{
		// 				label: 'User',
		// 				items: [
		// 					{
		// 						label: 'Login',
		// 						icon: 'text-gray-100 pi pi-fw pi-sign-in',
		// 						command: () => {
		// 							router.push('/api/auth/login');
		// 						},
		// 					},
		// 					{
		// 						label: 'Logout',
		// 						icon: 'text-gray-100 pi pi-fw pi-sign-out',
		// 						command: () => {
		// 							router.push('/api/auth/logout');
		// 						},
		// 					},
		// 					{
		// 						label: 'Profile',
		// 						command: () => {
		// 							router.push('/secure/user/profile');
		// 						},
		// 					},
		// 					,
		// 				],
		// 			},
		// 			// {
		// 			// 	label: 'User 2',
		// 			// 	items: [{ label: 'User 2.1' }, { label: 'User 2.2' }],
		// 			// },
		// 		],
		// 		// [
		// 		// 	{
		// 		// 		label: 'User 3',
		// 		// 		items: [{ label: 'User 3.1' }, { label: 'User 3.2' }],
		// 		// 	},
		// 		// 	{
		// 		// 		label: 'User 4',
		// 		// 		items: [{ label: 'User 4.1' }, { label: 'User 4.2' }],
		// 		// 	},
		// 		// ],
		// 		// [
		// 		// 	{
		// 		// 		label: 'User 5',
		// 		// 		items: [{ label: 'User 5.1' }, { label: 'User 5.2' }],
		// 		// 	},
		// 		// 	{
		// 		// 		label: 'User 6',
		// 		// 		items: [{ label: 'User 6.1' }, { label: 'User 6.2' }],
		// 		// 	},
		// 		// ],
		// 	],
		// },
		// {
		// 	label: 'Events',
		// 	icon: 'pi pi-fw pi-calendar',
		// 	items: [
		// 		[
		// 			{
		// 				label: 'Event 1',
		// 				items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }],
		// 			},
		// 			{
		// 				label: 'Event 2',
		// 				items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }],
		// 			},
		// 		],
		// 		[
		// 			{
		// 				label: 'Event 3',
		// 				items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }],
		// 			},
		// 			{
		// 				label: 'Event 4',
		// 				items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }],
		// 			},
		// 		],
		// 	],
		// },
		// {
		// 	label: 'Settings',
		// 	icon: 'pi pi-fw pi-cog',
		// 	items: [
		// 		[
		// 			{
		// 				label: 'Setting 1',
		// 				items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }],
		// 			},
		// 			{
		// 				label: 'Setting 2',
		// 				items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }],
		// 			},
		// 			{
		// 				label: 'Setting 3',
		// 				items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }],
		// 			},
		// 		],
		// 		[
		// 			{
		// 				label: 'Technology 4',
		// 				items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }],
		// 			},
		// 		],
		// 	],
		// },
	];

	const end = <InputText placeholder="Search" type="text" />;
	return (
		<>
			<MegaMenu model={megaItems} orientation="horizontal" end={end} />
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/user/login">Login</Link>
				</li>
				<li>
					<Link href="/user/signup">Signup</Link>
				</li>
			</ul>
		</>
	);
};
// const NavBar = (props: any) => {
// 	let menuData: Brand[] | null = [];
// };

// export default NavBar;
// export const NavBar = (props: any, menuItems: Brand[]) => {
// 	const grp1: MenuItem[] = [];
// 	const grp2: MenuItem[] = [];
// 	const grp3: MenuItem[] = [];
// 	const grp4: MenuItem[] = [];
// 	const grp5: MenuItem[] = [];

// 	if (!menuItems) {
// 		return <div></div>;
// 	}

// 	// for (const m of menuItems) {
// 	// 	switch (m.catLevel) {
// 	// 		case 1:
// 	// 			//grp1.push(b);
// 	// 			const _menuItem: MenuItem = { label: m.title, id: m.id };
// 	// 			grp1.push(_menuItem);
// 	// 			break;
// 	// 		case 2:
// 	// 			const _menuItem2: MenuItem = { label: m.title, id: m.id };
// 	// 			grp2.push(_menuItem2);
// 	// 			break;
// 	// 		case 3:
// 	// 			const _menuItem3: MenuItem = { label: m.title, id: m.id };
// 	// 			grp3.push(_menuItem3);
// 	// 			break;
// 	// 		case 4:
// 	// 			console.log('Group 4');
// 	// 			const _menuItem4: MenuItem = { label: m.title, id: m.id };
// 	// 			grp4.push(_menuItem4);
// 	// 			break;
// 	// 		case 5:
// 	// 			const _menuItem5: MenuItem = { label: m.title, id: m.id };
// 	// 			grp5.push(_menuItem5);
// 	// 			break;
// 	// 	}
// 	// }

// 	const router = useRouter();
// 	const megaItems: any[] = [
// 		{
// 			label: 'Brands',
// 			items: [
// 				[
// 					{
// 						label: 'group 1',
// 						items: grp1,
// 					},
// 				],
// 				[
// 					{
// 						label: 'group 2',
// 						items: grp2,
// 					},
// 				],
// 				[
// 					{
// 						items: grp3,
// 					},
// 				],
// 				[
// 					{
// 						label: 'group 2',
// 						items: grp4,
// 					},
// 				],

// 				// [
// 				// 	{
// 				// 		//label: 'set 2',
// 				// 		items: grp5,
// 				// 	},
// 				// ],
// 			],
// 		},
// 		{
// 			label: 'Admin',
// 			icon: 'pi pi-fw pi-video',
// 			items: [
// 				[
// 					{
// 						label: 'stock',
// 						items: [
// 							{
// 								label: 'Upload EDC',
// 								command: () => {
// 									router.push('/secure/admin/upload-edc');
// 								},
// 							},
// 							{ label: 'Upload Other' },
// 						],
// 					},
// 					{
// 						label: 'Master data',
// 						items: [
// 							{
// 								label: 'Brands',
// 								command: () => {
// 									router.push('/secure/admin/brand');
// 								},
// 							},
// 							{ label: 'Categories' },
// 							{ label: 'promote' },
// 						],
// 					},
// 				],
// 				// [
// 				// 	{
// 				// 		label: 'Video 3',
// 				// 		items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }],
// 				// 	},
// 				// 	{
// 				// 		label: 'Video 4',
// 				// 		items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }],
// 				// 	},
// 				// ],
// 			],
// 		},
// 		{
// 			label: 'Users',
// 			icon: 'pi pi-fw pi-users',
// 			items: [
// 				[
// 					{
// 						label: 'User',
// 						items: [
// 							{
// 								label: 'Login',
// 								icon: 'text-gray-100 pi pi-fw pi-sign-in',
// 								command: () => {
// 									router.push('/api/auth/login');
// 								},
// 							},
// 							{
// 								label: 'Logout',
// 								icon: 'text-gray-100 pi pi-fw pi-sign-out',
// 								command: () => {
// 									router.push('/api/auth/logout');
// 								},
// 							},
// 							{
// 								label: 'Profile',
// 								command: () => {
// 									router.push('/secure/user/profile');
// 								},
// 							},
// 							,
// 						],
// 					},
// 					// {
// 					// 	label: 'User 2',
// 					// 	items: [{ label: 'User 2.1' }, { label: 'User 2.2' }],
// 					// },
// 				],
// 				// [
// 				// 	{
// 				// 		label: 'User 3',
// 				// 		items: [{ label: 'User 3.1' }, { label: 'User 3.2' }],
// 				// 	},
// 				// 	{
// 				// 		label: 'User 4',
// 				// 		items: [{ label: 'User 4.1' }, { label: 'User 4.2' }],
// 				// 	},
// 				// ],
// 				// [
// 				// 	{
// 				// 		label: 'User 5',
// 				// 		items: [{ label: 'User 5.1' }, { label: 'User 5.2' }],
// 				// 	},
// 				// 	{
// 				// 		label: 'User 6',
// 				// 		items: [{ label: 'User 6.1' }, { label: 'User 6.2' }],
// 				// 	},
// 				// ],
// 			],
// 		},
// 		// {
// 		// 	label: 'Events',
// 		// 	icon: 'pi pi-fw pi-calendar',
// 		// 	items: [
// 		// 		[
// 		// 			{
// 		// 				label: 'Event 1',
// 		// 				items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }],
// 		// 			},
// 		// 			{
// 		// 				label: 'Event 2',
// 		// 				items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }],
// 		// 			},
// 		// 		],
// 		// 		[
// 		// 			{
// 		// 				label: 'Event 3',
// 		// 				items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }],
// 		// 			},
// 		// 			{
// 		// 				label: 'Event 4',
// 		// 				items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }],
// 		// 			},
// 		// 		],
// 		// 	],
// 		// },
// 		// {
// 		// 	label: 'Settings',
// 		// 	icon: 'pi pi-fw pi-cog',
// 		// 	items: [
// 		// 		[
// 		// 			{
// 		// 				label: 'Setting 1',
// 		// 				items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }],
// 		// 			},
// 		// 			{
// 		// 				label: 'Setting 2',
// 		// 				items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }],
// 		// 			},
// 		// 			{
// 		// 				label: 'Setting 3',
// 		// 				items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }],
// 		// 			},
// 		// 		],
// 		// 		[
// 		// 			{
// 		// 				label: 'Technology 4',
// 		// 				items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }],
// 		// 			},
// 		// 		],
// 		// 	],
// 		// },
// 	];
// 	const end = <InputText placeholder="Search" type="text" />;
// 	return (
// 		<>
// 			<h4>navbar</h4>
// 			{/* <MegaMenu model={megaItems} orientation="horizontal" end={end} /> */}
// 			{/*
// 			// 	<ul>
// 		// 		<li>
// 		// 			<Link href="/">Home</Link>
// 		// 		</li>
// 		// 		<li>
// 		// 			<Link href="/user/login">Login</Link>
// 		// 		</li>
// 		// 		<li>
// 		// 			<Link href="/user/signup">Signup</Link>
// 		// 		</li>
// 		// 	</ul> */}
// 		</>
// 	);
// };
