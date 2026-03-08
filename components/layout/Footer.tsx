"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <p className="text-sm text-muted-foreground">
            This is a Noroff project made by Sander Torgersen
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} OnlineShop. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
