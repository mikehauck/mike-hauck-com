'use client' 

import { NavBar } from './components/navbar';





type Brand = {
	id: number;
	categoryType: string;
	title: string;
	catDescription: string;
	catLevel: number;
};
type MenuItem = {
	label: string;
};
// const NavBar = (props: any) => {
// 	let menuData: Brand[] | null = [];
// };

// async function getMenuItems() {
// 	console.log('Home getStaticProps');

// 	const { data } = await axios.get<Brand[]>(
// 		process.env.EDC_API_BASEURL + `/brand`,
// 		{
// 			params: { category: 'B', catLevel: 6 },
// 		}
// 	);

// 	console.log(data);

// 	return {
// 		props: { data },
// 	};
//}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	//const { props } = await getMenuItems();
	//const { data } = props;
	return (
		<html>
			<body>
				<h4>Rootlayout</h4>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
