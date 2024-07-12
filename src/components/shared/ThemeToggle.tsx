"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button
              className="size-9 rounded-lg bg-background"
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="size-5 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
              <Moon className="absolute size-5 rotate-0 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
              <span className="sr-only">Switch Theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="hidden sm:block">
            Switch Theme
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
