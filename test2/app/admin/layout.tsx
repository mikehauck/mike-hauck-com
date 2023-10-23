export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<h2>Admin layout</h2>
			{children}
		</section>
	);
}
