import { Notification } from '@/components/layouts/Notification/Notification'

function App() {
  return (  
    <div className='flex flex-col gap-2 h-screen w-screen p-8 bg-white' >
      <Notification />
      <Notification.Success />
      <Notification.Warning />
      <Notification.Error />
    </div>
  )
}

export default App;