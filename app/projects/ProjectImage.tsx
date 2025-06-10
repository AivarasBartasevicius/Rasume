import ImageContainer from "@/components/ImageContainer";
import { ObjectFit } from "@/types/back";
import { ProjectParam } from "@/types/front";

export default function ProjectImage({ project }: ProjectParam) {
  const { image, name, githubLink } = project;
  return (
    <div className="flex-shrink-0 w-full flex flex-col items-start border-b border-gray-200 md:w-1/2 md:border-b-0 md:border-r min-h-[300px]">
      <ImageContainer
        w={100}
        h={100}
        unit="%"
        mobileScale={1}
        pic={image}
        alt={name}
        link={githubLink}
        rounded={false}
        className="pt-[100%] md:pt-0"
        fit={ObjectFit.COVER}
      />
    </div>
  );
}
