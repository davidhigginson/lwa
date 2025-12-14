"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Menu, X, Heart } from "lucide-react";
import siteData from "@/content/site.json";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change - compare with previous pathname
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      // Schedule the state update for the next tick to avoid synchronous setState in effect
      const timeoutId = setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-[104px] w-auto flex items-center group-hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo-lwa.png"
                alt="The Little Way Association"
                width={157}
                height={62}
                className="object-contain h-[104px] w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  pathname === item.href
                    ? "text-primary-600"
                    : "text-neutral-700 hover:text-primary-600",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-500 after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100",
                  pathname === item.href && "after:scale-x-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button as="a" href="/donate" variant="primary" size="sm">
              <Heart className="w-4 h-4" />
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-2 py-4 border-t border-neutral-100">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary-50 text-primary-600"
                    : "text-neutral-700 hover:bg-neutral-50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button as="a" href="/donate" variant="primary" className="w-full">
                <Heart className="w-4 h-4" />
                Donate Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
