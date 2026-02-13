"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@/components/ui/icons";
import { navigation, siteConfig } from "@/lib/content";
import { locales, localeNames, Locale } from "@/lib/i18n/config";
import Logo from "@/components/ui/Logo";

interface HeaderProps {
  lang: Locale;
}

export function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  const isActive = (href: string) => {
    const path = pathname?.replace(`/${lang}`, "") || "/";
    return path === href || (href !== "/" && path.startsWith(href));
  };

  const getHref = (href: string) => `/${lang}${href === "/" ? "" : href}`;
  const switchLang = (l: Locale) => pathname?.replace(`/${lang}`, `/${l}`) || `/${l}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={`/${lang}`} className="flex items-center gap-3 group">
            <Logo className="w-9 h-9 group-hover:scale-105 transition-transform" />
            <span className="text-lg font-bold text-[var(--text-primary)] hidden sm:block">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={getHref(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--accent)] bg-[var(--accent-soft)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--bg-tertiary)] transition-colors"
              aria-label="Toggle theme"
            >
              <SunIcon size={18} className="hidden dark:block text-[var(--text-muted)]" />
              <MoonIcon size={18} className="block dark:hidden text-[var(--text-muted)]" />
            </button>

            <div className="hidden sm:flex items-center gap-0.5 p-1 rounded-lg bg-[var(--bg-tertiary)]">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLang(l)}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    l === lang
                      ? "bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-sm"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>

            <Button href="#contact" size="sm" className="ml-2">
              Hire Talent
            </Button>

            <button
              className="lg:hidden p-2 text-[var(--text-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-[var(--bg-elevated)] rounded-2xl mt-2 shadow-xl border border-[var(--border-color)] animate-fade-up">
            <div className="flex flex-col px-2 gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={getHref(item.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive(item.href)
                      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-3 mt-2 border-t border-[var(--border-color)]">
                <button onClick={toggleTheme} className="text-sm text-[var(--text-muted)]">
                  Toggle Theme
                </button>
                <div className="flex items-center gap-0.5 p-1 rounded-lg bg-[var(--bg-tertiary)]">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={switchLang(l)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-2 py-1 text-xs rounded ${
                        l === lang ? "bg-[var(--bg-primary)] text-[var(--text-primary)]" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
