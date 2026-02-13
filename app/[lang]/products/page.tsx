import { Metadata } from "next";
import { getLocalizedProducts } from "@/lib/content";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
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
    title: messages.productsPage.title,
    description: messages.productsPage.subtitle,
  };
}

export default async function ProductsPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const messages = getMessages(locale);
  const products = getLocalizedProducts(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-primary)] pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 gradient-mesh opacity-70" />
        <div className="absolute top-16 left-0 h-60 w-60 rounded-full bg-[var(--secondary)]/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-16">
            <ScrollReveal animation="fade-up">
              <Badge variant="accent" className="mb-4">
                {messages.productsPage.badge}
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
                {messages.productsPage.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                {messages.productsPage.subtitle}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} animation="fade-up" delay={index * 100 + 300}>
                <div className="card p-6 lg:p-8 group hover-lift h-full flex flex-col">
                  <div className="mb-5">
                    <Badge variant="accent" size="md">
                      {product.category}
                    </Badge>
                  </div>

                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {product.title}
                  </h2>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5 text-sm">
                    {product.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-soft)] flex items-center justify-center flex-shrink-0">
                          <CheckIcon size={12} className="text-[var(--accent)]" />
                        </div>
                        <span className="text-[var(--text-secondary)] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <Button href={`/${locale}/products/${product.id}`} variant="outline" size="sm" icon={<ArrowRightIcon />}>
                      {messages.productsSection.viewDetails}
                    </Button>
                    <Button href={`/${locale}/products/${product.id}#book-demo`} variant="ghost" size="sm">
                      {messages.productsSection.bookDemo}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Contact
        lang={locale}
        badgeText={messages.productsPage.contactBadge}
        title={messages.productsPage.contactTitle}
        subtitle={messages.productsPage.contactSubtitle}
        defaultServiceType="Product Demo"
      />
    </>
  );
}
