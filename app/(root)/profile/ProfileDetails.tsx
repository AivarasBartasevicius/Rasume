import clsx from "clsx";
// import Image from "next/image";
import ImageContainer from "../../components/ImageContainer";
import { ProfileParam } from "@/types/front";

export default function ProfileDetails({ profile }: ProfileParam) {
  const { profilePic, name, title, contact } = profile;
  return (
    <div className="flex-shrink-0 w-full p-8 flex flex-col items-center text-center border-b border-gray-200 md:w-[300px] md:border-b-0 md:border-r">
      <ImageContainer
        w={200}
        h={200}
        pic={profilePic}
        alt={name}
        rounded={true}
        className="mb-4 md:mb-5 shadow-md"
      />
      <h1 className="text-3xl font-medium mb-1 leading-tight text-[color:var(--green-text)] md:text-2xl">
        {name}
      </h1>
      <p className="text-sm font-normal tracking-wider uppercase mb-6 text-gray-700 md:text-xs md:mb-4">
        {title}
      </p>
      <div className="text-left w-full">
        {Object.entries(contact).map(([label, value], index) => (
          <p
            key={label}
            className={clsx(
              "mb-4 leading-tight md:mb-3",
              index === Object.keys(contact).length - 1 && "mb-0"
            )}
          >
            <span className="font-semibold text-base text-[color:var(--green-text)] md:text-sm">
              {label}:
            </span>
            <br />
            <span className="text-sm text-gray-700 md:text-xs">{value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
