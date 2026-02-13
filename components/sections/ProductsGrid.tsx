import { getLocalizedProducts } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface Props { lang: Locale }

export function ProductsGrid({ lang }: Props) {
  const messages = getMessages(lang);
  const localizedProducts = getLocalizedProducts(lang);

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal animation="fade-up">
            <span className="badge mb-4">{messages.productsSection.badge}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              {messages.productsSection.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {localizedProducts.map((p, i) => (
            <ScrollReveal key={p.id} animation="fade-up" delay={i * 100 + 200}>
              <div className="card p-6 lg:p-8 group h-full flex flex-col hover-lift">
                <Badge variant="accent" size="md" className="mb-4">{p.category}</Badge>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#4A1F6E] dark:group-hover:text-[#FFB951] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-5">{p.description}</p>
                <div className="space-y-2 mb-6 flex-1">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-soft)] flex items-center justify-center">
                        <CheckIcon size={12} className="text-[#4A1F6E] dark:text-[#FFB951]" />
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button href={"/" + lang + "/products/" + p.id} variant="outline" size="sm" icon={<ArrowRightIcon />}>
                    {messages.productsSection.viewDetails}
                  </Button>
                  <Button href={"/" + lang + "/products/" + p.id + "#book-demo"} variant="ghost" size="sm">
                    {messages.productsSection.bookDemo}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
