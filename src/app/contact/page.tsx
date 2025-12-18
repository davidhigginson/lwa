import { Metadata } from "next";
import { Mail, Facebook, Clock, Heart, Phone, MapPin } from "lucide-react";
import siteData from "@/content/site.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with The Little Way Association. We'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with The Little Way Association. We'd love to hear from you.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-8 md:pt-48 md:pb-10 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
              Contact Us
            </h1>
            <p className="text-neutral-600">
              We&apos;d love to hear from you. Whether you have a question about our work, 
              want to make a donation, or would like to get involved, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details & Info */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-heading text-neutral-900 mb-6">
                Contact Details
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-2">Address</h3>
                      <address className="text-neutral-600 not-italic leading-relaxed">
                        The Little Way Association<br />
                        Sacred Heart House<br />
                        119 Cedars Road<br />
                        Clapham Common<br />
                        London<br />
                        SW4 0PR
                      </address>
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Telephone</h3>
                      <a 
                        href="tel:02076220466"
                        className="text-lg font-semibold text-primary-600 hover:text-primary-700"
                      >
                        020 7622 0466
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">During office hours</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Email</h3>
                      <a 
                        href="mailto:contact@littlewayassociation.com"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        contact@littlewayassociation.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mailing List Notice */}
                <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                  <p className="text-neutral-700 text-sm">
                    All our supporters are placed on our mailing list (unless they tell us otherwise) 
                    so they can receive our quarterly booklets and newsletters.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-heading text-neutral-900 mb-6">
                Quick Links
              </h2>

              <div className="space-y-6">
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Follow Us</h3>
                      <p className="text-neutral-600 mb-2">
                        Stay updated with our latest projects and news.
                      </p>
                      <a 
                        href={siteData.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Follow on Facebook →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Make a Donation</h3>
                      <p className="text-neutral-600 mb-2">
                        Support our work directly through our secure donation page.
                      </p>
                      <a 
                        href="/donate"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Donate Now →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Charity Registration */}
                <div className="border border-neutral-200 rounded-xl p-6">
                  <h3 className="font-bold text-neutral-900 mb-2">Registered Charity</h3>
                  <p className="text-neutral-600 text-sm">
                    The Little Way Association is a registered charity in England and Wales.
                  </p>
                  <p className="text-primary-600 font-medium mt-2">
                    Charity No: {siteData.registeredCharity}
                  </p>
                </div>

                {/* Daily Mass Notice */}
                <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">Daily Mass</h3>
                      <p className="text-neutral-600">
                        Mass is offered daily for all our supporters&apos; intentions. 
                        Thank you for your prayers and continued support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading text-neutral-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: "How much of my donation goes to the projects?",
                  answer: "100% of your donation goes directly to the charitable projects. We have a separate fund for administrative expenses, so every penny you give reaches those in need.",
                  verified: true
                },
                {
                  question: "Can I specify which project my donation supports?",
                  answer: "Yes, when making a donation you can specify if you'd like it to go to a particular type of project or region. If you have no preference, we'll allocate it where the need is greatest.",
                  verified: false
                },
                {
                  question: "How do I set up a regular donation?",
                  answer: "You can set up a regular monthly donation through our website or by contacting us to arrange a standing order with your bank.",
                  verified: false
                },
                {
                  question: "Is my donation eligible for Gift Aid?",
                  answer: "If you're a UK taxpayer, we can claim Gift Aid on your donation, which adds 25% to its value at no extra cost to you. Just confirm you're a UK taxpayer when donating.",
                  verified: false
                },
                {
                  question: "How can I leave a legacy gift?",
                  answer: "If you're interested in leaving a gift in your will, please contact us for more information. Legacy gifts help ensure our work continues for future generations.",
                  verified: false
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-neutral-200 group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-medium text-neutral-900">{faq.question}</span>
                    <span className="ml-4 text-neutral-400 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-neutral-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

