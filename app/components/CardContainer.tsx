import { cn } from "@/lib/util";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CardContainer = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "flex gap-y-8 bg-[#f8f8f8] shadow-md rounded-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardContainer;
