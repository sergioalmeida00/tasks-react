import styles from './Task.module.css'
export function Task({task, onDelete, onToggleTask}){
  return(
    <div 
      className={styles.taskContent}
    >
      <button className={styles.checkContainer} onClick={() => onToggleTask(task.id)}>
        <div 
          className={task.isCompleted ? styles.active : ''}
        />
      </button>
      
       <p className={ task.isCompleted ? styles.completed : ''}> 
        {task.title}
       </p>

      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        Deletar
      </button>
    </div>
  )
}