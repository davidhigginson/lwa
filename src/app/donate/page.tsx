import { Metadata } from "next";
import Link from "next/link";
import { Heart, ExternalLink, CreditCard, Building2, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { DonationForm } from "@/components/sections/DonationForm";
import siteData from "@/content/site.json";

export const metadata: Metadata = {
  title: "Donate",
  description: "Make a donation to The Little Way Association and help those in greatest need around the world.",
};

// 🔴 CONTENT NEEDED: Replace these example impacts with real data from LWA
// These are placeholder examples - get actual impact data from the charity
const donationImpact = [
  { amount: 10, impact: "🔴 [Add real impact for £10]" },
  { amount: 25, impact: "🔴 [Add real impact for £25]" },
  { amount: 50, impact: "🔴 [Add real impact for £50]" },
  { amount: 100, impact: "🔴 [Add real impact for £100]" },
  { amount: 250, impact: "🔴 [Add real impact for £250]" },
  { amount: 500, impact: "🔴 [Add real impact for £500]" },
];

interface DonatePageProps {
  searchParams: Promise<{ type?: string; amount?: string }>;
}

export default async function DonatePage({ searchParams }: DonatePageProps) {
  const params = await searchParams;
  const donationType = params.type || "single";
  const presetAmount = params.amount ? parseInt(params.amount) : undefined;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 md:pt-48 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Make a Difference</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
              Please Make a Donation
            </h1>
            <p className="text-xl text-neutral-600 mb-4">
              Will you enable a missionary priest or sister to carry the love, care and compassion of Christ to those of our brothers and sisters in dire distress and in urgent need of help?
            </p>
            <p className="text-lg text-neutral-500">
              Your gift will mean a chance of health and happiness, perhaps even the difference between life and death. Every penny you send will be gratefully received.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Promise Banner */}
      <section className="py-6 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <CheckCircle2 className="w-8 h-8 text-white" />
            <div>
              <p className="text-white font-medium text-lg">
                100% of your donation goes directly to charitable projects
              </p>
              <p className="text-primary-100 text-sm">
                We have a separate fund for administrative expenses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading text-neutral-900 mb-4">
                Choose How to Donate
              </h2>
              <p className="text-neutral-600">
                Select the donation method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1: Existing CharityCheckout */}
              <div className="bg-neutral-50 rounded-2xl p-8 border-2 border-neutral-200 hover:border-primary-300 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                  <ExternalLink className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-2xl font-heading text-neutral-900 mb-3">
                  Donate via CharityCheckout
                </h3>
                <p className="text-neutral-600 mb-6">
                  Use our trusted CharityCheckout platform for a quick and secure donation. 
                  This is our established donation system used for many years.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Quick and easy process
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Secure payment processing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Gift Aid option available
                  </li>
                </ul>
                <Button
                  as="a"
                  href={siteData.donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Donate with CharityCheckout
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>

              {/* Option 2: Modern Stripe-style (New) */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border-2 border-primary-200 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-secondary-500 text-white text-xs font-medium rounded-full">
                    NEW
                  </span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center mb-6">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-heading text-neutral-900 mb-3">
                  Quick Donate
                </h3>
                <p className="text-neutral-600 mb-6">
                  Use our new streamlined donation form. Choose an amount, add your details, 
                  and complete your donation in seconds.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Modern, fast checkout
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Card & Apple/Google Pay
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    One-time or monthly options
                  </li>
                </ul>
                <Button
                  as="a"
                  href="#donate-form"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Use Quick Donate
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Donate Form */}
      <section id="donate-form" className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <DonationForm 
            defaultType={donationType as 'single' | 'monthly'} 
            presetAmount={presetAmount}
          />
        </div>
      </section>

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
              <Link
                key={item.amount}
                href={`#donate-form`}
                className="group bg-neutral-50 hover:bg-primary-50 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-3xl font-heading text-primary-600 mb-2 group-hover:text-primary-700">
                  £{item.amount}
                </div>
                <p className="text-neutral-600 text-sm group-hover:text-neutral-700">
                  {item.impact}
                </p>
              </Link>
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

