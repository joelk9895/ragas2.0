"use client";
import Link from "next/link";
import { useState } from "react";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className={`text-xl ${tenorSans.className}`}>
            ragas
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/docs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Product
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/community"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </Link>
          <Link
            href="/get-started"
            className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get started
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              // X icon when menu is open
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              // Hamburger icon when menu is closed
              <>
                <path d="M4 12h16M4 6h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t px-4 py-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <Link
              href="/docs"
              className="text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/blog"
              className="text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/community"
              className="text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/get-started"
              className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
