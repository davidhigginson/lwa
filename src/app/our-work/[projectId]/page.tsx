import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, MapPin, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui";
import { CTASection } from "@/components/sections";
import projectsData from "@/content/projects.json";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = projectsData.projects.find((p) => p.id === projectId);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = projectsData.projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const category = projectsData.categories.find((c) => c.id === project.category);
  const relatedProjects = projectsData.projects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.region === project.region))
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{project.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                {category?.name}
              </span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-white/90 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button as="a" href="/donate" variant="secondary" size="lg">
                <Heart className="w-5 h-5" />
                Support This Project
              </Button>
              <Button 
                as="a" 
                href="/our-work" 
                variant="ghost" 
                size="lg" 
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-neutral-700 whitespace-pre-line">
                  {project.description}
                </p>
                {project.impact && (
                  <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                    <h3 className="text-lg font-heading text-neutral-900 mb-2">Impact</h3>
                    <p className="text-neutral-700">{project.impact}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Donation Card */}
              <div className="sticky top-24">
                <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-heading text-neutral-900 mb-4">
                    Support This Project
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Your donation will help continue this vital work in {project.location}.
                  </p>
                  <Button as="a" href="/donate" variant="primary" className="w-full" size="lg">
                    <Heart className="w-5 h-5" />
                    Donate Now
                  </Button>
                </div>

                {/* Project Info */}
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <h3 className="text-lg font-heading text-neutral-900 mb-6">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-neutral-500">Location</dt>
                      <dd className="text-neutral-900 font-medium">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-neutral-500">Country</dt>
                      <dd className="text-neutral-900 font-medium">{project.country}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-neutral-500">Region</dt>
                      <dd className="text-neutral-900 font-medium">{project.region}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-neutral-500">Category</dt>
                      <dd className="text-neutral-900 font-medium">{category?.name}</dd>
                    </div>
                    {project.impact && (
                      <div>
                        <dt className="text-sm text-neutral-500">Impact</dt>
                        <dd className="text-primary-600 font-medium">{project.impact}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading text-neutral-900 mb-8 text-center">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/our-work/${relatedProject.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white/50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-primary-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{relatedProject.location}</span>
                    </div>
                    <h3 className="font-heading text-lg text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {relatedProject.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Every Donation Makes a Difference"
        description="Your gift enables missionaries to carry the love and compassion of Christ to those in desperate need."
      />
    </>
  );
}

