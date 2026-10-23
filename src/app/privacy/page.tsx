
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Convays",
  description:
    "Learn how Convays Digital collects, uses, stores, and protects personal information.",
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>
        Convays Digital ("Convays", "we", "our", or "us") respects your privacy
        and is committed to handling personal information responsibly. This
        Privacy Policy explains how information may be collected, used, stored,
        and disclosed when you visit our website or use our services.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>
            <strong>Contact information:</strong> Name, email address, phone
            number, company name, and other details you submit through forms or
            direct communications.
          </li>
          <li>
            <strong>Project information:</strong> Requirements, business
            information, documents, and other materials you provide when
            requesting or using our services.
          </li>
          <li>
            <strong>Technical information:</strong> IP address, browser type,
            device information, pages visited, and basic diagnostic data where
            collected by our website infrastructure or tools.
          </li>
          <li>
            <strong>Communication records:</strong> Messages, enquiries, and
            correspondence exchanged with us.
          </li>
        </ul>
        <p>
          We aim to collect only information reasonably necessary for the
          relevant purpose. The information actually collected depends on the
          features and technologies used on our website.
        </p>
      </>
    ),
  },
  {
    title: "3. How We Use Information",
    content: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>Respond to enquiries and provide quotations.</li>
          <li>Deliver, maintain, and improve our services.</li>
          <li>Communicate about projects, invoices, and support requests.</li>
          <li>Maintain website security and troubleshoot technical issues.</li>
          <li>Meet applicable legal, accounting, and regulatory obligations.</li>
          <li>
            Send relevant business updates or marketing communications where
            permitted and, when required, with your consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Cookies and Similar Technologies",
    content: (
      <p>
        Our website or third-party tools may use cookies or similar technologies
        to support essential functionality, remember preferences, understand
        website usage, or measure marketing performance. The technologies used
        depend on our current website configuration. Where required by law, we
        will obtain consent before using non-essential cookies. You can manage
        cookies through your browser settings and any consent controls we
        provide.
      </p>
    ),
  },
  {
    title: "5. Sharing of Information",
    content: (
      <>
        <p>We do not sell personal information as part of our ordinary business.</p>
        <p>
          We may share information when reasonably necessary with:
        </p>
        <ul>
          <li>
            <strong>Service providers:</strong> Hosting, email, analytics,
            communication, payment, and technical service providers.
          </li>
          <li>
            <strong>Project partners:</strong> Third-party platforms or
            integration providers involved in delivering a service you request.
          </li>
          <li>
            <strong>Professional advisers:</strong> Legal, accounting, or
            compliance advisers where necessary.
          </li>
          <li>
            <strong>Authorities:</strong> Government bodies or other parties
            when disclosure is required by applicable law or a valid legal
            process.
          </li>
        </ul>
        <p>
          We seek to limit disclosures to information reasonably necessary for
          the relevant purpose.
        </p>
      </>
    ),
  },
  {
    title: "6. Third-Party Services and Integrations",
    content: (
      <p>
        Our website and projects may involve external platforms, including
        accounting software, hosting providers, APIs, analytics services, and
        marketing tools. Those providers may process information under their
        own privacy policies and terms. We do not control the privacy practices
        of independent third parties, and we encourage you to review their
        policies before using their services.
      </p>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p>
        We retain personal information for as long as reasonably necessary to
        fulfil the purposes described in this policy, provide our services,
        maintain business records, resolve disputes, enforce agreements, and
        comply with applicable legal obligations. Retention periods depend on
        the type of information and the reason it was collected. When
        information is no longer required, we will take reasonable steps to
        delete it or otherwise handle it in accordance with applicable law.
      </p>
    ),
  },
  {
    title: "8. Data Security",
    content: (
      <p>
        We use reasonable technical and organisational measures designed to
        protect information against unauthorised access, alteration, disclosure,
        or destruction. However, no method of electronic transmission or storage
        can be guaranteed to be completely secure. You should avoid sending
        passwords or other highly sensitive credentials through unsecured
        communication channels.
      </p>
    ),
  },
  {
    title: "9. International Data Transfers",
    content: (
      <p>
        Some third-party providers may store or process information outside
        India. Where such processing occurs, we will take steps required by
        applicable law in relation to the relevant transfer and processing.
      </p>
    ),
  },
  {
    title: "10. Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on applicable law and the circumstances, you may have the
          right to:
        </p>
        <ul>
          <li>Request information about personal data we process about you.</li>
          <li>Request correction or updating of inaccurate information.</li>
          <li>Request deletion of information where legally available.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Opt out of marketing communications.</li>
          <li>
            Raise a privacy concern or submit a complaint through the contact
            details below.
          </li>
        </ul>
        <p>
          We may need to verify your identity before acting on a request.
          Certain information may need to be retained where required or
          permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "11. Children's Privacy",
    content: (
      <p>
        Our website and services are intended for businesses and general
        audiences, not specifically for children. We do not knowingly collect
        children's personal information in violation of applicable law. If you
        believe a child has provided personal information to us improperly,
        please contact us so that we can review the matter.
      </p>
    ),
  },
  {
    title: "12. Marketing Communications",
    content: (
      <p>
        We may send service-related messages where necessary to respond to an
        enquiry or manage a project. Marketing communications will be sent
        where permitted by law and with consent where required. You can request
        to stop marketing emails by using an unsubscribe option, if available,
        or by contacting us directly.
      </p>
    ),
  },
  {
    title: "13. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy as our services, website, or legal
        obligations change. Updates will be published on this page with a
        revised date. We encourage you to review this page periodically.
      </p>
    ),
  },
  {
    title: "14. Contact Us",
    content: (
      <>
        <p>
          If you have questions, requests, or complaints relating to this
          Privacy Policy or our handling of personal information, contact us:
        </p>
        <p>
          <strong>Convays Digital</strong>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:legal@convays.com"
            className="font-medium underline underline-offset-4 hover:opacity-70"
          >
            legal@convays.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://convays.com"
            className="font-medium underline underline-offset-4 hover:opacity-70"
          >
            convays.com
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <header className="mb-12 border-b border-border pb-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Legal
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Your privacy matters to us. Learn how Convays handles information
            when you visit our website or work with us.
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Last updated: October 24, 2026
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                {section.title}
              </h2>

              <div className="space-y-3 text-sm leading-7 text-muted-foreground [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2 [&_strong]:font-semibold [&_strong]:text-foreground">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs leading-6 text-muted-foreground">
          This policy is a general starting point and should be reviewed to
          ensure it accurately reflects Convays&apos; actual data practices and
          applicable legal requirements.
        </p>
      </section>
    </main>
  );
}
