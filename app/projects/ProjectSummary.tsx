import { BasicParams, ProjectParam } from "@/types/front";

export default function ProjectSummary({
  project,
  children,
}: ProjectParam & BasicParams) {
  const { summary, name } = project;
  return (
    <div className="w-full flex-grow p-10 flex flex-col justify-star md:w-1/2">
      <h3 className="text-4xl font-semibold mb-6 text-[color:var(--green-text)] border-b-2 border-gray-200 pb-2 md:text-3xl md:mb-4">
        {name}
      </h3>
      <p className="text-base leading-relaxed text-gray-700">{summary}</p>
      <div className="text-gray-700 text-sm">{children}</div>
    </div>
  );
}
