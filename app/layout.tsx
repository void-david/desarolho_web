import type { Metadata } from "next";
import { Inter, Kumbh_Sans, Rubik } from "next/font/google";
import { usePathname } from 'next/navigation'
import Navbar from "@/app/components/navbar";
import styles from "@/styles/layout.module.css";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700'], style: ['normal'] });
const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: ['400', '500', '600', '700'], style: ['normal'] });

export const metadata: Metadata = {
  title: "Learning Limbo",
  description: "Made by Kaled Enriquez, David Lozano, Gerardo Leiva, Fernando tenchipe, Hans Gerhard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={kumbhSans.className}>
          
          <Navbar/>
          {children}
          
        </body>
      </html>
    </ClerkProvider>
    
  );
}
