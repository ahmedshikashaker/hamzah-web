import { Metadata } from "next";
import { services } from "@/lib/content";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive solutions to drive your business forward - Staff Augmentation, Software Development, UI/UX Design, Cloud & DevOps, and more.",
};

export default async function ServicesPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[var(--bg-primary)] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-[var(--accent-soft)] blur-3xl rounded-full opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[var(--bg-muted)] blur-3xl rounded-full opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-18">
            <ScrollReveal animation="fade-up">
              <Badge variant="accent" className="mb-4">
                What We Do
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
                Our Services
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Comprehensive solutions to drive your business forward. From talent acquisition to full-cycle development.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 40 + 300}>
                <div
                  id={service.id}
                  className="card p-6 h-full group hover-lift"
                >
                  <div className="icon-container w-14 h-14 mb-5">
                    <Icon name={service.icon} size={28} />
                  </div>
                  
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {service.title}
                  </h2>
                  
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {service.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <Badge key={tag} variant="default" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={700}>
            <div className="mt-14 text-center">
              <p className="text-[var(--text-secondary)] mb-5 max-w-md mx-auto">
                Ready to get started? Contact us today to discuss how we can help transform your business.
              </p>
              <Button href="#contact" size="lg" icon={<ArrowRightIcon />}>
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Contact />
    </>
  );
}
