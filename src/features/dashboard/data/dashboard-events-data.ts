export interface DashboardEvent {
  id: number;
  title: string;
  date: string;
  location: string;
}

export const dashboardEvents: DashboardEvent[] = [
  {
    id: 1,
    title: "Alumni Homecoming 2026",
    date: "July 18, 2026",
    location: "JBLFMU Main Campus",
  },
  {
    id: 2,
    title: "Career Development Seminar",
    date: "August 5, 2026",
    location: "Auditorium",
  },
  {
    id: 3,
    title: "Medical Mission",
    date: "September 12, 2026",
    location: "Community Center",
  },
  {
    id: 4,
    title: "Founder's Day Celebration",
    date: "October 10, 2026",
    location: "University Grounds",
  },
];