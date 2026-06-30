import { UserCircle2 } from "lucide-react";

interface PersonListItemProps {
  name: string;
  subtitle: string;
  badge?: string;
}

export default function PersonListItem({
  name,
  subtitle,
  badge,
}: PersonListItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50">
      <div className="flex items-center gap-4">
        <UserCircle2 className="h-10 w-10 text-muted-foreground" />

        <div>
          <h4 className="font-medium">{name}</h4>

          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>

      {badge && (
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {badge}
        </span>
      )}
    </div>
  );
}