export interface RecentAlumni {
  id: number;
  name: string;
  course: string;
  graduationYear: number;
}

export const recentAlumni: RecentAlumni[] = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    course: "BS Marine Transportation",
    graduationYear: 2025,
  },
  {
    id: 2,
    name: "Maria Santos",
    course: "BS Marine Engineering",
    graduationYear: 2025,
  },
  {
    id: 3,
    name: "Jose Reyes",
    course: "BS Customs Administration",
    graduationYear: 2024,
  },
  {
    id: 4,
    name: "Angela Cruz",
    course: "BS Hospitality Management",
    graduationYear: 2024,
  },
];