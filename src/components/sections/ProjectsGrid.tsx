import { ProjectCard } from "@/components/ui";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { getProjects } from "@/lib/content";

interface ProjectsGridProps {
  title?: string;
  subtitle?: string;
  showFeaturedOnly?: boolean;
  limit?: number;
  showViewAll?: boolean;
  category?: string;
}

export async function ProjectsGrid({
  title = "Recent Projects",
  subtitle = "See how your donations are making a difference around the world",
  showFeaturedOnly = false,
  limit,
  showViewAll = true,
  category,
}: ProjectsGridProps) {
  const allProjects = await getProjects();
  let projects = allProjects;

  if (showFeaturedOnly) {
    projects = projects.filter((p) => p.featured);
  }

  if (category) {
    projects = projects.filter((p) => p.category === category);
  }

  if (limit) {
    projects = projects.slice(0, limit);
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

        {/* View All CTA */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Button as="a" href="/our-work" variant="outline" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}


