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

  return (
    <footer className="relative bg-brand-900 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href={`/${lang}`} className="inline-flex items-center gap-3 group">
              <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
              <span className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-5 text-brand-300 max-w-sm leading-relaxed text-sm">
              {siteConfig.description}
            </p>
            
            <div className="flex items-center gap-2 mt-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container w-10 h-10 bg-brand-800 hover:bg-[var(--accent)]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={siteConfig.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container w-10 h-10 bg-brand-800 hover:bg-[var(--accent)]"
                aria-label="Behance"
              >
                <BehanceIcon size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${lang}${item.href === "/" ? "" : item.href}`}
                    className="text-brand-300 hover:text-[var(--accent)] transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ArrowRightIcon size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-brand-300 hover:text-[var(--accent)] transition-colors group"
                >
                  <div className="icon-container w-9 h-9 bg-brand-800">
                    <MailIcon size={14} />
                  </div>
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-brand-300 hover:text-[var(--accent)] transition-colors group"
                >
                  <div className="icon-container w-9 h-9 bg-brand-800">
                    <PhoneIcon size={14} />
                  </div>
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-brand-300">
                <div className="icon-container w-9 h-9 bg-brand-800">
                  <MapPinIcon size={14} />
                </div>
                <span className="text-sm">{siteConfig.contact.location}</span>
              </li>
            </ul>

            <div className="mt-6">
              <Button href="#contact" variant="outline" size="sm" className="border-brand-700 text-white hover:bg-brand-800 hover:border-[var(--accent)]">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-400">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-brand-400">
              <Link href={`/${lang}/privacy`} className="hover:text-brand-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href={`/${lang}/terms`} className="hover:text-brand-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
