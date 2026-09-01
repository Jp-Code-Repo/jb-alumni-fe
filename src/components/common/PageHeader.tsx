import type { ReactNode } from "react";

import ThemeToggle from "@/components/common/ThemeToggle";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        {actions}
        <ThemeToggle />
      </div>
    </div>
  );
}