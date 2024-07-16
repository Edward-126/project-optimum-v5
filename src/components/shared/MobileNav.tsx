import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Icons } from "./Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVITEMS } from "./NavItems";
import { useState } from "react";
import { ModeToggle } from "./ThemeToggle";
// import { ModeToggle } from "./ThemeToggle";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className="block h-7 sm:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu className="size-7" onClick={() => setIsOpen(true)} />
          </SheetTrigger>
          <SheetContent className="h-full">
            <SheetHeader className="h-full">
              <SheetTitle className="pb-5">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Icons.logo className="h-16 fill-black dark:fill-white" />
                </Link>
              </SheetTitle>
              <SheetDescription className="hidden"></SheetDescription>
              <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-6 pt-5">
                  {NAVITEMS.map((item, idx) => (
                    <div className="" key={idx}>
                      {item.isctive ? (
                        <Link
                          href={item.route}
                          className={cn(
                            "flex text-xl text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary active:scale-[0.98]",
                            pathname === item.route &&
                              "font-medium text-primary",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.lable}
                        </Link>
                      ) : (
                        <div className="flex cursor-not-allowed text-xl text-muted-foreground opacity-50">
                          {item.lable}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <ModeToggle />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNav;
