import type { ReactNode } from "react";

type StatsGridProps = {
  children: ReactNode;
};

export default function StatsGrid({ children }: StatsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {children}
    </div>
  );
}