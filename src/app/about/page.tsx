import { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections";
import { getAboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about The Little Way Association, our mission, and our patron St. Therese of Lisieux.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description: "Learn about The Little Way Association, our mission, and our patron St. Therese of Lisieux.",
    url: "/about",
  },
};

export default async function AboutPage() {
  const aboutData = await getAboutContent();
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900">
              {aboutData.hero.title}
            </h1>
            {aboutData.hero.subtitle && (
              <p className="text-xl text-neutral-600 mt-4">
                {aboutData.hero.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading text-neutral-900 mb-6">
              {aboutData.origin.title}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed">
              <p className="mb-6">
                {aboutData.origin.content}
              </p>
              <h3 className="text-xl font-heading text-neutral-900 mb-4">
                {aboutData.howToHelp.title}
              </h3>
              <p className="mb-4">
                {aboutData.howToHelp.content}
              </p>
              <p className="text-neutral-500 text-sm font-medium">
                Registered Charity No. 235703
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* St. Therese & Little Way Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">
              {aboutData.stTherese.title}
            </h2>
            {aboutData.stTherese.subtitle && (
              <p className="text-xl text-primary-600 font-medium mb-4">
                {aboutData.stTherese.subtitle}
              </p>
            )}
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {aboutData.stTherese.intro}
            </p>

            <div className="grid lg:grid-cols-3 gap-12 mb-12">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={typeof aboutData.stTherese.image === 'string' ? aboutData.stTherese.image : '/images/about/therese.jpg'}
                    alt="St. Therese of Lisieux"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 384px"
                  />
                </div>
              </div>

              {/* Biography Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed">
                  <p className="mb-6">
                    {aboutData.stTherese.biography}
                  </p>
                  <p className="mb-6">
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
                  <p className="mb-6">
                    {aboutData.stTherese.death}
                  </p>
                  <p>
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
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">
              {aboutData.littleWay.title}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed space-y-6">
              <p>
                {aboutData.littleWay.intro}
              </p>
              <p>
                {aboutData.littleWay.meaning}
              </p>
              <p>
                {aboutData.littleWay.practice}
              </p>
              <p>
                {aboutData.littleWay.simplicity}
              </p>
              <p>
                {aboutData.littleWay.modernRelevance}
              </p>
              <p>
                {aboutData.littleWay.prayer}
              </p>
              <p>
                {aboutData.littleWay.mission}
              </p>
              <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-8 bg-primary-50 rounded-r-lg">
                <p className="text-neutral-700 italic font-bold text-lg mb-0">
                  &ldquo;{aboutData.littleWay.closingQuote}&rdquo;
                </p>
                <cite className="text-primary-600 font-medium not-italic text-sm">
                  — St. Therese
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Will You Help?"
        description="Please help The Little Way Association to respond to the hundreds of requests received each week from bishops, priests and sisters all around the world appealing for help on behalf of their suffering people."
      />
    </>
  );
}
