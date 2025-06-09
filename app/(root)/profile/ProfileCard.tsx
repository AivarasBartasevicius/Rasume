import CardContainer from "@/components/CardContainer";
import ProfileDetails from "./ProfileDetails";
import ProfileSummary from "./ProfileSummary";

interface ProfileParams {
  name: string;
  title: string;
  contact: {
    Phone: string;
    Email: string;
  };
  summary: string;
  profilePic: string;
}

export default function ProfileCard({
  name,
  title,
  contact,
  summary,
  profilePic,
}: ProfileParams) {
  return (
    //
    <CardContainer className="flex-col md:flex-row max-w-[900px] md:w-[90%] z-30 ">
      <ProfileDetails
        name={name}
        title={title}
        contact={contact}
        profilePic={profilePic}
      />
      <ProfileSummary summary={summary} />
    </CardContainer>
  );
}
