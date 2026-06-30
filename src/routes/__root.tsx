import { Outlet, createRootRoute } from "@tanstack/react-router";

import AppLayout from "@/app/layouts/AppLayout";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}