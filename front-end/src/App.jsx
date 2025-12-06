import { AppRoutes } from "@/routes/AppRoutes";

function App() {
  return(
    <div className="w-screen h-screen bg-linear-to-r from-red-500 from-10% via-red-600 via-40% to-red-700 to-90% lg:px-14 lg:py-10">
      <AppRoutes />
    </div>
  )
}

export default App;