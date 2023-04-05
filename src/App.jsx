import { useState } from 'react'
import { Header } from './components/Header/Header'
import { HeaderTask } from './components/HeaderTask/HeaderTask'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([])

  function handleSetTasks(taskTitle){
    setTasks([
      ...tasks,
      {
        id:uuidv4(),
        title:taskTitle,
        isCompleted:false
      }
    ])
  }

  function handleDeleteById(taskId){
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  function toggleTaskCompletedById(taskId){
    const newTask = tasks.map( task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted:!task.isCompleted
        }
      }

      return task
    })

    setTasks(newTask)
  }

  return (
    <div >
      <Header
        onSetTask={handleSetTasks}
      />
      <HeaderTask
       tasks={tasks}    
       onDelete={handleDeleteById}   
       onToggleTask={toggleTaskCompletedById}
      />
    </div>
  )
}

export default App
