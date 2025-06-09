import { ProfileParam } from "@/types/front";

export default function ProfileSummary({ profile }: ProfileParam) {
  const { summary } = profile;
  return (
    <div className="flex-grow p-10 flex flex-col justify-start text-[color:var(--green-text)] md:p-5">
      <h3 className="text-4xl font-semibold mb-6 text-[color:var(--green-text)] border-b-2 border-gray-200 pb-2 md:text-3xl md:mb-4">
        About me
      </h3>
      <p className="text-base leading-relaxed text-gray-700 md:text-sm">
        {summary}
      </p>
    </div>
  );
}
