import CardContainer from "@/components/CardContainer";
import ProfileDetails from "./ProfileDetails";
import ProfileSummary from "./ProfileSummary";
import Section from "@/components/Section";
import { ProfileParam, BasicParams } from "@/types/front";

export default function ProfileCard({
  profile,
  className,
}: ProfileParam & BasicParams) {
  return (
    <Section className={className}>
      <CardContainer className="flex-col md:flex-row max-w-[900px] md:w-[90%] z-30 ">
        <ProfileDetails profile={profile} />
        <ProfileSummary profile={profile} />
      </CardContainer>
    </Section>
  );
}
