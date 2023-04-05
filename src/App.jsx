import { Header } from './components/Header/Header'
import { HeaderTask } from './components/HeaderTask/HeaderTask'
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <Header/>
      <HeaderTask/>
    </TaskProvider>
  )
}

export default App
