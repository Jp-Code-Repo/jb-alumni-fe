import type { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
};

export default function StatsCard({
  title,
  value,
  icon,
}: StatsCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {title}
        </span>

        {icon}
      </div>

      <div className="mt-4 text-3xl font-bold">
        {value}
      </div>
    </div>
  );
}