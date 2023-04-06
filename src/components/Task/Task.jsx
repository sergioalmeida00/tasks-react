import styles from './Task.module.css'
import { ContextTask } from '../../TaskContext'
import { useContext, useState } from 'react'
import { Modal } from '../Modal/Modal'

export function Task({task}){

  const {handleDeleteById,toggleTaskCompletedById} = useContext(ContextTask)
  const [openModal, setOpenModal] = useState(false)

  function handleOpenOrCloseModal(valueModal){
    setOpenModal(valueModal )
  }

  return(
    <div 
      className={styles.taskContent}
    >

      {
        openModal && (
          <Modal task={task} onDelete={handleDeleteById} onModal={handleOpenOrCloseModal}/>           
        )
      }

      <button className={styles.checkContainer} onClick={() => toggleTaskCompletedById(task.id)}>
        <div 
          className={task.isCompleted ? styles.active : ''}
        />
      </button>
      
       <p className={ task.isCompleted ? styles.completed : ''}> 
        {task.title}
       </p>

      <button className={styles.delete} onClick={handleOpenOrCloseModal}>
        Deletar
      </button>
    </div>
  )
}