import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AppWidgetProps {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function AppWidget({
  title,
  description,
  action,
  children,
}: AppWidgetProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>

          {description && (
            <CardDescription>{description}</CardDescription>
          )}
        </div>

        {action && <div>{action}</div>}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}