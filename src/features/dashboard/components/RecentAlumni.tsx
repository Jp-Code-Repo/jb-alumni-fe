import PersonListItem from "@/components/common/PersonListItem";

import { recentAlumni } from "../data/dashboard-recent-alumni-data";

export default function RecentAlumni() {
  return (
    <div className="space-y-3">
      {recentAlumni.map((alumnus) => (
        <PersonListItem
          key={alumnus.id}
          name={alumnus.name}
          subtitle={alumnus.course}
          badge={`Class of ${alumnus.graduationYear}`}
        />
      ))}
    </div>
  );
}