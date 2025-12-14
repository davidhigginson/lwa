import Image from "next/image";
import {
  Hero,
  AboutPreview,
  ProjectsGrid,
  StatsSection,
  CTASection,
} from "@/components/sections";
import aboutData from "@/content/about.json";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Helping Those in Greatest Need"
        subtitle="Will you enable a missionary priest or sister to carry the love, care and compassion of Christ to those of our brothers and sisters in dire distress and in urgent need of help?"
        ctaPrimary={{ label: "Donate Now", href: "/donate" }}
        ctaSecondary={{ label: "Learn More", href: "/about" }}
      />
      
      {/* Welcome Section - Verbatim from original site */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-8 text-center">
              Welcome to The Little Way Association website
            </h2>
            <div className="prose prose-lg mx-auto text-neutral-600">
              <p className="text-lg leading-relaxed mb-6">
                The Little Way Association is a charity that aims to help the poor, needy and sick in developing countries throughout the world. For over 50 years the Association has provided assistance to those in need, currently raising around £4m each year.
              </p>
              <p className="leading-relaxed mb-6">
                Most of our supporters are Roman Catholics, but some of our benefactors belong to other Christian denominations and other faiths. Any donation which is sent to us by post, by banker&apos;s order, or online through this website is used entirely for the purpose(s) specified by the donor (we have a separate fund for administrative expenses).
              </p>
              <p className="leading-relaxed mb-6">
                We make sure that the money goes to help those in the greatest need by ensuring that all projects we support are supervised by the local bishop or missionary society.
              </p>
              <p className="leading-relaxed">
                Our funds provide food, medicines and other aid for the hungry, sick, refugees, needy children, lepers and victims of natural disasters. We give funds to help build small houses and schools, provide wells, roof mission chapels and support Missionary Priests, Sisters and Brothers in clinics, hospitals and orphanages. In times of famine and drought we provide emergency relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Info Banners - matching original site style */}
      <section className="py-8 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Image
                src="/images/hero/lwamakesnodeduction.png"
                alt="LWA makes no deduction from your donation"
                width={200}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Image
                src="/images/hero/helping-those.png"
                alt="Helping those in greatest need"
                width={200}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Image
                src="/images/hero/your-donation.png"
                alt="Your donation makes a difference"
                width={200}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
          </div>
        </div>
      </section>
      
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
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/therese.jpg"
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
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                {aboutData.stTherese.intro}
              </p>
              <a 
                href="/about" 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
              >
                READ MORE...
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <AboutPreview />
      
      {/* Main Appeal Section - Verbatim from original site */}
      <section className="section-padding bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading text-neutral-900 mb-6">
              Your gift to support our brothers and sisters in dire distress and in urgent need of help
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Your gift will mean a chance of health and happiness, perhaps even the difference between life and death. Please help The Little Way Association to respond to the hundreds of requests received each week from bishops, priests and sisters all around the world appealing for help on behalf of their suffering people by donating whatever you can. Every penny you send will be gratefully received.
            </p>
            <a 
              href="/donate"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Please make a donation
            </a>
          </div>
        </div>
      </section>

      {/* Daily Mass Section */}
      <section className="py-12 bg-secondary-50 border-y border-secondary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-neutral-700">
              {aboutData.dailyMass.content}
            </p>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Will You Help?"
        description="Your gift will mean a chance of health and happiness, perhaps even the difference between life and death. Please help The Little Way Association to respond to the hundreds of requests received each week from bishops, priests and sisters all around the world appealing for help on behalf of their suffering people."
        primaryCTA={{ label: "Donate Now", href: "/donate" }}
        secondaryCTA={{ label: "Other Ways to Help", href: "/get-involved" }}
      />
    </>
  );
}
