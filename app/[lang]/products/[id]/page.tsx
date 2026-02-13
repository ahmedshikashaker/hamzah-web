import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getLocalizedProducts } from "@/lib/content";
import { Contact } from "@/components/sections/Contact";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface PageProps {
  params: Promise<{ lang: string; id: string }>;
}

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "ar"];
  return locales.flatMap((lang) => products.map((product) => ({ lang, id: product.id })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, id } = await params;
  const locale = lang as Locale;
  const messages = getMessages(locale);
  const product = getLocalizedProducts(locale).find((item) => item.id === id);

  if (!product) {
    return {
      title: messages.productsPage.title,
    };
  }

  return {
    title: `${product.title}`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { lang, id } = await params;
  const locale = lang as Locale;
  const messages = getMessages(locale);
  const product = getLocalizedProducts(locale).find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const prefilledMessage = messages.productDetails.prefilledMessage.replace("{product}", product.title);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-primary)] pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-[var(--secondary)]/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-8"
            >
              <ArrowRightIcon size={16} className="rotate-180" />
              {messages.productDetails.backToProducts}
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">
            <ScrollReveal animation="fade-up" className="max-w-3xl">
              <Badge variant="accent" size="md" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
                {product.title}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Button href="#book-demo" size="lg" icon={<ArrowRightIcon />}>
                  {messages.productDetails.bookDemo}
                </Button>
                <Button href={`/${locale}/products`} variant="outline" size="lg">
                  {messages.productDetails.exploreMore}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <div className="card p-6 lg:p-8">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  {messages.productDetails.whatYouGet}
                </h2>
                <div className="space-y-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent-soft)] flex items-center justify-center flex-shrink-0">
                        <CheckIcon size={14} className="text-[var(--accent)]" />
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="card p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-2">
                  {messages.productDetails.walkthroughBadge}
                </p>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  {messages.productDetails.walkthroughTitlePrefix} {product.title} {messages.productDetails.walkthroughTitleSuffix}
                </h2>
                <p className="text-[var(--text-secondary)]">
                  {messages.productDetails.walkthroughSubtitle}
                </p>
              </div>
              <Button href="#book-demo" size="md" icon={<ArrowRightIcon />}>
                {messages.productDetails.bookProductDemo} {product.title}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Contact
        lang={locale}
        sectionId="book-demo"
        badgeText={messages.productDetails.contactBadge}
        title={`${messages.productDetails.contactTitlePrefix} ${product.title} ${messages.productDetails.contactTitleSuffix}`}
        subtitle={messages.productDetails.contactSubtitle}
        defaultServiceType="Product Demo"
        defaultMessage={prefilledMessage}
        productName={product.title}
      />
    </>
  );
}
