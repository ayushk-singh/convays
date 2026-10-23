
"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";

// If you encounter a Next.js metadata error, move metadata to a separate
// server component. See the note below.

const services = [
  "Business Process Automation",
  "Accounting Software Implementation",
  "Dashboard Development",
  "Digital Marketing",
  "Website Development",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const service = String(data.get("service") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Project enquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nService: ${service}\nBudget: ${budget || "Not specified"}\n\nProject details:\n${message}`,
    );

    window.location.href = `mailto:legal@convays.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contact Convays
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something
            <span className="block text-muted-foreground">
              that moves you forward.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Tell us about your business, your challenges, and what you want to
            achieve. We&apos;ll explore a practical solution together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact information */}
          <aside className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Whether you need to streamline a process, connect your software,
                build a dashboard, or grow your digital presence, we&apos;re
                here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Email us</h3>
                  <a
                    href="mailto:legal@convays.com"
                    className="mt-1 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    legal@convays.com
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    For general enquiries and project discussions
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Our website</h3>
                  <a
                    href="https://convays.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    convays.com
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Explore our services and solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border p-6 sm:p-8">
              <p className="text-sm font-semibold">What happens next?</p>

              <ol className="mt-5 space-y-5">
                <li className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-xs">
                    01
                  </span>
                  <div>
                    <p className="text-sm font-medium">Tell us about your idea</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Share your goals and the challenges you&apos;re facing.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-xs">
                    02
                  </span>
                  <div>
                    <p className="text-sm font-medium">Discuss the approach</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      We&apos;ll review your requirements and potential solutions.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-xs">
                    03
                  </span>
                  <div>
                    <p className="text-sm font-medium">Plan the next steps</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Align on scope, timelines, and pricing before work begins.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </aside>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-border p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Tell us about your project
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Fill in the details below and prepare an enquiry email.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Work email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company (optional)"
                  maxLength={150}
                  className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-foreground"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    What do you need? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">
                    Estimated budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
                  >
                    <option value="">Not sure yet</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                    <option value="₹50,000–₹1,00,000">
                      ₹50,000–₹1,00,000
                    </option>
                    <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  placeholder="Tell us about your requirements, current challenges, and goals..."
                  className="w-full resize-y rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-foreground"
                />
                <p className="text-xs text-muted-foreground">
                  Please avoid including passwords or sensitive financial
                  information.
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-80 sm:w-auto"
              >
                Prepare enquiry email
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              {submitted && (
                <p role="status" className="text-sm leading-6 text-muted-foreground">
                  Your email application should open with the enquiry details.
                  Please review and send the email to complete your enquiry.
                  If it did not open, email legal@convays.com directly.
                </p>
              )}

              <p className="text-xs leading-5 text-muted-foreground">
                By contacting us, you acknowledge our{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
