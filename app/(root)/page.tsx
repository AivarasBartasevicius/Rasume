import ProfileCard from "./profile/ProfileCard";
import Experience from "./experience/Experience";
import Image from "next/image";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import { Profile } from "@/types/back";

export default function Home() {
  const profile: Profile = {
    name: "Aivaras Bartaševičius",
    title: "BACKEND DEVELOPER",
    contact: {
      Phone: "+37063629560",
      Email: "aivaras.bartasevicius@gmail.com",
    },
    summary:
      "Mid level Backend Developer with 3 years of experience working with JavaScript, TypeScript, and Node.js. Skilled in designing and implementing RESTful APIs, managing relational databases, and optimizing back-end performance. Adaptable and quick to learn, with past experience in JavaScript, PHP, C#, and Salesforce projects, as well as a background in software testing that fuels a passion for writing well-tested, maintainable code.",
    profilePic: "/aivaras.png",
  };

  return (
    <>
      <div className="m-auto max-w-[1915px]">
        <section className={`relative w-full overflow-hidden pt-[13.45%]`}>
          <Image
            src="/background.png"
            alt="Welcome"
            fill
            className="object-contain"
            priority
          />
        </section>
      </div>
      <ProfileCard profile={profile} />
      <Experience />
      <Education />
      <Skills />
    </>
  );
}
