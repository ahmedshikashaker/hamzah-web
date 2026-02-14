import Link from "next/link";
import { getLocalizedServices } from "@/lib/content";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { ArrowRightIcon } from "@/components/ui/icons";

interface Props { lang: Locale; showAll?: boolean; }

export function ServicesGrid({ lang, showAll = false }: Props) {
  const localizedServices = getLocalizedServices(lang);
  const list = showAll ? localizedServices : localizedServices.filter((s) => s.featured);
  const messages = getMessages(lang);
  const sectionClasses = showAll
    ? "py-20 lg:py-28 bg-[var(--bg-primary)]"
    : "py-20 lg:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-color)]";

  return (
    <section className={sectionClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal animation="fade-up" duration={480} rootMargin="0px 0px -3% 0px">
            <span className="badge mb-4">{messages.servicesSection.badge}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={70} distance={14} duration={500} rootMargin="0px 0px -3% 0px">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              {messages.servicesSection.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className={"grid gap-5 " + (showAll ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4")}>
          {list.map((s, i) => (
            <ScrollReveal
              key={s.id}
              animation={i % 4 === 0 ? "fade-left" : i % 4 === 3 ? "fade-right" : "fade-up"}
              delay={i * 30 + 90}
              distance={18}
              duration={500}
              rootMargin="0px 0px -5% 0px"
            >
              <Link href={"/" + lang + "/services#" + s.id} className="block h-full">
                <div className="card p-6 h-full group">
                  <div className="icon-box w-14 h-14 mb-5">
                    <Icon name={s.icon} size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#4A1F6E] dark:group-hover:text-[#FFB951] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{s.description}</p>
                  {s.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.slice(0, 3).map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {!showAll && (
          <ScrollReveal animation="fade-up" delay={180} distance={14} duration={480}>
            <div className="mt-10 text-center">
              <Button href={"/" + lang + "/services"} variant="outline" size="lg" icon={<ArrowRightIcon />}>
                {messages.servicesSection.viewAll}
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
