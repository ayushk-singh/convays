import Link from "next/link";
import Image from "next/image";

const navColumns = [
  {
    links: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "#solutions" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.9 2H22l-7.7 8.8L23.3 22H16.6l-5.2-6.8L5.4 22H2.3l8.2-9.4L1.7 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 4h-1.8l12.1 16Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.87V21h-4V9Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo/logo-dark.svg"
            width={140}
            height={40}
            alt="Convays Digital"
          />
        </Link>

        {/* Nav columns */}
        <nav className="flex flex-1 justify-center gap-16">
          {navColumns.map((col, i) => (
            <ul key={i} className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* Social */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#1a1a1d] transition-transform hover:scale-105"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <span className="text-sm text-gray-200">Follow Us</span>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Convays Digital Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}