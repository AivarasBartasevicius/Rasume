import CardContainer from "@/components/CardContainer";
import CardText from "@/components/CardText";
import Section from "@/components/Section";
import Title from "@/components/Title";

interface EducationDetails {
  location: string;
  status: string;
  title: string;
  endDate: string;
}

const workExperienceData: EducationDetails[] = [
  {
    location: "Bachelor of Applied Science – Computer Software Engineering",
    status: "Graduated",
    title: "Bachelor of Applied Science – Computer Software Engineering",
    endDate: "2019",
  },
];

export default function Education({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <Title title="Education" />
      {workExperienceData.map((experience) => (
        <CardContainer
          key={experience.location + experience.endDate}
          className="mb-10 md:max-w-[1000px] md:w-[90%] p-8 md:p-10 flex-col"
        >
          <CardText
            title={experience.location}
            titleSide={experience.status}
            titleAddon={experience.title}
            titleAddonSide={experience.endDate}
          />
        </CardContainer>
      ))}
    </Section>
  );
}
