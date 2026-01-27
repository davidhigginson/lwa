import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Hero,
  AboutPreview,
  ProjectsGrid,
  StatsSection,
  CTASection,
  TestimonialsGrid,
} from "@/components/sections";
import aboutData from "@/content/about.json";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Welcome to the Little Way Association"
        subtitle="Will you enable a missionary priest or sister to carry the love, care and compassion of Christ to those of our brothers and sisters in dire distress and in urgent need of help?"
        ctaPrimary={{ label: "Donate Now", href: "/donate" }}
        ctaSecondary={{ label: "Learn More", href: "/about" }}
      />
      
      <ProjectsGrid
        title="Recent Projects"
        subtitle="See how your donations are making a difference around the world"
        showFeaturedOnly={true}
        limit={6}
        showViewAll={true}
      />
      
      <StatsSection variant="gradient" />

      {/* St. Therese Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/st-therese-2.jpg"
                  alt="St. Therese of Lisieux"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading text-neutral-900 mb-6">
                {aboutData.stTherese.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {aboutData.stTherese.intro}
              </p>
              <Link 
                href="/about" 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2 transition-colors"
              >
                READ MORE...
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <AboutPreview />

      <TestimonialsGrid variant="light" />
      
      <CTASection
        title="Will You Help?"
        description="Please help The Little Way Association to respond to the hundreds of requests received each week from bishops, priests and sisters all around the world appealing for help on behalf of their suffering people."
        primaryCTA={{ label: "Donate Now", href: "/donate" }}
        secondaryCTA={{ label: "Other Ways to Help", href: "/get-involved" }}
      />
    </>
  );
}
