import { Metadata } from "next";
import Image from "next/image";
import { Heart, CheckCircle2, Church, BookOpen, Sparkles } from "lucide-react";
import { CTASection } from "@/components/sections";
import aboutData from "@/content/about.json";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about The Little Way Association, our mission, and our patron St. Therese of Lisieux.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
              {aboutData.hero.title}
            </h1>
            <p className="text-xl text-neutral-600">
              {aboutData.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.stats.map((stat) => (
              <div key={stat.label} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-heading text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin & Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading text-neutral-900 mb-6">
              {aboutData.origin.title}
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              {aboutData.origin.content}
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading text-neutral-900 mb-4">
                  {aboutData.mission.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {aboutData.mission.content}
                </p>

                <h3 className="text-2xl font-heading text-neutral-900 mb-4">
                  {aboutData.supporters.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {aboutData.supporters.content}
                </p>

                <h3 className="text-2xl font-heading text-neutral-900 mb-4">
                  {aboutData.accountability.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {aboutData.accountability.content}
                </p>
              </div>

              <div>
                <div className="bg-primary-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-heading text-neutral-900 mb-6">
                    {aboutData.whatWeFund.title}
                  </h3>
                  <ul className="space-y-4">
                    {aboutData.whatWeFund.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 bg-secondary-50 rounded-2xl p-8 border border-secondary-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Church className="w-6 h-6 text-secondary-600" />
                    <h3 className="text-xl font-heading text-neutral-900">
                      {aboutData.dailyMass.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600">
                    {aboutData.dailyMass.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* St. Therese Biography Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🌹</span>
                <span>{aboutData.stTherese.subtitle}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">
                {aboutData.stTherese.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {aboutData.stTherese.intro}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-200 to-primary-300 shadow-xl">
                    <Image
                      src="/images/about/therese.jpg"
                      alt="St. Therese of Lisieux"
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 384px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 text-center rounded-2xl">
                      <h3 className="text-xl font-heading text-white mb-1">
                        St. Therese of Lisieux
                      </h3>
                      <p className="text-white/90 text-sm">1873 - 1897</p>
                      <p className="text-white/80 text-sm mt-1">Doctor of the Church</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Biography Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-heading text-neutral-900">🔴 Early Life</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {aboutData.stTherese.biography}
                  </p>

                  <h3 className="text-xl font-heading text-neutral-900 mt-8">🔴 Life in the Convent</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {aboutData.stTherese.conventLife}
                  </p>

                  <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-8 bg-primary-50 rounded-r-lg">
                    <p className="text-neutral-700 italic text-lg mb-0">
                      &ldquo;{aboutData.stTherese.quote1}&rdquo;
                    </p>
                    <cite className="text-primary-600 font-medium not-italic text-sm">
                      — St. Therese of Lisieux
                    </cite>
                  </blockquote>

                  <h3 className="text-xl font-heading text-neutral-900">🔴 Her Death</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {aboutData.stTherese.death}
                  </p>

                  <h3 className="text-xl font-heading text-neutral-900 mt-8">🔴 Her Legacy</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {aboutData.stTherese.legacy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Little Way Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>🔴 Her Spirituality</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">
                {aboutData.littleWay.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {aboutData.littleWay.intro}
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-heading text-neutral-900 mb-4">🔴 The Foundations</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {aboutData.littleWay.meaning}
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-heading text-neutral-900 mb-4">🔴 Living the Little Way</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {aboutData.littleWay.practice}
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-heading text-neutral-900 mb-4">🔴 Simplicity in Spirituality</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {aboutData.littleWay.simplicity}
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-heading text-neutral-900 mb-4">🔴 Relevance Today</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {aboutData.littleWay.modernRelevance}
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  {aboutData.littleWay.prayer}
                </p>
              </div>

              <div className="bg-primary-600 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-primary-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-heading text-white mb-4">🔴 Her Mission Continues</h3>
                    <p className="text-primary-100 leading-relaxed mb-6">
                      {aboutData.littleWay.mission}
                    </p>
                    <blockquote className="border-l-4 border-primary-300 pl-6 py-2">
                      <p className="text-white italic text-lg">
                        &ldquo;{aboutData.littleWay.closingQuote}&rdquo;
                      </p>
                      <cite className="text-primary-200 font-medium not-italic text-sm">
                        — St. Therese
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading text-neutral-900 mb-6">
              {aboutData.howToHelp.title}
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              {aboutData.howToHelp.content}
            </p>
            <p className="text-neutral-500 text-sm">
              Registered Charity No. 235703
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="🔴 Join Our Mission"
        description={aboutData.appeal.description}
      />
    </>
  );
}
