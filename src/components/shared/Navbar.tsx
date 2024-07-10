"use client";

import { Moon } from "lucide-react";
import { Button } from "../ui/button";
import { Icons } from "./Icons";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 my-5 w-full sm:max-w-5xl">
        <div className="mr-8 flex items-center justify-between rounded-lg border border-border bg-background/80 px-3 py-2.5 shadow-sm backdrop-blur sm:mr-0">
          <Link href="/">
            <Icons.subLogo className="h-8" />
          </Link>

          <NavItems />
          <div className="hidden sm:block">
            <Button variant="ghost" size="icon">
              <Moon className="size-5" />
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </>
  );
};

export default Navbar;
