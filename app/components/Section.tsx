import { cn } from "@/lib/util";

interface Params {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: Params) => {
  return (
    <section
      className={cn(
        "relative w-full pt-5 pb-10 flex flex-col items-center justify-center px-5",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
