import { Metadata } from "next";
import { CareersContent } from "@/components/sections/CareersContent";
import { Contact } from "@/components/sections/Contact";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const messages = getMessages(locale);

  return {
    title: messages.careersPage.title,
    description: messages.careersPage.subtitle,
  };
}

export default async function CareersPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-[var(--accent-soft)] blur-3xl rounded-full opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <Badge variant="accent" className="mb-4">
                {messages.careersPage.badge}
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
                {messages.careersPage.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg text-[var(--text-secondary)]">
                {messages.careersPage.subtitle}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CareersContent lang={locale} />
      <Contact lang={locale} />
    </>
  );
}
