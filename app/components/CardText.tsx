import clsx from "clsx";

interface Props {
  title: string;
  titleSide: string;
  titleAddon: string;
  titleAddonSide: string;
  bulletPoints?: string[];
  isLast?: boolean;
}

export default function CardText({
  title,
  titleSide,
  titleAddon,
  titleAddonSide,
  bulletPoints,
}: Props) {
  return (
    <div>
      <div
        className={clsx(
          "flex flex-col items-start mb-1",
          "md:flex-row md:justify-between md:items-center"
        )}
      >
        <h3 className="text-xl font-bold text-[color:var(--green-text)] leading-snug">
          {title}
        </h3>
        <span className="text-gray-700 text-sm font-semibold">{titleSide}</span>
      </div>
      <div
        className={clsx(
          "flex flex-col items-start",
          "md:flex-row md:justify-between md:items-center",
          { "mb-5": bulletPoints && bulletPoints.length > 0 }
        )}
      >
        <p className="text-gray-800 font-semibold">{titleAddon}</p>
        <span className="text-gray-700 text-sm italic">{titleAddonSide}</span>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        {bulletPoints?.map((responsibility, index) => (
          <li key={index} className="text-gray-700 text-base">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}
