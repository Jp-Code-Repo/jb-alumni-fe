import { GraduationCap } from "lucide-react";
import { SidebarHeader } from "@/components/ui/sidebar";

export default function AppBrand() {
  return (
    <SidebarHeader className="border-b p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GraduationCap className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-sm font-semibold leading-none">
            Alumni System
          </h2>

          <p className="text-xs text-muted-foreground">
            JBLFMU
          </p>
        </div>
      </div>
    </SidebarHeader>
  );
}