import { getLocalizedTestimonials } from "@/lib/content";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface TestimonialsProps {
  lang: Locale;
}

export function Testimonials({ lang }: TestimonialsProps) {
  const messages = getMessages(lang);
  const localizedTestimonials = getLocalizedTestimonials(lang);

  return (
    <section className="relative py-20 lg:py-28 bg-[var(--bg-primary)] overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="badge mb-4">{messages.testimonials.badge}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              {messages.testimonials.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {localizedTestimonials.map((t, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100 + 200} className="h-full">
              <div className="card p-7 sm:p-8 group h-full min-h-[320px] flex flex-col hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] border border-[var(--accent-border)] flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[var(--accent)]/55" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-lg leading-relaxed text-[var(--text-primary)] mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-[var(--border-color)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A76FD9] to-[#FFB951] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[var(--text-primary)] truncate">{t.author}</div>
                    <div className="text-sm text-[var(--text-muted)]">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
