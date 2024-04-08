import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shadcn CLI Generator",
	description: "Add and Save Your Favorite Shadcn UI Components!",
	creator: "Agus Trihanton",
	icons: "/icon.png",
	keywords: ["shadcn", " shadcn ui", "shadcn cli generator", "shadcn cli"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body className={inter.className}>{children}</body>
			<Toaster richColors />
		</html>
	);
}
