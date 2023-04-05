import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ContextTask = createContext()

const LOCAL_STORAGE_KEY= 'todo:savedTasks'
export function TaskProvider({ children }){
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
    <ContextTask.Provider
      value={{setTasksStorage,handleSetTasks,handleDeleteById,toggleTaskCompletedById,tasks }}
    >
        { children }
    </ContextTask.Provider>
  )


}