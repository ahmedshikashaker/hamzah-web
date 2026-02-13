"use client";

import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/content";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { CountUp } from "@/components/effects/CountUp";
import { SpaceStarsBackground } from "@/components/effects/SpaceStarsBackground";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

interface HeroProps {
  lang: Locale;
}

export function Hero({ lang }: HeroProps) {
  const messages = getMessages(lang);

  const heroContent = {
    badge: messages.hero.badge,
    headline: messages.hero.headline,
    headlineAccent: messages.hero.headlineAccent,
    subheadline: messages.hero.subheadline,
    primaryCta: { label: messages.hero.startHiring, href: hero.primaryCta.href },
    secondaryCta: { label: messages.hero.howItWorks, href: hero.secondaryCta.href },
    stats: [
      { value: hero.stats[0]?.value ?? "1000+", label: messages.hero.stats.techSpecialists },
      { value: hero.stats[1]?.value ?? "80+", label: messages.hero.stats.countries },
      { value: hero.stats[2]?.value ?? "24h", label: messages.hero.stats.firstMatch },
      { value: hero.stats[3]?.value ?? "98%", label: messages.hero.stats.successRate },
    ],
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />
      <SpaceStarsBackground className="absolute inset-0 opacity-60 dark:opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-[var(--bg-primary)]/42 to-[var(--bg-primary)]/88 dark:from-transparent dark:via-[var(--bg-primary)]/20 dark:to-[var(--bg-primary)]/60" />
      <div className="orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 bg-[#7d4aa3]/20 dark:bg-[#A76FD9]/15" />
      <div className="orb w-[500px] h-[500px] bottom-0 right-0 bg-[#e7ad5a]/14 dark:bg-[#FFB951]/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--border-strong)] bg-white/70 dark:bg-[var(--accent-soft)]/75 backdrop-blur-md text-sm font-semibold text-[var(--text-secondary)] dark:text-[#FFB951] shadow-[0_8px_22px_rgba(69,33,100,0.12)] dark:shadow-none mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]/45 dark:bg-[#FFB951]/45" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)] dark:bg-[#FFB951]" />
                </span>
                {heroContent.badge}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                <span className="text-[var(--text-primary)]">{heroContent.headline}</span>
                <br />
                <span className="text-gradient">{heroContent.headlineAccent}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                {heroContent.subheadline}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4 mb-10">
                <Button href={hero.primaryCta.href} size="lg" icon={<ArrowRightIcon />}>
                  {heroContent.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="outline" size="lg" icon={<PlayIcon />}>
                  {heroContent.secondaryCta.label}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {heroContent.stats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] counter">
                      {stat.value.includes("+") ? (
                        <>
                          <CountUp end={parseInt(stat.value.replace(/\D/g, ""))} duration={2500} />
                          {stat.value.includes("+") && "+"}
                          {stat.value.includes("h") && "h"}
                          {stat.value.includes("%") && "%"}
                        </>
                      ) : stat.value}
                    </div>
                    <div className="text-sm text-[var(--text-muted)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 border border-[var(--border-color)] rounded-full animate-float opacity-60" />
              <div className="absolute inset-8 border border-[var(--accent-border)] rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-16 border-2 border-[#A76FD9]/30 dark:border-[#FFB951]/30 rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
              <div className="absolute inset-24 bg-gradient-to-br from-[#A76FD9]/20 to-[#FFB951]/20 rounded-full flex items-center justify-center">
                <div className="text-6xl font-extrabold text-gradient">H</div>
              </div>
              <div className="absolute top-10 right-10 w-16 h-16 border-2 border-[#A76FD9]/30 rotate-12 rounded-xl animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-20 left-5 w-12 h-12 bg-[#FFB951]/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
    </section>
  );
}
