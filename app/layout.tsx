import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aura Search - Over the Top AI Search Interface",
  description: "An over the top AI search interface. Now search the web with Aura.",
  openGraph: {
    title: "Aura Search - Over the Top AI Search Interface",
    description: "An over the top AI search interface. Now search the web with Aura.",
    url: "https://searchaura.vercel.app",
    siteName: "Aura Search",
    images: [
      {
        url: "/thumbnail-800x600.png",
        width: 800,
        height: 600,
        alt: "Aura Search Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Search - Over the Top AI Search Interface",
    description: "An over the top AI search interface. Now search the web with Aura.",
    images: ["/thumbnail-800x600.png"],
  },
  metadataBase: new URL("https://searchaura.vercel.app"),
  alternates: {
    canonical: "https://searchaura.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} antialiased`}
      >
        <SessionProvider>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
