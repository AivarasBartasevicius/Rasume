import CardContainer from "@/components/CardContainer";
import CardText from "@/components/CardText";
import Section from "@/components/Section";
import Title from "@/components/Title";

interface SkillGroups {
  name: string;
  skills: string[];
}

const skillList: SkillGroups[] = [
  {
    name: "Language & Runtimes & Frameworks",
    skills: ["Typescript", "Javascript", "Node.js", "Express.js", "Rest APIs"],
  },
  {
    name: "Data Management",
    skills: ["PostgreSQL", "TypeORM", "DynamoDB", "AWS S3"],
  },
  {
    name: "DevOps & Automation",
    skills: ["Docker", "GitHub Actions", "AWS ECR", "Terraform"],
  },
  {
    name: "Testing & Automation",
    skills: ["Jest", "Puppeteer"],
  },
];

export default function Skills({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <Title title="Skills" />
      {skillList.map((skill) => (
        <CardContainer
          key={skill.name}
          className="mb-10 md:max-w-[1000px] w-[100%] md:w-[90%] p-8 md:p-10 flex-col"
        >
          <CardText
            title={skill.name}
            bulletPoints={skill.skills}
            horizontal={true}
          />
        </CardContainer>
      ))}
    </Section>
  );
}
