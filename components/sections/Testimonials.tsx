import { testimonials } from "@/lib/content";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal animation="fade-up">
            <span className="badge mb-4">Testimonials</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              What Our Clients Say
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100 + 200}>
              <div className="card p-8 group">
                <svg className="w-10 h-10 text-[#A76FD9]/20 dark:text-[#FFB951]/20 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-[var(--text-primary)] mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A76FD9] to-[#FFB951] flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">{t.author}</div>
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
