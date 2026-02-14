"use client";

import { useState } from "react";
import { getLocalizedCareersBenefits } from "@/lib/content";
import { Icon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SearchIcon } from "@/components/ui/icons";
import { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface CareersContentProps {
  lang: Locale;
}

export function CareersContent({ lang }: CareersContentProps) {
  const [q, setQ] = useState("");
  const messages = getMessages(lang);
  const benefits = getLocalizedCareersBenefits(lang);

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal animation="fade-up">
            <span className="badge mb-4">{messages.careersContent.openPositionsBadge}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {messages.careersContent.currentOpenings}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="relative max-w-md mx-auto mt-6">
              <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder={messages.careersContent.searchPlaceholder}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[#4A1F6E] dark:focus:border-[var(--accent)]"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="max-w-md mx-auto mb-16">
            <div className="card p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4">
                <SearchIcon size={22} className="text-[var(--text-muted)]" />
              </div>
              <p className="text-[var(--text-primary)] font-medium mb-1">{messages.careersContent.noOpenPositions}</p>
              <p className="text-[var(--text-secondary)] text-sm">{messages.careersContent.noOpenPositionsMsg}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="text-center mb-10">
          <ScrollReveal animation="fade-up">
            <span className="badge mb-4">{messages.careersContent.whyJoinBadge}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {messages.careersContent.whyJoinTitle}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 60 + 200}>
              <div className="card p-6 text-center group">
                <div className="icon-box w-14 h-14 mx-auto mb-4">
                  <Icon name={b.icon} size={26} />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#4A1F6E] dark:group-hover:text-[var(--accent)] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{b.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
