"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/site";

const navigation = [
  ["Home", "/#hero"],
  ["Services", "/#services"],
  ["About", "/#about"],
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/#hero" onClick={() => setIsOpen(false)}>
          <span className="brand__logo-wrap">
            <Image
              className="brand__logo"
              src="/amos-logo-transparent.webp"
              alt="Aamos Wedding Planners"
              fill
              sizes="160px"
              priority
            />
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            className="header-cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Start Planning
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="mobile-menu__cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Start Planning
        </a>
      </div>
    </header>
  );
}
