import { cn } from "@/lib/utils";

const TempBlock = ({
  className,
  name,
}: {
  className?: string;
  name?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          "group flex h-dvh items-center justify-center",
          className,
        )}
      >
        <div className="flex h-full w-full items-center justify-center rounded-lg border border-border bg-neutral-500/5 transition-all duration-300 ease-in-out group-hover:border-neutral-950/20">
          <h3 className="select-none opacity-20 transition-all duration-300 ease-in-out group-hover:opacity-25">
            {name}
          </h3>
        </div>
      </div>
    </>
  );
};

export default TempBlock;
