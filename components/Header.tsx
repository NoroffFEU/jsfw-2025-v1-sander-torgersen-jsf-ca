"use client";

import { useCartStore } from "@/lib/hooks/useCartStore";
import { useSidebarMenu } from "@/lib/hooks/useSidebarMenu";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const toggleSidebar = useSidebarMenu((state) => state.toggle);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
  ];

  const totalItems = items
    ? items.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const cartBadge = () => {
    if (totalItems > 0) {
      return (
        <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
          {totalItems}
        </span>
      );
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Online Shop
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <button
            className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle cart sidebar"
            onClick={toggleSidebar}
          >
            <ShoppingCart className="h-5.5 w-5.5 cursor-pointer" />

            {cartBadge()}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-5.5 w-5.5 cursor-pointer" />
            {cartBadge()}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 cursor-pointer" />
            ) : (
              <Menu className="h-6 w-6 cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen ? (
        <nav className="border-t md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
