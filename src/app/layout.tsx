import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from 'next-themes';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

const siteConfig = {
  name: 'Naveen Yadav',
  title: 'Naveen Yadav - Full Stack Developer & Problem Solver',
  description: 'Passionate MERN Stack Developer with 2+ years of experience building scalable web applications. Solved 700+ LeetCode problems. Specializing in React.js, Node.js, Nextjs, Java, Spring Boot and modern web technologies.',
  url: 'https://naveen17.vercel.app',
  ogImage: 'https://naveen17.vercel.app/og-image.jpg',
  links: {
    github: 'https://github.com/1711naveen',
    linkedin: 'https://www.linkedin.com/in/naveenyadav1711',
    leetcode: 'https://leetcode.com/u/1711naveen',
  }
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Naveen Yadav',
    'Full Stack Developer',
    'MERN Stack',
    'React Developer',
    'Node.js Developer',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'MongoDB',
    'Express.js',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'LeetCode',
    'Problem Solving',
    'Portfolio',
    'India'
  ],
  authors: [{ name: 'Naveen Yadav', url: siteConfig.url }],
  creator: 'Naveen Yadav',
  publisher: 'Naveen Yadav',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Naveen Yadav - Full Stack Developer Portfolio',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@naveen1711',
    site: '@naveen1711',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'ZPeQqXjf_S0YTwghl3iLi52Gv_vzrb2L6roFxOINN-o',
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
