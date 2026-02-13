import { Metadata } from "next";
import { CareersContent } from "@/components/sections/CareersContent";
import { Contact } from "@/components/sections/Contact";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team at Hamzah LLC. Discover exciting career opportunities and be part of our growing team of talented professionals.",
};

export default async function CareersPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-[var(--accent-soft)] blur-3xl rounded-full opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <Badge variant="accent" className="mb-4">
                Join Our Team
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
                Build Your Career With Us
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg text-[var(--text-secondary)]">
                Discover exciting career opportunities at Hamzah LLC and be part of our growing team of talented professionals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CareersContent />
      <Contact />
    </>
  );
}
