import { CalendarDays, MapPin } from "lucide-react";

import type { DashboardEvent } from "../data/dashboard-events-data";

interface EventItemProps {
  event: DashboardEvent;
}

export default function EventItem({
  event,
}: EventItemProps) {
  return (
    <div className="flex items-start justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50">
      <div className="space-y-1">
        <h4 className="font-medium">{event.title}</h4>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          {event.date}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {event.location}
        </div>
      </div>
    </div>
  );
}