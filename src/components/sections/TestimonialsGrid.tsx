"use client";

import { useState } from "react";
import { Quote, ChevronDown } from "lucide-react";

interface Testimonial {
  quote: string;
  author?: string;
  location?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote: "Your donation enables us to continue feeding poor children in our local squatter camps",
    author: "Sister Magdalen",
    location: "South Africa",
    featured: true,
  },
  {
    quote: "I need not explain how much your grant has meant to us here in Thailand. Dealing with teenagers with HIV is a great challenge for the Centre and the staff who are caring for them.",
    author: "Mission Director",
    location: "Thailand",
  },
  {
    quote: "We are working among the under-privileged and marginalized. Your help is a blessing.",
    author: "Sister Raphaela",
    location: "Bangladesh",
  },
  {
    quote: "Thank you immensely for the Little Way donations for our soup kitchen. We are currently helping 48 people - abandoned mothers, children and the elderly.",
    author: "Sisters of St. Clare",
    location: "Peru",
    featured: true,
  },
  {
    quote: "We have only one nurse attending to more than 10,000 people and I am grateful for the help you gave.",
    author: "Fr. Andrew Lukhale",
    location: "Congo",
  },
  {
    quote: "Your funds enabled us to continue feeding and caring for 75 AIDS affected children in Kwazulu-Natal.",
    author: "Sr. Margaret McDermott",
    location: "South Africa",
  },
  {
    quote: "The Little Way helped to establish the Little Way Sisters of St Therese in Myanmar. We are forever grateful for your support.",
    location: "Myanmar",
  },
  {
    quote: "No family can flourish without a proper home, yet millions live in shanty towns. Your donations help us build real homes for families in need.",
  },
];

interface TestimonialsGridProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  initialCount?: number;
  showMoreIncrement?: number;
}

export function TestimonialsGrid({
  title = "Voices from the Field",
  subtitle = "Hear directly from the missionaries and sisters whose work you support",
  variant = "light",
  initialCount = 6,
  showMoreIncrement = 6,
}: TestimonialsGridProps) {
  const isDark = variant === "dark";
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + showMoreIncrement, testimonials.length));
  };

  return (
    <section
      className={`section-padding ${
        isDark
          ? "bg-neutral-900"
          : "bg-gradient-to-b from-primary-50/50 to-white"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-heading mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            {title}
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 max-w-6xl mx-auto [column-fill:balance]">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 md:mb-6 animate-fade-in-up"
              style={{
                animationDelay: `${(index % initialCount) * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <div
                className={`
                  relative rounded-2xl p-6 md:p-8 transition-all duration-300
                  hover:scale-[1.02] hover:shadow-xl
                  ${
                    testimonial.featured
                      ? isDark
                        ? "bg-gradient-to-br from-primary-900/80 to-primary-800/60 border border-primary-700/50"
                        : "bg-gradient-to-br from-primary-100 to-primary-50 border-2 border-primary-200"
                      : isDark
                      ? "bg-neutral-800/80 border border-neutral-700/50"
                      : "bg-white border border-neutral-200 shadow-sm"
                  }
                `}
              >
                {/* Quote Icon */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center mb-4
                    ${
                      testimonial.featured
                        ? isDark
                          ? "bg-primary-500/20"
                          : "bg-primary-200"
                        : isDark
                        ? "bg-neutral-700/50"
                        : "bg-neutral-100"
                    }
                  `}
                >
                  <Quote
                    className={`w-5 h-5 ${
                      testimonial.featured
                        ? isDark
                          ? "text-primary-400"
                          : "text-primary-600"
                        : isDark
                        ? "text-neutral-500"
                        : "text-neutral-400"
                    }`}
                  />
                </div>

                {/* Quote Text */}
                <blockquote
                  className={`
                    text-base md:text-lg leading-relaxed mb-6 font-medium
                    ${
                      testimonial.featured
                        ? isDark
                          ? "text-white"
                          : "text-neutral-800"
                        : isDark
                        ? "text-neutral-200"
                        : "text-neutral-700"
                    }
                  `}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author / Location */}
                {(testimonial.author || testimonial.location) && (
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                        ${
                          testimonial.featured
                            ? isDark
                              ? "bg-primary-500 text-white"
                              : "bg-primary-600 text-white"
                            : isDark
                            ? "bg-neutral-600 text-neutral-200"
                            : "bg-neutral-200 text-neutral-600"
                        }
                      `}
                    >
                      {testimonial.author
                        ? testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)
                        : testimonial.location
                        ? testimonial.location.slice(0, 2).toUpperCase()
                        : "LW"}
                    </div>
                    <div>
                      {testimonial.author && (
                        <div
                          className={`font-semibold text-sm ${
                            isDark ? "text-white" : "text-neutral-900"
                          }`}
                        >
                          {testimonial.author}
                        </div>
                      )}
                      {testimonial.location && (
                        <div
                          className={`text-xs ${
                            isDark ? "text-neutral-500" : "text-neutral-500"
                          }`}
                        >
                          {testimonial.location}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Anonymous attribution for quotes with no author/location */}
                {!testimonial.author && !testimonial.location && (
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                        ${
                          isDark
                            ? "bg-neutral-600 text-neutral-200"
                            : "bg-neutral-200 text-neutral-600"
                        }
                      `}
                    >
                      LW
                    </div>
                    <div>
                      <div
                        className={`font-semibold text-sm ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        Little Way Mission
                      </div>
                      <div
                        className={`text-xs ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        Field Report
                      </div>
                    </div>
                  </div>
                )}

                {/* Decorative element for featured cards */}
                {testimonial.featured && (
                  <div
                    className={`
                      absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20
                      ${isDark ? "bg-primary-400" : "bg-primary-300"}
                    `}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium
                transition-all duration-200 hover:scale-105
                ${
                  isDark
                    ? "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
                    : "bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200 shadow-sm"
                }
              `}
            >
              Show More Testimonials
              <ChevronDown className="w-4 h-4" />
            </button>
            <p
              className={`mt-2 text-sm ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}
            >
              {visibleCount} of {testimonials.length} shown
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
