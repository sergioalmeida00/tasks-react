import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { HeaderTask } from './components/HeaderTask/HeaderTask'
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY= 'todo:savedTasks'
function App() {
  const [tasks, setTasks] = useState([])

  function loadSavedStorageTasks(){
   const savedTaskStorage = localStorage.getItem(LOCAL_STORAGE_KEY)

   if(savedTaskStorage){
    setTasks(JSON.parse(savedTaskStorage))
   }
  }

  function setTasksStorage(newTasks){
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function handleSetTasks(taskTitle){
    setTasksStorage([
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
    setTasksStorage(newTask)
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

    setTasksStorage(newTask)
  }
  
  useEffect( () => {
    loadSavedStorageTasks()
  },[])

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
