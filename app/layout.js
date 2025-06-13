import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fuel My Art",
  description: "Fuel My Art is the perfect place to connect and support your favourite creators and artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <SessionWrapper>
        <Navbar/>
        <div className="fixed inset-0 -z-10 h-[120%] w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_38%,#63e_100%)]"></div>
        <div className="min-h-[70vh] w-full">
        {children}
        </div>
        <Footer/>
        </SessionWrapper>
      </body>
    </html>
  );
}
