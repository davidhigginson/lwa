import { Metadata } from "next";
import Link from "next/link";
import { Heart, MapPin, Filter, Droplets, Home, GraduationCap, Utensils, Baby, Bath, Church, AlertTriangle, LayoutGrid } from "lucide-react";
import { ProjectCard, Button } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { getProjects, getProjectCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore the projects and communities The Little Way Association supports around the world.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work",
    description: "Explore the projects and communities The Little Way Association supports around the world.",
    url: "/our-work",
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  healthcare: <Heart className="w-5 h-5" />,
  water: <Droplets className="w-5 h-5" />,
  food: <Utensils className="w-5 h-5" />,
  housing: <Home className="w-5 h-5" />,
  education: <GraduationCap className="w-5 h-5" />,
  children: <Baby className="w-5 h-5" />,
  sanitation: <Bath className="w-5 h-5" />,
  religion: <Church className="w-5 h-5" />,
  emergency: <AlertTriangle className="w-5 h-5" />,
};

interface OurWorkPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function OurWorkPage({ searchParams }: OurWorkPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category;

  const allProjects = await getProjects();
  const categories = await getProjectCategories();
  let filteredProjects = allProjects;

  if (selectedCategory) {
    filteredProjects = filteredProjects.filter(
      (p) => p.category === selectedCategory
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-10 md:pt-48 md:pb-12 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Projects Worldwide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
              Our Work Around the World
            </h1>
            <p className="text-neutral-600">
              See how your donations are making a difference in the lives of people across developing countries
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 md:py-6 bg-white border-b border-neutral-100 sticky top-[136px] z-30">
        <div className="container mx-auto px-0 md:px-4">
          {/* Mobile Filter Header */}
          <div className="flex items-center gap-2 text-neutral-500 px-4 md:px-0 mb-3">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          
          {/* Category Pills - Horizontal Scroll on Mobile */}
          <div className="relative">
            {/* Gradient fade indicators for mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />
            
            <div className="flex gap-2 overflow-x-auto pb-3 px-4 md:px-0 md:flex-wrap scrollbar-hide snap-x snap-mandatory">
              <Link
                href="/our-work"
                className={`flex-shrink-0 snap-start inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  !selectedCategory
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                All Projects
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/our-work?category=${category.id}`}
                  className={`flex-shrink-0 snap-start inline-flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {categoryIcons[category.id]}
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProjectCard
                      title={project.title}
                      location={project.location}
                      description={project.description}
                      image={project.image}
                      href={`/our-work/${project.id}`}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-neutral-400" />
              </div>
              <h3 className="text-xl font-heading text-neutral-900 mb-2">No projects found</h3>
              <p className="text-neutral-600 mb-6">Try adjusting your filters</p>
              <Button as="a" href="/our-work" variant="primary">
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading text-neutral-900 mb-6 text-center">
              How We Select Projects
            </h2>
            <div className="prose prose-lg mx-auto text-neutral-600">
              <p>
                We make sure that the money goes to help those in the greatest need by ensuring that all projects we support are supervised by the local bishop or missionary society.
              </p>
              <p>
                Any donation which is sent to us by post, by banker&apos;s order, or online through this website is used entirely for the purpose(s) specified by the donor (we have a separate fund for administrative expenses).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Support Our Projects"
        description="Your donation, no matter how small, can make a real difference in the lives of those we serve. Help us continue this vital work."
      />
    </>
  );
}

