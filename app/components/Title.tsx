import { cn } from "@/lib/util";
import { BasicParams } from "@/types/front";

interface Params extends BasicParams {
  title?: string;
}

const Title = ({ className, title }: Params) => {
  return (
    <h2
      className={cn([
        "mb-8 text-4xl font-extrabold leading-none tracking-tight text-[color:var(--green-text)] md:text-5xl lg:text-5xl",
        className,
      ])}
    >
      {title}
    </h2>
  );
};

export default Title;
