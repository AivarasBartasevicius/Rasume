import { cn } from "@/lib/util";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
}

const Section = ({ children, className, title }: Props) => {
  return (
    <section
      className={cn(
        "relative w-full pt-5 pb-10 flex flex-col items-center justify-center px-5",
        className
      )}
    >
      <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-[color:var(--green-text)] md:text-5xl lg:text-5xl">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
