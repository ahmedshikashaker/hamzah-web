import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface ProofStripProps {
  lang: Locale;
}

export function ProofStrip({ lang }: ProofStripProps) {
  const messages = getMessages(lang);
  const metrics = [
    { value: messages.proofStrip.metric1Value, label: messages.proofStrip.metric1Label },
    { value: messages.proofStrip.metric2Value, label: messages.proofStrip.metric2Label },
    { value: messages.proofStrip.metric3Value, label: messages.proofStrip.metric3Label },
  ];

  return (
    <section className="relative -mt-10 z-10 pb-10 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scale" distance={16} duration={680} rootMargin="0px 0px -6% 0px">
          <div className="card bg-[var(--bg-elevated)]/92 backdrop-blur-sm p-6 lg:p-8">
            <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-7 lg:gap-8 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] mb-3">
                  {messages.proofStrip.badge}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight mb-3">
                  {messages.proofStrip.title}
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {messages.proofStrip.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/70 px-4 py-3"
                    >
                      <p className="text-2xl font-extrabold text-[var(--text-primary)] leading-none mb-1">
                        {metric.value}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-snug">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 px-4 py-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    {messages.proofStrip.note}
                  </p>
                  <Button href={`/${lang}/services`} variant="outline" size="sm" icon={<ArrowRightIcon />}>
                    {messages.proofStrip.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
