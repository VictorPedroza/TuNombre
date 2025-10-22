import { Sidebar } from "@/components";

function App() {
  return (
    <>
      <div className='flex h-screen w-screen bg-gradient-to-tr from-slate-500 to-slate-800 lg:px-12 lg:py-8'>
        <div className="bg-gray-50 w-full h-full lg:rounded-lg shadow-lg flex overflow-hidden">
          <Sidebar.Root>
            <Sidebar.Head />
          </Sidebar.Root>
          <main className="w-full h-full px-4 py-3">
            Content
          </main>
        </div>
      </div>
    </>
  )
}

export default App;