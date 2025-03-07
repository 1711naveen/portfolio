import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

{/* <meta name="google-site-verification" content="ZPeQqXjf_S0YTwghl3iLi52Gv_vzrb2L6roFxOINN-o" /> old*/}
{/* <meta name="google-site-verification" content="QtniQdRHdat4LX4KBlx9wXHn_mmqTZNAM8_Ki25JMYM" /> */}
export const metadata: Metadata = {
  title: "Naveen Yadav | Portfolio",
  description: "This is my portfolio",
  verification: {
    google: 'QtniQdRHdat4LX4KBlx9wXHn_mmqTZNAM8_Ki25JMYM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
