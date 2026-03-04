"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Online Shop
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/contact" className="text-xl font-bold tracking-tight">
            Contact
          </Link>
          <Link href="/cart" className="text-xl font-bold tracking-tight">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
