import CardContainer from "@/components/CardContainer";
import CardText from "@/components/CardText";
import Section from "@/components/Section";
import Title from "@/components/Title";

interface ExperienceDetail {
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

const workExperienceData: ExperienceDetail[] = [
  {
    company: "TAPP IT",
    location: "Remote",
    title: "Back-end Developer",
    startDate: "2021 September",
    endDate: "2025 April",
    responsibilities: [
      "Designed, developed, and maintained RESTful APIs for in-house projects and B2B integrations, enhancing system interoperability and performance.",
      "Built and optimized PostgreSQL databases, improving query performance and scalability.",
      "Implemented unit and integration testing using Jest, ensuring code reliability.",
      "Worked with AWS S3 buckets for storing millions of images, enhancing data storage solutions.",
    ],
  },
  {
    company: "Baltic Consol Line",
    location: "Vilnius",
    title: "Salesforce Developer",
    startDate: "2020 January",
    endDate: "2021 September",
    responsibilities: [
      "Developed and maintained REST APIs and front-end widgets in JavaScript and Salesforce Apex across 10+ projects.",
    ],
  },
  {
    company: "Baltic Amadeus",
    location: "Vilnius",
    title: "Junior QA Specialist",
    startDate: "2019 June",
    endDate: "2019 August",
    responsibilities: [
      "Collaborated with a large team on a new banking site for Luminor, enhancing team collaboration and testing processes.",
      "Gained experience in a larger company environment, contributing to a significant banking project.",
      "Developed a comprehensive understanding of testing methodologies, improving overall testing efficiency.",
    ],
  },
];

export default function Experience({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <Title title="Experience" />
      {workExperienceData.map((experience) => (
        <CardContainer
          key={experience.company + experience.startDate}
          className="mb-10 md:max-w-[1000px] md:w-[90%] p-8 md:p-10 flex-col"
        >
          <CardText
            title={experience.company}
            titleSide={experience.location}
            titleAddon={experience.title}
            titleAddonSide={`${experience.startDate} - ${experience.endDate}`}
            bulletPoints={experience.responsibilities}
          />
        </CardContainer>
      ))}
    </Section>
  );
}
