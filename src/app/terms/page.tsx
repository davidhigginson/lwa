import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for The Little Way Association website.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions",
    description: "Terms and Conditions for The Little Way Association website.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-neutral-600 leading-relaxed">
              Welcome to The Little Way Association website. By accessing and using this website, you accept and agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Use of Website</h2>
            <p className="text-neutral-600 leading-relaxed">
              This website is provided for information about The Little Way Association and to enable donations to our charitable work. You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Donations</h2>
            <p className="text-neutral-600 leading-relaxed">
              All donations made through this website are processed securely through CharityCheckout. Any donation which is sent to us by post, by banker&apos;s order, or online through this website is used entirely for the purpose(s) specified by the donor. We have a separate fund for administrative expenses.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We make sure that the money goes to help those in the greatest need by ensuring that all projects we support are supervised by the local bishop or missionary society.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Intellectual Property</h2>
            <p className="text-neutral-600 leading-relaxed">
              All content on this website, including text, images, and graphics, is the property of The Little Way Association unless otherwise stated. You may not reproduce, distribute, or use any content without our prior written permission.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-neutral-600 leading-relaxed">
              The Little Way Association shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Changes to Terms</h2>
            <p className="text-neutral-600 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page.
            </p>

            <h2 className="text-2xl font-heading text-neutral-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-neutral-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us through our Contact page.
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

