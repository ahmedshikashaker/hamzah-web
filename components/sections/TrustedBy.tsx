import Image from "next/image";
import { trustedClients } from "@/lib/content";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface TrustedByProps {
  lang: Locale;
}

export function TrustedBy({ lang }: TrustedByProps) {
  const messages = getMessages(lang);
  const revealPattern: Array<"fade-up" | "fade-left" | "fade-right"> = ["fade-up", "fade-left", "fade-right", "fade-up"];

  return (
    <section className="relative py-16 lg:py-20 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <ScrollReveal animation="fade-up" duration={480} rootMargin="0px 0px -3% 0px">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {messages.trustedBy.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={70} distance={14} duration={480} rootMargin="0px 0px -3% 0px">
            <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)]">
              {messages.trustedBy.subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {trustedClients.map((client, i) => (
            <ScrollReveal
              key={client.name}
              animation={revealPattern[i % revealPattern.length]}
              delay={i * 35 + 60}
              distance={16}
              duration={500}
              rootMargin="0px 0px -4% 0px"
              className="h-full"
            >
              <div className="group h-full min-h-[128px] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--bg-elevated)] hover:shadow-[var(--card-shadow-hover)]">
                <div className="h-14 w-full max-w-[182px] px-2.5 flex items-center justify-center">
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    width={client.logoWidth}
                    height={client.logoHeight}
                    className="max-h-11 w-auto object-contain brightness-[1.04] contrast-[1.15] saturate-[1.08] dark:brightness-110 dark:contrast-[1.16] transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="text-sm font-semibold text-[var(--text-secondary)]">
                  {client.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
