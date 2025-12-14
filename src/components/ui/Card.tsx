import { cn, truncateText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md",
        hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "portrait";
  overlay?: boolean;
}

export function CardImage({ src, alt, aspectRatio = "video", overlay = false }: CardImageProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={cn("relative w-full overflow-hidden", aspectClasses[aspectRatio])}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, className, as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag className={cn("text-xl font-heading text-neutral-900 mb-2", className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-neutral-600 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

// Project Card Component
interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
  impact?: string;
}

export function ProjectCard({ title, location, description, image, href, impact }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="h-full">
        <CardImage 
          src={image} 
          alt={title} 
          overlay 
        />
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-primary-600 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {truncateText(description, 220)}
          </CardDescription>
          {impact && (
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <span className="text-sm font-medium text-secondary-600">{impact}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

// Stat Card
interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur shadow-sm">
      {icon && <div className="mb-3 text-primary-500">{icon}</div>}
      <div className="text-4xl md:text-5xl font-heading text-primary-700 mb-2">{value}</div>
      <div className="text-neutral-600 text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
}


