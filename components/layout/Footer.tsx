import Link from "next/link";
import { siteConfig, navigation } from "@/lib/content";
import { LinkedInIcon, BehanceIcon, MailIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Locale } from "@/lib/i18n/config";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const localizedContactHref = `/${lang}#contact`;

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-tertiary)]">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[var(--secondary)]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--accent)]/12 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="mb-12 rounded-3xl border border-[var(--accent-border)] bg-[var(--card-bg)]/90 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">
                Ready To Build
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                Build your product with a team that ships fast and scales cleanly
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                Tell us your goals and we will map the right talent, timeline, and delivery model for your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={localizedContactHref} size="md" icon={<ArrowRightIcon />}>
                Book Consultation
              </Button>
              <Button href={`/${lang}/products`} variant="outline" size="md">
                Explore Products
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href={`/${lang}`} className="inline-flex items-center gap-3 group">
              <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
              <span className="text-xl font-bold text-[var(--text-primary)] transition-colors">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-5 text-[var(--text-secondary)] max-w-md leading-relaxed text-sm">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]">
                1,000+ Specialists
              </span>
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]">
                24h First Match
              </span>
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]">
                80+ Countries
              </span>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={siteConfig.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all"
                aria-label="Behance"
              >
                <BehanceIcon size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-[0.16em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${lang}${item.href === "/" ? "" : item.href}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ArrowRightIcon size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-[0.16em] mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    <MailIcon size={14} />
                  </div>
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    <PhoneIcon size={14} />
                  </div>
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-[var(--text-secondary)]">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <MapPinIcon size={14} />
                </div>
                <span className="text-sm">{siteConfig.contact.location}</span>
              </li>
            </ul>

            <div className="mt-6">
              <Button href={localizedContactHref} variant="outline" size="sm">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border-color)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-[var(--text-muted)]">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-[var(--text-muted)]">
              <Link href={`/${lang}/privacy`} className="hover:text-[var(--accent)] transition-colors">
                Privacy Policy
              </Link>
              <Link href={`/${lang}/terms`} className="hover:text-[var(--accent)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
