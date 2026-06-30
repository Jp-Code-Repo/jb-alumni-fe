import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="alumni-ui-theme"
    >
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
}