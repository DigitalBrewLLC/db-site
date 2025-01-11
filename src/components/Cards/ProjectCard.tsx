import { extractDomainName, ProjectInfo } from "@/info-maps/project-info";
import Image from "next/image";

interface ProjectCardProps {
  projectInfo: ProjectInfo;
  className?: string;
}

const ProjectCard = ({ projectInfo, className = "" }: ProjectCardProps) => {
  return (
    <div
      className={`relative lg:col-span-3 w-full max-w-[400px] ${className}`}
      aria-label={projectInfo.projectUrl + " project card"}
    >
      <div className="absolute inset-px rounded-lg bg-card rounded-t-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] rounded-t-[calc(2rem+1px)]">
        <div className="relative h-[400px] w-full">
          <Image
            alt={projectInfo.imageAlt}
            src={projectInfo.image}
            aria-label={projectInfo.imageAlt}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-sm/4 font-semibold text-accent">
            <a
              href={projectInfo.projectUrl}
              aria-label={projectInfo.projectUrl}
              role="link"
              target="_blank"
            >
              {extractDomainName(projectInfo.projectUrl)}
            </a>
          </h3>
          <p className="mt-2 text-lg font-medium tracking-tight text-text">
            {projectInfo.tagline}
          </p>
          <p className="mt-2 text-sm/6 text-muted-foreground">
            {projectInfo.description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent/5 rounded-t-[2rem]" />
    </div>
  );
};

export default ProjectCard;
