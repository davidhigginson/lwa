"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}

// 🔴 CONTENT REVIEW: These carousel messages can be customized to match LWA's messaging
const heroImages = [
  {
    src: "/images/projects/kids.png",
    alt: "Children we support through The Little Way Association",
    message: "Carrying the love and compassion of Christ to those in need",
  },
  {
    src: "/images/projects/people.png",
    alt: "Communities we serve",
    message: "Helping the poor, needy and sick in developing countries",
  },
  {
    src: "/images/projects/plant.png",
    alt: "Sustainable development and food security",
    message: "Every penny goes directly to those who need it most",
  },
];

export function Hero({
  title,
  subtitle,
  ctaPrimary = { label: "Donate Now", href: "/donate" },
  ctaSecondary = { label: "Learn More", href: "/about" },
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 pt-40 pb-24 md:pt-48 md:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Heart className="w-4 h-4" />
              <span>Over 50 Years of Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 animate-fade-in-up drop-shadow-lg">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-100 drop-shadow-md">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
              <Button as="a" href={ctaPrimary.href} variant="secondary" size="lg">
                <Heart className="w-5 h-5" />
                {ctaPrimary.label}
              </Button>
              <Button as="a" href={ctaSecondary.href} variant="outline" size="lg" className="bg-white/90 border-white text-neutral-700 hover:bg-white">
                {ctaSecondary.label}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/30 animate-fade-in-up delay-300">
              <p className="text-sm text-white/90 mb-4">Trusted by thousands of donors worldwide</p>
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-2xl font-heading text-white">£4m+</div>
                  <div className="text-xs text-white/80">Raised Annually</div>
                </div>
                <div className="w-px h-10 bg-white/30" />
                <div className="text-center">
                  <div className="text-2xl font-heading text-white">100%</div>
                  <div className="text-xs text-white/80">To Projects</div>
                </div>
                <div className="w-px h-10 bg-white/30" />
                <div className="text-center">
                  <div className="text-2xl font-heading text-white">50+</div>
                  <div className="text-xs text-white/80">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Slider - Desktop View - Small Box */}
          <div className="relative hidden lg:block animate-fade-in delay-200">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 0vw, 50vw"
                  />
                  {/* Overlay with message */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white text-lg font-medium drop-shadow-lg">
                        {image.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Slider Controls */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110 z-10 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-700" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110 z-10 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-neutral-700" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs animate-fade-in-up delay-400 z-30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🙏</span>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">
                    &ldquo;Mass is offered daily for all our supporters&apos; intentions&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
