import { AppRoutes } from "@/core/routes";
import { MainContextProvider } from "@/core/contexts";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <MainContextProvider>
        <AppRoutes />
      </MainContextProvider>
    </div>
  );
}

export default App;