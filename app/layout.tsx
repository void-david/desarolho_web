import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { usePathname } from 'next/navigation'
import Navbar from "@/app/components/navbar";
import styles from "@/styles/layout.module.css";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700'], style: ['normal'] });


export const metadata: Metadata = {
  title: "Learning Limbo",
  description: "Made by Kaled Enriquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          
          <Navbar/>
          {children}
          
        </body>
      </html>
    </ClerkProvider>
    
  );
}
