import { Metadata } from "next";
import { 
  Heart, 
  Repeat, 
  Church, 
  Mail,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "What You Can Do",
  description: "Discover how you can support The Little Way Association through donations, prayers, and spreading the word.",
  alternates: { canonical: "/get-involved" },
  openGraph: {
    title: "What You Can Do",
    description: "Discover how you can support The Little Way Association through donations, prayers, and spreading the word.",
    url: "/get-involved",
  },
};

const waysToHelp = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Make a Donation",
    description: "Give a one-time or recurring donation to support our projects around the world.",
    cta: { label: "Donate Now", href: "/donate" },
    featured: true,
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    title: "Regular Giving",
    description: "Set up a standing order for regular monthly giving. This helps us plan ahead and sustain long-term projects.",
    cta: { label: "Set Up Regular Giving", href: "/donate" },
    featured: true,
  },
  {
    icon: <Church className="w-8 h-8" />,
    title: "Pray for Our Mission",
    description: "Join us in prayer for all those we serve and for our missionary partners around the world.",
    cta: null,
    featured: false,
  },
];

const donationImpact = [
  { amount: "£10", impact: "will provide emergency supplies after a natural disaster" },
  { amount: "£25", impact: "will provide food for AIDS affected children in South Africa" },
  { amount: "£50", impact: "will provide basic healthcare in a leprosy clinic" },
  { amount: "£100", impact: "will help dig a well in India" },
  { amount: "£250", impact: "will build a small house for a poor family" },
  { amount: "£500", impact: "will help towards re-roofing a Mission Chapel" },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Get Involved</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
              What You Can Do
            </h1>
            <p className="text-neutral-600 mb-8">
              Will you enable a missionary priest or sister to carry the love, care and compassion of Christ to those of our brothers and sisters in dire distress and in urgent need of help?
            </p>
            <Button as="a" href="/donate" variant="primary" size="lg">
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Help Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Ways to Support Us
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Choose how you&apos;d like to make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waysToHelp.map((item) => (
              <div
                key={item.title}
                className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  item.featured
                    ? "bg-primary-50 border-2 border-primary-200"
                    : "bg-neutral-50"
                }`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  item.featured
                    ? "bg-primary-200 text-primary-700"
                    : "bg-neutral-200 text-neutral-600"
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {item.description}
                </p>
                {item.cta && (
                  <Button
                    as="a"
                    href={item.cta.href}
                    variant={item.featured ? "primary" : "outline"}
                    size="sm"
                  >
                    {item.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="section-padding bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Your Donation&apos;s Impact
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              See how different donation amounts can help those in need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {donationImpact.map((item) => (
              <div
                key={item.amount}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl font-heading text-white mb-2">
                  {item.amount}
                </div>
                <p className="text-primary-100 text-sm">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button as="a" href="/donate" variant="secondary" size="lg">
              <Heart className="w-5 h-5" />
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      {/* 100% Promise */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="text-3xl font-heading text-neutral-900 mb-6">
              100% of Your Donation Goes to Projects
            </h2>
            <p className="text-neutral-600 mb-4">
              Any donation which is sent to us by post, by banker&apos;s order, or online through this website is used entirely for the purpose(s) specified by the donor (we have a separate fund for administrative expenses).
            </p>
            <p className="text-neutral-600">
              We make sure that the money goes to help those in the greatest need by ensuring that all projects we support are supervised by the local bishop or missionary society.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-heading text-neutral-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-neutral-600 mb-8">
              Get in touch to learn more about our work or to find out how you can help.
            </p>
            <Button as="a" href="/contact" variant="primary" size="lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Make a Difference?"
        description="Your support enables missionaries to carry love, care and compassion to those in desperate need."
        primaryCTA={{ label: "Donate Now", href: "/donate" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}

