import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyHamzah } from "@/components/sections/WhyHamzah";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { Contact } from "@/components/sections/Contact";
import { Locale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Hire Remote Tech Talent",
  description: "Over 1,000 technical specialists from more than 80 countries. Find the perfect match for your team.",
};

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <WhyHamzah />
      <ServicesGrid lang={lang as Locale} showAll={false} />
      <ProductsGrid lang={lang as Locale} />
      <Testimonials />
      <Contact />
    </>
  );
}
