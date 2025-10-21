import { NotificationContext } from "@/contexts";
import { useContext } from "react";

function App() {

  const { addNotification } = useContext(NotificationContext);

  return (
    <>
      <div className='flex flex-col gap-2 h-screen w-screen p-8 bg-white' >
        <h1>Teste de Notificação</h1>
        <button onClick={() => addNotification({ title: 'Teste', subtitle: 'Teste' })} >Adicionar</button>
      </div>
    </>
  )
}

export default App;