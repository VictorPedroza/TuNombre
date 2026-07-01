import { environment } from "@/core/env";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold">{environment.appName}</h1>
    </div>
  );
}

export default App;