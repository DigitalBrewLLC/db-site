import ProjectCard from "@/components/Cards/ProjectCard";
import { projectMap } from "@/info-maps/project-info";

const DigitalBrewSolutions = () => {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-accent">
          Digital Brew Solutions
        </h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Modern digital experiences
        </p>
        <div className="mt-10 flex flex-wrap gap-4 sm:mt-16">
          {projectMap.map((project) => (
            <div
              className="w-full lg:w-[calc(50%-0.5rem)]"
              key={project.projectUrl}
            >
              <ProjectCard projectInfo={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalBrewSolutions;
