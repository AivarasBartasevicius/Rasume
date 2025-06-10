import CardContainer from "@/components/CardContainer";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { BasicParams, ProjectParam } from "@/types/front";
import ProjectImage from "./ProjectImage";
import ProjectSummary from "./ProjectSummary";

export default function ProjectCard({
  project,
  className,
}: ProjectParam & BasicParams) {
  const { name, goals } = project;
  return (
    <Section className={className}>
      <Title title={name}></Title>
      <CardContainer className="mb-10 md:max-w-[1000px] md:w-[90%] flex-col md:flex-row">
        <ProjectImage project={project} />
        <ProjectSummary project={project}>
          <div className="mt-5 mb-2">
            <span className="text-base font-bold">
              Learning Goals for the project:
            </span>
          </div>

          <ul className="list-disc">
            {Object.entries(goals).map(([type, goal], index) => (
              <li key={index}>
                <span className="font-bold">{type}: </span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </ProjectSummary>
      </CardContainer>
    </Section>
  );
}
