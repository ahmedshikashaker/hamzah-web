import { getLocalizedWhyHamzah } from "@/lib/content";
import { Icon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface WhyHamzahProps {
  lang: Locale;
}

export function WhyHamzah({ lang }: WhyHamzahProps) {
  const messages = getMessages(lang);
  const items = getLocalizedWhyHamzah(lang);

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal animation="fade-up" duration={620} rootMargin="0px 0px -6% 0px">
            <span className="badge mb-4">{messages.whyHamzah.badge}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={110} distance={18} duration={650} rootMargin="0px 0px -6% 0px">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              {messages.whyHamzah.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal
              key={i}
              animation={i % 3 === 0 ? "fade-left" : i % 3 === 1 ? "fade-up" : "fade-right"}
              delay={i * 55 + 180}
              distance={22}
              duration={680}
              rootMargin="0px 0px -10% 0px"
            >
              <div className="card p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="icon-box w-12 h-12">
                    <Icon name={item.icon} size={24} />
                  </div>
                  {item.stat && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">{item.stat}</div>
                      <div className="text-xs text-[var(--text-muted)]">{item.statLabel}</div>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#4A1F6E] dark:group-hover:text-[#FFB951] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
