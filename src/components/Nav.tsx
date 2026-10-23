"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { name: "Who We Are", href: "/#who-we-are" },
  // { name: "Insights", href: "#trusted-by" }, // will add it later 
  { name: "Solutions", href: "/#solutions" },
  { name: "Start Here", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-dark.svg"
            width={140}
            height={40}
            alt="Convays Digital"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-100 transition-opacity hover:opacity-70"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="
            ml-8 hidden
            rounded-lg
            bg-gradient-to-r from-cyan-300 to-emerald-400
            px-5 py-2
            text-sm font-medium text-zinc-900
            transition-all duration-200
            hover:-translate-y-0.5 hover:opacity-90
            lg:block
          "
        >
          Let’s talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto flex flex-col gap-1 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-zinc-900 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                rounded-lg
                bg-gradient-to-r from-cyan-300 to-emerald-400
                px-5 py-2.5
                text-center text-sm font-medium text-zinc-900
              "
            >
              Let’s talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}