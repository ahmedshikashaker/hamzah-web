import { Metadata } from "next";
import { products } from "@/lib/content";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Discover our premium product range - Loyalty Cards, HRMS, CRM, and LMS designed to meet your business needs.",
};

export default async function ProductsPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[var(--bg-primary)] overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute top-1/2 left-0 w-1/3 h-2/3 bg-[var(--secondary)]/10 blur-3xl rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-18">
            <ScrollReveal animation="fade-up">
              <Badge variant="accent" className="mb-4">
                Software Products
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
                Our Products
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Ready-to-deploy software solutions built for modern businesses.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} animation="fade-up" delay={index * 100 + 300}>
                <div className="card p-6 lg:p-8 group hover-lift">
                  <div className="flex items-start justify-between mb-5">
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
                          <CheckIcon size={12} className="text-[var(--accent-dark)] dark:text-[var(--accent)]" />
                        </div>
                        <span className="text-[var(--text-secondary)] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/en/products/${product.id}`}>
                      <Button variant="outline" size="sm" icon={<ArrowRightIcon />}>
                        View Details
                      </Button>
                    </Link>
                    <a href="#contact">
                      <Button variant="ghost" size="sm">
                        Book Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
