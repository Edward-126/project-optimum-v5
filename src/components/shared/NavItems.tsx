"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const NAVITEMS = [
  {
    lable: "About",
    route: "/#about",
    isctive: 1,
  },
  {
    lable: "Services",
    route: "/#services",
    isctive: 1,
  },
  {
    lable: "Instructors",
    route: "/#instructors",
    isctive: 1,
  },
  {
    lable: "Pricing",
    route: "/#pricing",
    isctive: 1,
  },
  {
    lable: "Contact",
    route: "/contact",
    isctive: 1,
  },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden gap-7 sm:flex">
        {NAVITEMS.map((navitem, idx) => (
          <div className="" key={idx}>
            {navitem.isctive ? (
              <Link
                href={navitem.route}
                className={cn(
                  "transition-all duration-300 ease-in-out hover:font-medium hover:text-primary",
                  pathname === navitem.route && "font-semibold text-primary",
                )}
              >
                <small>{navitem.lable}</small>
              </Link>
            ) : (
              <div className="text-muted-foreground/50">
                <small>{navitem.lable}</small>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavItems;
