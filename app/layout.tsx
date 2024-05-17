import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import Navbar from "@/app/components/navbar";
import styles from "@/styles/layout.module.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"],  weight: ['400', '500', '600', '700'], style: ['normal', 'italic']});

export const metadata: Metadata = {
  title: "Quiz Game",
  description: "Made by Kaled Enriquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar/>
        <div className={styles.pageContainer}>
          {children}
        </div>
        
      </body>
    </html>
  );
}
