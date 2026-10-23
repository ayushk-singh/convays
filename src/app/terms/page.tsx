
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Convays",
  description:
    "Read the Terms and Conditions governing Convays Digital's website and services.",
};

const sections = [
  {
    title: "1. About Our Services",
    content: (
      <>
        <p>
          Convays Digital provides website design and development, business
          process automation, accounting software implementation, dashboard
          development, and digital marketing services.
        </p>
        <p>
          Project scope, deliverables, timelines, and fees will be agreed upon
          separately in a written proposal, quotation, or service agreement.
        </p>
      </>
    ),
  },
  {
    title: "2. Client Responsibilities",
    content: (
      <ul>
        <li>Provide accurate information and project requirements.</li>
        <li>Supply necessary content, access, credentials, and approvals.</li>
        <li>Ensure supplied materials can legally be used.</li>
        <li>Review deliverables and communicate feedback promptly.</li>
      </ul>
    ),
  },
  {
    title: "3. Project Scope and Changes",
    content: (
      <p>
        Requests outside the agreed scope may involve additional fees and
        revised timelines. Material changes will be communicated for approval
        before additional work begins.
      </p>
    ),
  },
  {
    title: "4. Pricing and Payment",
    content: (
      <>
        <ul>
          <li>
            <strong>50% advance:</strong> Payable before project work begins.
          </li>
          <li>
            <strong>Final 50%:</strong> Payable within 15 calendar days of
            project completion.
          </li>
          <li>
            <strong>Additional work:</strong> Charged separately when agreed.
          </li>
          <li>
            <strong>Taxes:</strong> Applicable taxes, including GST where
            required, will be charged.
          </li>
        </ul>
        <p>
          Overdue payments may result in work being paused or final deliverables
          being withheld, subject to the applicable agreement and law. Refunds
          and cancellations are governed by the project agreement and applicable
          law.
        </p>
      </>
    ),
  },
  {
    title: "5. Timelines and Delivery",
    content: (
      <p>
        Delivery dates are estimates and may change because of scope changes,
        delayed approvals, third-party dependencies, technical issues, or
        circumstances beyond our reasonable control. We will make reasonable
        efforts to communicate material delays.
      </p>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <p>
        Clients retain ownership of materials they provide. Unless otherwise
        agreed, ownership of commissioned deliverables transfers to the client
        after full payment, to the extent agreed in writing and permitted by
        law. Convays retains its pre-existing tools, reusable code, frameworks,
        and know-how. Third-party assets remain subject to their respective
        licences.
      </p>
    ),
  },
  {
    title: "7. Third-Party Services",
    content: (
      <p>
        Integrations may rely on external platforms, APIs, hosting providers,
        and software. Convays does not control third-party availability,
        pricing, security, or continued compatibility. Third-party terms and
        fees may apply.
      </p>
    ),
  },
  {
    title: "8. Confidentiality and Privacy",
    content: (
      <p>
        We take reasonable measures to protect confidential business information.
        Personal data will be handled in accordance with our Privacy Policy and
        applicable Indian data protection laws. Clients should share only
        necessary information and protect their account credentials.
      </p>
    ),
  },
  {
    title: "9. Warranties and Support",
    content: (
      <p>
        We perform agreed services with reasonable professional care. Unless
        agreed in writing, ongoing maintenance, hosting, updates, and support
        are not included. We do not guarantee specific revenue, search rankings,
        advertising performance, or uninterrupted third-party services.
      </p>
    ),
  },
  {
    title: "10. Limitation of Liability",
    content: (
      <p>
        To the extent permitted by law, Convays will not be liable for indirect
        or consequential losses such as lost profits, revenue, or business
        opportunities. Liability will be determined under applicable law and
        any valid project agreement. Nothing in these terms excludes liability
        or statutory consumer rights that cannot legally be excluded.
      </p>
    ),
  },
  {
    title: "11. Suspension and Termination",
    content: (
      <p>
        Projects may be terminated in accordance with the applicable agreement.
        Services may be suspended for material breaches, security risks,
        unlawful use, or overdue payments, with notice and an opportunity to
        resolve the issue where appropriate. Outstanding payments and
        deliverables will be addressed under the agreement and applicable law.
      </p>
    ),
  },
  {
    title: "12. Website Use",
    content: (
      <ul>
        <li>Do not attempt unauthorized access to our systems.</li>
        <li>Do not disrupt website functionality or upload malicious code.</li>
        <li>Do not misuse our content, branding, or intellectual property.</li>
        <li>Use the website in compliance with applicable laws.</li>
      </ul>
    ),
  },
  {
    title: "13. Changes to These Terms",
    content: (
      <p>
        We may update these terms by publishing a revised version on this page.
        Changes apply prospectively, subject to applicable law and existing
        project agreements.
      </p>
    ),
  },
  {
    title: "14. Governing Law and Jurisdiction",
    content: (
      <p>
        These terms are governed by the laws of India. Subject to applicable
        law, courts of competent jurisdiction in Chennai, Tamil Nadu, shall
        have jurisdiction over disputes. Mandatory consumer rights and remedies
        remain unaffected.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="mb-12 border-b border-border pb-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Legal
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Please read these terms carefully before using the Convays website
            or engaging our services.
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Last updated: October 24, 2026
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                {section.title}
              </h2>

              <div className="space-y-3 text-sm leading-7 text-muted-foreground [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                {section.content}
              </div>
            </section>
          ))}

          <section className="space-y-3 border-t border-border pt-8">
            <h2 className="text-xl font-semibold tracking-tight">
              15. Contact Us
            </h2>

            <p className="text-sm leading-7 text-muted-foreground">
              For questions about these terms, contact Convays Digital.
            </p>

            <a
              href="mailto:legal@convays.com"
              className="inline-flex text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              legal@convays.com
            </a>

            <p>
              <a
                href="https://convays.com"
                className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                convays.com
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs leading-6 text-muted-foreground">
          This document is provided as a general sample and is not legal advice.
          The final terms should be reviewed for your business, services, and
          applicable law.
        </p>
      </section>
    </main>
  );
}
