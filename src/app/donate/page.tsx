import { Metadata } from "next";
import { Heart, ExternalLink, Building2, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { TestimonialsGrid } from "@/components/sections";
import siteData from "@/content/site.json";

export const metadata: Metadata = {
  title: "Donate",
  description: "Make a donation to The Little Way Association and help those in greatest need around the world.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate",
    description: "Make a donation to The Little Way Association and help those in greatest need around the world.",
    url: "/donate",
  },
};

const donationImpact = [
  { amount: 10, impact: "will provide emergency supplies after a natural disaster" },
  { amount: 25, impact: "will provide food for AIDS affected children in South Africa" },
  { amount: 50, impact: "will provide basic healthcare in a leprosy clinic" },
  { amount: 100, impact: "will help dig a well in India" },
  { amount: 250, impact: "will build a small house for a poor family" },
  { amount: 500, impact: "will help towards re-roofing a Mission Chapel" },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero Section with CTA */}
      <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Hero Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Heart className="w-4 h-4" />
                  <span>Make a Difference</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
                  Please Make a Donation
                </h1>
                <p className="text-neutral-600 text-base md:text-lg mb-4">
                  Enable missionary priests and sisters to carry the love and compassion of Christ to those in dire need. Your gift could mean the difference between life and death.
                </p>
                <p className="text-neutral-600 text-base md:text-lg">
                  Whether you give once or set up a regular donation, every contribution makes a lasting difference in the lives of the poorest of the poor around the world.
                </p>
              </div>

              {/* Right Column - Donation CTA Card */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border-2 border-primary-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading text-neutral-900 mb-1">
                      Donate
                    </h2>
                    <p className="text-neutral-600">
                      Our trusted platform for quick and secure donations
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Quick & easy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Secure payment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Gift Aid option
                  </li>
                </ul>
                <Button
                  as="a"
                  href={siteData.donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full"
                  size="lg"
                >
                  Donate Now
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 100% Promise Banner */}
      <section className="py-3 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
            <p className="text-white font-medium text-sm">
              100% of your donation goes directly to charitable projects
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsGrid 
        title="Words from Those We Serve"
        subtitle="Messages of gratitude from missionaries around the world"
      />

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-neutral-900 mb-4">
              See Your Impact
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Every donation makes a real difference. Here&apos;s how different amounts can help:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {donationImpact.map((item) => (
              <div
                key={item.amount}
                className="bg-neutral-50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-heading text-primary-600 mb-2">
                  £{item.amount}
                </div>
                <p className="text-neutral-600 text-sm">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-white mb-4">
              Other Ways to Give
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              There are several other ways you can support our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-neutral-800 rounded-xl p-8">
              <Building2 className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-xl font-heading text-white mb-3">Bank Transfer</h3>
              <p className="text-neutral-400 text-sm">
                Contact us for our bank details to make a direct transfer or set up a standing order.
              </p>
            </div>

            <div className="bg-neutral-800 rounded-xl p-8">
              <Heart className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-xl font-heading text-white mb-3">Leave a Legacy</h3>
              <p className="text-neutral-400 text-sm">
                Remember The Little Way Association in your will for a lasting gift.
              </p>
            </div>

            <div className="bg-neutral-800 rounded-xl p-8">
              <Shield className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-xl font-heading text-white mb-3">Gift Aid</h3>
              <p className="text-neutral-400 text-sm">
                UK taxpayers can boost their donation by 25% at no extra cost.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button as="a" href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us for More Info
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary-500" />
              <span className="text-neutral-600">Secure & Encrypted</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-neutral-200" />
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-500" />
              <span className="text-neutral-600">Registered Charity: {siteData.registeredCharity}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-neutral-200" />
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary-500" />
              <span className="text-neutral-600">100% to Charitable Projects</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

