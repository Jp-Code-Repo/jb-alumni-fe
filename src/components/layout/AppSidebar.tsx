import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";

import AppNavigation from "@/components/layout/AppNavigation";

import AppBrand from "@/components/layout/AppBrand";
import AppUser from "./AppUser";

export default function AppSidebar() {
  return (
    <Sidebar>

      <AppBrand />

      <SidebarContent className="p-4">
        <AppNavigation />
      </SidebarContent>

      <AppUser />

    </Sidebar>
  );
}