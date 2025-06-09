import CardContainer from "@/components/CardContainer";
import CardText from "@/components/CardText";
import Section from "@/components/Section";

interface ExperienceDetail {
  location: string;
  status: string;
  title: string;
  endDate: string;
  learned?: string[]; // Array of bullet points
}

const workExperienceData: ExperienceDetail[] = [
  {
    location: "Bachelor of Applied Science – Computer Software Engineering",
    status: "Graduated",
    title: "Bachelor of Applied Science – Computer Software Engineering",
    endDate: "2019",
  },
];

export default function Education({ className }: { className?: string }) {
  return (
    <Section title="Education" className={className}>
      {workExperienceData.map((experience, index) => (
        <CardContainer
          key={experience.location + experience.endDate}
          className="mb-10 md:max-w-[1000px] md:w-[90%] p-8 md:p-10 flex-col"
        >
          <CardText
            title={experience.location}
            titleSide={experience.status}
            titleAddon={experience.title}
            titleAddonSide={experience.endDate}
            bulletPoints={experience.learned}
            isLast={index === workExperienceData.length - 1}
          />
        </CardContainer>
      ))}
    </Section>
  );
}
