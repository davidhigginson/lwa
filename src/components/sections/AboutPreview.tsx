import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight, Heart, CheckCircle2 } from "lucide-react";
import type { AboutContent } from "@/lib/content";

interface AboutPreviewProps {
  aboutData: AboutContent;
}

export function AboutPreview({ aboutData }: AboutPreviewProps) {
  const highlights = [
    "Any donation is used entirely for the purpose(s) specified by the donor",
    "We have a separate fund for administrative expenses",
    "All projects supervised by the local bishop or missionary society",
    "Mass is offered daily for all our supporters' intentions. Thank you so much for your prayers and your continued practical support",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>About Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">
              {aboutData.mission.title}
            </h2>

            <p className="text-neutral-600 leading-relaxed mb-6">
              {aboutData.mission.content}
            </p>

            <p className="text-neutral-600 leading-relaxed mb-8">
              Our funds provide food, medicines and other aid for the hungry, sick, refugees, needy children, lepers and victims of natural disasters. We give funds to help build small houses and schools, provide wells, roof mission chapels and support Missionary Priests, Sisters and Brothers in clinics, hospitals and orphanages. In times of famine and drought we provide emergency relief.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button as="a" href="/about" variant="primary" size="lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-primary-100">
              <Image
                src="/images/about/therese.jpg"
                alt="St. Therese of Lisieux"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-center justify-end p-8 text-center">
                <h3 className="text-2xl font-heading text-white mb-2">
                  St. Therese of Lisieux
                </h3>
                <p className="text-white/90 text-sm max-w-xs">
                  Patroness of The Little Way Association
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
