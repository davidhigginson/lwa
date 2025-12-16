import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Little Way Association website.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy",
    description: "Privacy Policy for The Little Way Association website.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-neutral-600 leading-relaxed">
              The Little Way Association is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-neutral-600 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="text-neutral-600 list-disc pl-6 space-y-2">
              <li>Make a donation</li>
              <li>Contact us through our website</li>
              <li>Sign up for our communications</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mt-4">
              This information may include your name, email address, postal address, and payment details (which are processed securely by our payment provider, CharityCheckout).
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-neutral-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="text-neutral-600 list-disc pl-6 space-y-2">
              <li>Process your donations</li>
              <li>Send you acknowledgement of your donation</li>
              <li>Respond to your enquiries</li>
              <li>Send you information about our work (if you have opted in)</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Data Security</h2>
            <p className="text-neutral-600 leading-relaxed">
              We take appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All online donations are processed through secure, encrypted connections.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-neutral-600 leading-relaxed">
              We use CharityCheckout to process online donations. Your payment information is handled directly by CharityCheckout in accordance with their own privacy policy and security standards.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-neutral-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="text-neutral-600 list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Cookies</h2>
            <p className="text-neutral-600 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-neutral-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-neutral-600 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us through our Contact page.
            </p>

            <p className="text-neutral-500 text-sm mt-8">
              The Little Way Association is a registered charity (No. 235703).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

