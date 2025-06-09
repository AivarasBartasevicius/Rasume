import ProfileCard from "./profile/ProfileCard";
import Experience from "./experience/Experience";
import Image from "next/image";
import Education from "./education/Education";

export default function Home() {
  const myContactInfo = {
    Phone: "+37063629560",
    Email: "aivaras.bartasevicius@gmail.com",
  };

  const mySummary =
    "Mid level Backend Developer with 3 years of experience working with JavaScript, TypeScript, and Node.js. Skilled in designing and implementing RESTful APIs, managing relational databases, and optimizing back-end performance. Adaptable and quick to learn, with past experience in JavaScript, PHP, C#, and Salesforce projects, as well as a background in software testing that fuels a passion for writing well-tested, maintainable code.";

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
      <section className="relative w-full md:pt-5 pb-5 flex items-center justify-center bg-auto">
        <ProfileCard
          name="Aivaras Bartaševičius"
          title="BACKEND DEVELOPER"
          contact={myContactInfo}
          summary={mySummary}
          profilePic="/aivaras.png"
        />
      </section>
      <Experience />
      <Education />
    </>
  );
}
