import { Outlet, createFileRoute } from "@tanstack/react-router";

function AlumniLayout() {
  return <Outlet />;
}

export const Route = createFileRoute("/alumni")({
  component: AlumniLayout,
});