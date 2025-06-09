import clsx from "clsx";

interface Params {
  title: string;
  titleSide?: string;
  titleAddon?: string;
  titleAddonSide?: string;
  bulletPoints?: string[];
  horizontal?: boolean;
}

export default function CardText({
  title,
  titleSide,
  titleAddon,
  titleAddonSide,
  bulletPoints,
  horizontal,
}: Params) {
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
        {titleSide && (
          <span className="text-gray-700 text-sm font-semibold">
            {titleSide}
          </span>
        )}
      </div>
      {(titleAddon || titleAddonSide) && (
        <div
          className={clsx(
            "flex flex-col items-start",
            "md:flex-row md:justify-between md:items-center",
            { "mb-5": bulletPoints && bulletPoints.length > 0 }
          )}
        >
          {titleAddon && (
            <p className="text-gray-800 font-semibold">{titleAddon}</p>
          )}
          {titleAddonSide && (
            <span className="text-gray-700 text-sm italic">
              {titleAddonSide}
            </span>
          )}
        </div>
      )}
      {bulletPoints && bulletPoints.length > 0 && (
        <ul
          className={clsx(
            { "list-disc pl-5 space-y-1": !horizontal },
            { "list-none p-0 m-0 flex flex-wrap gap-x-4": horizontal }
          )}
        >
          {bulletPoints?.map((responsibility, index) => (
            <li
              key={index}
              className={clsx(
                { "text-gray-700 text-base": !horizontal },
                { "text-gray-700 text-base flex items-center": horizontal }
              )}
            >
              {horizontal && <span className="mr-2">•</span>}
              {responsibility}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
