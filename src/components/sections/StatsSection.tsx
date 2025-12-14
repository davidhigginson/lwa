import { StatCard } from "@/components/ui";
import { Heart, Globe, Users, Calendar } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Years of Service",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    value: "£4m",
    label: "Raised Annually",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    value: "100%",
    label: "Donations to Projects",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    value: "Daily",
    label: "Mass for Supporters",
    icon: <Users className="w-8 h-8" />,
  },
];

interface StatsSectionProps {
  variant?: "default" | "gradient";
}

export function StatsSection({ variant = "default" }: StatsSectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${
        variant === "gradient"
          ? "bg-gradient-to-r from-primary-600 to-primary-700"
          : "bg-primary-600"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
            Making a Real Difference
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Every donation, no matter how small, helps us support those in the greatest need
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

