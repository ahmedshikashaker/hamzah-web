import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyHamzah } from "@/components/sections/WhyHamzah";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Contact } from "@/components/sections/Contact";
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
    title: messages.hero.headlineAccent,
    description: messages.hero.subheadline,
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;

  return (
    <>
      <Hero lang={locale} />
      <TrustedBy lang={locale} />
      <HowItWorks lang={locale} />
      <WhyHamzah lang={locale} />
      <ServicesGrid lang={locale} showAll={false} />
      <Testimonials lang={locale} />
      <Contact lang={locale} />
    </>
  );
}
