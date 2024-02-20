import "./globals.css";
import Footer from "./components/Footer/index";
import type { Metadata } from "next";
import Navbarin from "./components/Navbar/index";
export const metadata: Metadata = {
	title: "Albison Academy",
	icons: {
		icon: "/logo.svg",
	},
	description:
		"Toshkentda professional IT treyning markazi | Albison - 2020 yildan beri o'z faoliyatini yurg'izib kelmoqda. IT Kurslar boshidan boshlab o'rgatiladi va ishga kirguncha qo’llab-quvvatlanadi. Online o'qish imkoniyati ham bor. Bepul ochiq darslar",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html>
				<head>
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-93WN9M8Y8G"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					  
						gtag('config', 'G-93WN9M8Y8G');`,
						}}
					/>
					<link rel="icon" href="/logo.svg" />
				</head>
				<body>
					<Navbarin />
					{children}
					<Footer />
				</body>
			</html>
		</>
	);
}
