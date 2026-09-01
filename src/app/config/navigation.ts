import { LayoutDashboard, Users, List, Plus, FileText } from "lucide-react";

export const navigation = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Alumni",
        icon: Users,
        children: [
          {
            title: "Masterlist",
            href: "/alumni/masterlist",
            icon: List,
          },
          {
            title: "Create",
            href: "/alumni/profile/create",
            icon: Plus,
          },
          {
            title: "Reports",
            href: "/alumni/reports",
            icon: FileText,  
          },
        ],
      },
    ],
  },
];