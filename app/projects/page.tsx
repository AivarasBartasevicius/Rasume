import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/back";

export default function Home() {
  const projects: Project[] = [
    {
      name: "AWS-Item-Manager",
      image: "/awsItemManager.png",
      summary:
        "A creative simulation of the Path of Exile item system and market using AWS services for educational purposes.",
      goals: {
        "AWS services": "Lambda, IAM roles, API Gateway, S3, SQS",
        "NoSQL databases": "DynamoDB and DocumentDB",
        "Infrastructure as Code": "Terraform",
      },
      githubLink: "https://github.com/AivarasBartasevicius/AWS-Item-Manager",
    },
    {
      name: "Resume page",
      image: "/resume.png",
      summary:
        "Resume page for creating a hub for information about me and testing out some basics in the front end",
      goals: {
        "Front-end":
          "Learning the basics like routing, project structure, element mapping, css with tailwind and more",
      },
      githubLink: "https://github.com/AivarasBartasevicius/Rasume",
    },
  ];

  return (
    <>
      <div className="m-auto max-w-[1915px]">
        <section className={`relative w-full overflow-hidden pt-[12.91%]`}>
          <Image
            src="/projects.png"
            alt="Welcome"
            fill
            className="object-contain"
            priority
          />
        </section>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </>
  );
}
