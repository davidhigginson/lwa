import Link from "next/link";
import { Droplets, Heart, Home, GraduationCap, Utensils, Baby } from "lucide-react";
import projectsData from "@/content/projects.json";

const categoryIcons: Record<string, React.ReactNode> = {
  healthcare: <Heart className="w-8 h-8" />,
  water: <Droplets className="w-8 h-8" />,
  food: <Utensils className="w-8 h-8" />,
  housing: <Home className="w-8 h-8" />,
  education: <GraduationCap className="w-8 h-8" />,
  children: <Baby className="w-8 h-8" />,
};

export function WorkCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
            How We Help
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our funds provide essential support across multiple areas of need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {projectsData.categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/our-work?category=${category.id}`}
              className="group p-6 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center text-primary-600 transition-colors">
                {categoryIcons[category.id] || <Heart className="w-8 h-8" />}
              </div>
              <h3 className="font-medium text-neutral-900 group-hover:text-primary-700 transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


