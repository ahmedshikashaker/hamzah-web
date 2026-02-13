import { trustedClients } from "@/lib/content";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function TrustedBy() {
  return (
    <section className="py-12 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <p className="text-center text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-8">
            Trusted by innovative companies
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {trustedClients.map((c, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 30}>
              <div className="flex items-center justify-center h-10">
                <span className="text-sm font-semibold text-[var(--text-muted)] hover:text-[#4A1F6E] dark:hover:text-[#FFB951] transition-colors">
                  {c.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
