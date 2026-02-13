"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { siteConfig, serviceTypes } from "@/lib/content";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, BehanceIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

interface ContactProps {
  sectionId?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  defaultServiceType?: string;
  defaultMessage?: string;
  productName?: string;
}

interface FormData { fullName: string; email: string; company: string; serviceType: string; message: string; }

const createInitialData = (defaultServiceType = "", defaultMessage = ""): FormData => ({
  fullName: "",
  email: "",
  company: "",
  serviceType: defaultServiceType,
  message: defaultMessage,
});

export function Contact({
  sectionId = "contact",
  badgeText = "Get Started",
  title = "Ready to Scale Your Team?",
  subtitle,
  defaultServiceType = "",
  defaultMessage = "",
  productName,
}: ContactProps) {
  const initialData = useMemo(
    () => createInitialData(defaultServiceType, defaultMessage),
    [defaultServiceType, defaultMessage]
  );

  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!data.fullName.trim()) e.fullName = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.company.trim()) e.company = "Required";
    if (!data.serviceType) e.serviceType = "Required";
    if (!data.message.trim()) e.message = "Required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSent(true);
      setData(initialData);
      setTimeout(() => setSent(false), 5000);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormData]) setErrors((p) => ({ ...p, [e.target.name]: undefined }));
  };

  const options = useMemo(() => {
    const values = [...serviceTypes];
    if (defaultServiceType && !values.includes(defaultServiceType)) {
      values.unshift(defaultServiceType);
    }

    return [{ value: "", label: "Select..." }, ...values.map((t) => ({ value: t, label: t }))];
  }, [defaultServiceType]);

  return (
    <section id={sectionId} className="py-20 lg:py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal animation="fade-up">
            <span className="badge mb-4">{badgeText}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              {title}
            </h2>
          </ScrollReveal>
          {subtitle ? (
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-4">
                {subtitle}
              </p>
            </ScrollReveal>
          ) : null}
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal animation="fade-up" delay={200}>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-5">Contact Information</h3>
              <div className="space-y-3">
                <a href={"mailto:" + siteConfig.contact.email} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[#4A1F6E] dark:hover:border-[#FFB951] transition-colors group">
                  <div className="icon-box w-10 h-10"><MailIcon size={16} /></div>
                  <div>
                    <span className="block text-xs text-[var(--text-muted)]">Email</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{siteConfig.contact.email}</span>
                  </div>
                </a>
                <a href={"tel:" + siteConfig.contact.phone.replace(/\s/g, "")} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[#4A1F6E] dark:hover:border-[#FFB951] transition-colors group">
                  <div className="icon-box w-10 h-10"><PhoneIcon size={16} /></div>
                  <div>
                    <span className="block text-xs text-[var(--text-muted)]">Phone</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{siteConfig.contact.phone}</span>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <div className="icon-box w-10 h-10"><MapPinIcon size={16} /></div>
                  <div>
                    <span className="block text-xs text-[var(--text-muted)]">Location</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={250}>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Follow Us</h4>
              <div className="flex gap-2">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener" className="icon-box w-10 h-10" aria-label="LinkedIn"><LinkedInIcon size={16} /></a>
                <a href={siteConfig.social.behance} target="_blank" rel="noopener" className="icon-box w-10 h-10" aria-label="Behance"><BehanceIcon size={16} /></a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="card p-6 lg:p-8">
                {productName ? (
                  <div className="mb-5 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-3">
                    <p className="text-sm text-[var(--text-primary)]">
                      Booking demo for <span className="font-semibold">{productName}</span>
                    </p>
                  </div>
                ) : null}

                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A76FD9] to-[#FFB951] flex items-center justify-center mb-4">
                      <CheckIcon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      {productName ? "Our product team will contact you with demo slots shortly." : "We will get back to you within 24 hours."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label="Full Name" name="fullName" value={data.fullName} onChange={onChange} placeholder="John Doe" error={errors.fullName} />
                      <Input label="Email" name="email" type="email" value={data.email} onChange={onChange} placeholder="john@company.com" error={errors.email} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input label="Company" name="company" value={data.company} onChange={onChange} placeholder="Company Inc." error={errors.company} />
                      <Select label="Service Type" name="serviceType" value={data.serviceType} onChange={onChange} options={options} error={errors.serviceType} />
                    </div>
                    <Textarea label="Message" name="message" value={data.message} onChange={onChange} placeholder="Tell us about your project..." error={errors.message} />
                    <Button type="submit" className="w-full" size="lg" icon={<ArrowRightIcon />}>
                      {productName ? "Request Product Demo" : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
