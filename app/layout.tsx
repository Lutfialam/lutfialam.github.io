import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import ScrollToTop from "@/components/scroll-to-top";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lutfi Alamsyah — React Native & Mobile App Developer",
  description:
    "React Native developer with 4+ years building production mobile apps end-to-end. Six production apps shipped, two live on the Apple App Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 font-sans">
        <Sidebar />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
