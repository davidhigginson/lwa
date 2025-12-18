import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    description: project.summary || project.description,
    alternates: { canonical: `/our-work/${project.id}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary || project.description,
      url: `/our-work/${project.id}`,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary || project.description,
      images: [project.image],
    },
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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{project.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                  {category?.name}
                </span>
                <span className="flex items-center gap-1 text-white/80 text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-8">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-4">
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

            {/* Right Column - Project Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-400/30 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Blue box style */}
            <div className="lg:col-span-2">
              <div className="bg-primary-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-neutral-700 whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Donation CTA */}
              <div className="sticky top-24">
                <div className="mb-8">
                  <Button as="a" href="/donate" variant="secondary" className="w-full" size="lg">
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
                      <dt className="text-sm text-neutral-500">Category</dt>
                      <dd className="text-neutral-900 font-medium">{category?.name}</dd>
                    </div>
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
                  <div className="relative aspect-video bg-neutral-200">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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

