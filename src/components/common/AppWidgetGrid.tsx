import type { ReactNode } from "react";

interface AppWidgetGridProps {
  children: ReactNode;
}

export default function AppWidgetGrid({
  children,
}: AppWidgetGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-1
        lg:grid-cols-2
      "
    >
      {children}
    </div>
  );
}