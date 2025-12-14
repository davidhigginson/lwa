import { Button } from "@/components/ui";
import { Heart, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export function CTASection({
  title = "Will You Help?",
  description = "Your gift will mean a chance of health and happiness, perhaps even the difference between life and death. Please help The Little Way Association to respond to the hundreds of requests received each week from bishops, priests and sisters all around the world appealing for help on behalf of their suffering people.",
  primaryCTA = { label: "Donate Now", href: "/donate" },
  secondaryCTA = { label: "Other Ways to Help", href: "/get-involved" },
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Every Penny Makes a Difference</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href={primaryCTA.href} variant="secondary" size="lg">
              <Heart className="w-5 h-5" />
              {primaryCTA.label}
            </Button>
            <Button as="a" href={secondaryCTA.href} variant="ghost" size="lg" className="text-white hover:bg-white/10">
              {secondaryCTA.label}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="mt-10 text-neutral-400 text-sm">
            The Little Way Association is a registered charity (No. 235703). 
            Every penny you send will be gratefully received and used entirely for charitable purposes.
          </p>
        </div>
      </div>
    </section>
  );
}


