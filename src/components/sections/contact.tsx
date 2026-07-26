"use client";

import * as React from "react";
import { Copy, Download, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/content/profile";

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_USER = "hardikbaraiya35";
const EMAIL_DOMAIN = "gmail.com";

function ObfuscatedEmail() {
  const [address, setAddress] = React.useState<string | null>(null);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate: keeps the address out of the server-rendered HTML so scrapers can't harvest it from source.
    setAddress(`${EMAIL_USER}@${EMAIL_DOMAIN}`);
  }, []);

  const handleCopy = async () => {
    const value = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
    await navigator.clipboard.writeText(value);
    toast("Email copied to clipboard");
  };

  return (
    <div className="flex min-w-0 flex-wrap items-center gap-2 font-mono text-[length:var(--text-step-1)]">
      <a
        href={address ? `mailto:${address}` : undefined}
        className="min-w-0 break-all text-foreground underline decoration-border underline-offset-4 hover:text-primary focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2"
      >
        {address ?? "loading…"}
      </a>
      <Button
        variant="ghost"
        size="icon-sm"
        className="rounded-none"
        aria-label="Copy email address"
        onClick={handleCopy}
      >
        <Copy className="size-3.5" />
      </Button>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = React.useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState<FormErrors>({});

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Enter a message.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}?subject=${subject}&body=${body}`;
    toast("Opening your email client…");
  };

  return (
    <section id="contact" className="border-b border-border" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-center gap-3 font-mono text-[0.694rem] tracking-[0.1em] text-muted-foreground uppercase">
          <span className="text-primary">fig.06</span>
          <span>contact</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="mb-6 font-[family-name:var(--font-display)] text-[length:var(--text-step-6)] leading-[1.1] font-bold tracking-[-0.02em]"
            >
              Contact
            </h2>
            <p className="mb-8 max-w-md text-[length:var(--text-step-1)] text-muted-foreground">
              Open to Software Developer in Test / SDET roles. The fastest path is email — the form on
              this page routes there directly.
            </p>

            <dl className="space-y-5">
              <div>
                <dt className="font-mono text-[0.694rem] tracking-[0.08em] text-muted-foreground uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <ObfuscatedEmail />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.694rem] tracking-[0.08em] text-muted-foreground uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-[length:var(--text-step-1)]">{profile.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.694rem] tracking-[0.08em] text-muted-foreground uppercase">
                  Elsewhere
                </dt>
                <dd className="mt-1">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[length:var(--text-step-1)] underline decoration-border underline-offset-4 hover:text-primary focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2"
                  >
                    LinkedIn
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>

            <Button
              className="mt-10 rounded-none font-mono text-sm tracking-[0.04em] uppercase"
              nativeButton={false}
              render={<a href={profile.resumeHref} download />}
            >
              Download résumé
              <Download className="size-4" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="font-mono text-[0.694rem] tracking-[0.08em] uppercase">
                Name
              </Label>
              <Input
                id="contact-name"
                name="name"
                className="rounded-none border-border"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name && (
                <p id="contact-name-error" className="text-[0.833rem] text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email" className="font-mono text-[0.694rem] tracking-[0.08em] uppercase">
                Email
              </Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                className="rounded-none border-border"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email && (
                <p id="contact-email-error" className="text-[0.833rem] text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message" className="font-mono text-[0.694rem] tracking-[0.08em] uppercase">
                Message
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={5}
                className="rounded-none border-border"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message && (
                <p id="contact-message-error" className="text-[0.833rem] text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" className="rounded-none font-mono text-sm tracking-[0.04em] uppercase">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
