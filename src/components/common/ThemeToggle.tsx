import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
        <TooltipTrigger asChild>
            <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </TooltipTrigger>

        <TooltipContent>
            <p>{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</p>
        </TooltipContent>
    </Tooltip>
  );
}