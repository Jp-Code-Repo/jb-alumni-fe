import {
  CalendarDays,
  GraduationCap,
  UserCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string;
  icon: LucideIcon;
}

export const dashboardStats: DashboardStat[] = [
  {
    title: "Total Alumni",
    value: "12,543",
    icon: Users,
  },
  {
    title: "Registered Alumni",
    value: "8,934",
    icon: GraduationCap,
  },
  {
    title: "Upcoming Events",
    value: "12",
    icon: CalendarDays,
  },
  {
    title: "Verified Alumni",
    value: "7,856",
    icon: UserCheck,
  },
];