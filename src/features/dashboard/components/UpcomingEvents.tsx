import EventItem from "./EventItem";

import { dashboardEvents } from "../data/dashboard-events-data";

export default function UpcomingEvents() {
  return (
    <div className="space-y-3">
      {dashboardEvents.map((event) => (
        <EventItem
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}