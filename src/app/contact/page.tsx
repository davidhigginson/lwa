import { Metadata } from "next";
import { Mail, Facebook, Clock, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui";
import siteData from "@/content/site.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with The Little Way Association. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
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
            <p className="text-xl text-neutral-600">
              We&apos;d love to hear from you. Whether you have a question about our work, 
              want to make a donation, or would like to get involved, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Please select...</option>
                    <option value="donation">Making a Donation</option>
                    <option value="project">Question About a Project</option>
                    <option value="legacy">Leaving a Legacy Gift</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-neutral-600">
                    I would like to receive updates about The Little Way Association&apos;s work and projects.
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-heading text-neutral-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Info Cards */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-1">Email</h3>
                      <p className="text-neutral-600">
                        For general enquiries, please use the contact form or email us.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-1">Follow Us</h3>
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
                      <h3 className="font-medium text-neutral-900 mb-1">Make a Donation</h3>
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
                  <h3 className="font-medium text-neutral-900 mb-2">Registered Charity</h3>
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
                      <h3 className="font-medium text-neutral-900 mb-1">Daily Mass</h3>
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
            
            {/* 🔴 FAQ VERIFICATION NEEDED: Please verify all answers are accurate for LWA */}
            <p className="text-center text-red-600 text-sm mb-6 bg-red-50 py-2 rounded-lg">
              🔴 Please verify all FAQ answers are accurate for The Little Way Association
            </p>

            <div className="space-y-4">
              {[
                {
                  question: "How much of my donation goes to the projects?",
                  answer: "100% of your donation goes directly to the charitable projects. We have a separate fund for administrative expenses, so every penny you give reaches those in need.",
                  verified: true
                },
                {
                  question: "Can I specify which project my donation supports?",
                  answer: "🔴 [VERIFY] Yes, when making a donation you can specify if you'd like it to go to a particular type of project or region. If you have no preference, we'll allocate it where the need is greatest.",
                  verified: false
                },
                {
                  question: "How do I set up a regular donation?",
                  answer: "🔴 [VERIFY] You can set up a regular monthly donation through our website or by contacting us to arrange a standing order with your bank.",
                  verified: false
                },
                {
                  question: "Is my donation eligible for Gift Aid?",
                  answer: "🔴 [VERIFY] If you're a UK taxpayer, we can claim Gift Aid on your donation, which adds 25% to its value at no extra cost to you. Just confirm you're a UK taxpayer when donating.",
                  verified: false
                },
                {
                  question: "How can I leave a legacy gift?",
                  answer: "🔴 [VERIFY] If you're interested in leaving a gift in your will, please contact us for more information. Legacy gifts help ensure our work continues for future generations.",
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

