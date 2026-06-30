import AppLayout from "@/app/layouts/AppLayout";
import AppProviders from "@/app/providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <AppLayout>
        <div className="p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="mt-2 text-muted-foreground">
            Welcome to the Alumni System Dashboard.
          </p>
        </div>
      </AppLayout>
    </AppProviders>
  );
}

export default App;