"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    id: "getting-started",
    label: "Getting Started",
    href: "/signup",
  },
  {
    id: "faqs",
    label: "FAQs",
    href: "/faqs",
  },
] as const;

export function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) => (pathname.includes(href) ? true : false);

  return (
    <nav className="flex items-center justify-between w-full p-4 lg:p-6 bg-transparent sticky top-0 left-0 z-50">
      <Link href="/" className="text-2xl/6 font-semibold tracking-tight">
        ahho!
      </Link>
      <ul className="flex items-center gap-3">
        {NAV_LINKS.map((link) => (
          <li key={link.id} className="space-x-2 lg:space-x-4">
            <Link
              href={link.href}
              className={`text-sm tracking-tight font-mono ${isActive(link.href) && "underline underline-offset-2"}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
