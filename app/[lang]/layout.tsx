import { Locale } from "@/lib/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "ar" },
  ];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale = lang as Locale;

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        <Header lang={locale} />
        <main>{children}</main>
        <Footer lang={locale} />
      </body>
    </html>
  );
}
