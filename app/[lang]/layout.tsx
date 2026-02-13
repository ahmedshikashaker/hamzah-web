import { Locale } from "@/lib/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div dir={direction} lang={locale}>
      <Header lang={locale} />
      <main>{children}</main>
      <Footer lang={locale} />
    </div>
  );
}
