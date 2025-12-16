import Link from "next/link";
import Image from "next/image";
import { Heart, Facebook } from "lucide-react";
import siteData from "@/content/site.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ];

  const projectLinks = [
    { label: "Healthcare & Medical", href: "/our-work?category=healthcare" },
    { label: "Clean Water", href: "/our-work?category=water" },
    { label: "Food & Nutrition", href: "/our-work?category=food" },
    { label: "Homes & Shelter", href: "/our-work?category=housing" },
    { label: "Children & Orphans", href: "/our-work?category=children" },
  ];

  return (
    <footer className="bg-white text-neutral-900">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-[104px] w-auto flex items-center">
                <Image
                  src="/images/logo-lwa.png"
                  alt="The Little Way Association"
                  width={157}
                  height={62}
                  className="object-contain h-[104px] w-auto"
                />
              </div>
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {siteData.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary-500 hover:text-white transition-all"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading mb-6 text-neutral-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h3 className="text-lg font-heading mb-6 text-neutral-900">Our Work</h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-heading mb-6 text-neutral-900">Support Us</h3>
            <div className="space-y-4 mb-6">
              <p className="text-neutral-600 text-sm">
                100% of your donation goes directly to those in need.
              </p>
              <a
                href="/donate"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </a>
            </div>
            <div className="pt-4 border-t border-neutral-200">
              <p className="text-xs text-neutral-500">
                Registered Charity: {siteData.registeredCharity}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {currentYear} The Little Way Association. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-neutral-700 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-neutral-500 hover:text-neutral-700 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
