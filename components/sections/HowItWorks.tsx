import { getLocalizedHowItWorks } from "@/lib/content";
import { Icon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const iconMap: Record<string, string> = {
  clipboard: "clipboard",
  search: "search",
  users: "users",
  rocket: "rocket",
};

interface HowItWorksProps {
  lang: Locale;
}

export function HowItWorks({ lang }: HowItWorksProps) {
  const messages = getMessages(lang);
  const steps = getLocalizedHowItWorks(lang);

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal animation="fade-up" duration={480} rootMargin="0px 0px -3% 0px">
            <span className="badge mb-4">{messages.howItWorks.badge}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={70} distance={14} duration={500} rootMargin="0px 0px -3% 0px">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              {messages.howItWorks.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal
              key={i}
              animation={i % 2 === 0 ? "fade-left" : "fade-right"}
              delay={i * 40 + 90}
              distance={18}
              duration={520}
              rootMargin="0px 0px -5% 0px"
            >
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[#4A1F6E] dark:group-hover:border-[#FFB951] transition-colors">
                    <Icon name={iconMap[step.icon] || step.icon} className="text-[var(--text-muted)] group-hover:text-[#4A1F6E] dark:group-hover:text-[#FFB951] transition-colors" size={28} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#4A1F6E] dark:bg-[#FFB951] text-white dark:text-[#0d0710] text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#4A1F6E] dark:group-hover:text-[#FFB951] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
