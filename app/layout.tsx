import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hamzahllc.com"),
  title: {
    default: "Hamzah LLC - Hire Remote Tech Talent",
    template: "%s | Hamzah LLC",
  },
  description: "Hamzah LLC connects companies with top tech talent from around the world, making remote hiring simple and effective. Over 1,000 technical specialists from 80+ countries.",
  keywords: ["remote talent", "tech hiring", "staff augmentation", "software development", "remote developers", "hire developers"],
  authors: [{ name: "Hamzah LLC" }],
  creator: "Hamzah LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hamzahllc.com",
    siteName: "Hamzah LLC",
    title: "Hamzah LLC - Hire Remote Tech Talent",
    description: "Hamzah LLC connects companies with top tech talent from around the world, making remote hiring simple and effective.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hamzah LLC - Remote Tech Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamzah LLC - Hire Remote Tech Talent",
    description: "Hamzah LLC connects companies with top tech talent from around the world.",
    images: ["/og-image.png"],
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        {children}
      </body>
    </html>
  );
}
