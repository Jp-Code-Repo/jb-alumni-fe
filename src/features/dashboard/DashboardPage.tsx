import { dashboardStats } from "./data/dashboard-data";

import AppBreadcrumb from "@/components/common/AppBreadcrumb";
import AppWidget from "@/components/common/AppWidget";
import AppWidgetGrid from "@/components/common/AppWidgetGrid";

import AlumniGrowthChart from "./components/AlumniGrowthChart";
import PageHeader from "./components/PageHeader";
import StatsCard from "./components/StatsCard";
import StatsGrid from "./components/StatsGrid";
import UpcomingEvents from "./components/UpcomingEvents";
import RecentAlumni from "./components/RecentAlumni";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <AppBreadcrumb
        items={[
          {
            label: "Dashboard",
          },
        ]}
      />

      <PageHeader
        title="Dashboard"
        description="Welcome to the Alumni System Dashboard."
      />

      <StatsGrid>
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={<Icon className="h-5 w-5 text-muted-foreground" />}
            />
          );
        })}
      </StatsGrid>

      <AppWidgetGrid>
        <AppWidget
          title="Alumni Growth"
          description="Monthly alumni registrations"
        >
          <AlumniGrowthChart />
        </AppWidget>

        <AppWidget
          title="Upcoming Events"
          description="Scheduled alumni activities"
        >
          <UpcomingEvents />
        </AppWidget>
      </AppWidgetGrid>
    </div>
  );
}