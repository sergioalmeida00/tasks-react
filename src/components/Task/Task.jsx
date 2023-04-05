import styles from './Task.module.css'
import { ContextTask } from '../../TaskContext'
import { useContext } from 'react'

export function Task({task}){

  const {handleDeleteById,toggleTaskCompletedById} = useContext(ContextTask)

  return(
    <div 
      className={styles.taskContent}
    >
      <button className={styles.checkContainer} onClick={() => toggleTaskCompletedById(task.id)}>
        <div 
          className={task.isCompleted ? styles.active : ''}
        />
      </button>
      
       <p className={ task.isCompleted ? styles.completed : ''}> 
        {task.title}
       </p>

      <button className={styles.delete} onClick={() => handleDeleteById(task.id)}>
        Deletar
      </button>
    </div>
  )
}