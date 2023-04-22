import { ContextTask } from '../../TaskContext'
import { useContext, useState } from 'react'
import { Modal } from '../Modal/Modal'
import { Container } from './styles'

export function Task({task}){

  const {handleDeleteById,toggleTaskCompletedById} = useContext(ContextTask)
  const [openModal, setOpenModal] = useState(false)

  function handleOpenOrCloseModal(valueModal){
    setOpenModal(valueModal )
  }

  return(
    <Container isCompleted={task.isCompleted }>

      {
        openModal && (
          <Modal task={task} onDelete={handleDeleteById} onModal={handleOpenOrCloseModal}/>           
        )
      }

      <button className="check-button" onClick={() => toggleTaskCompletedById(task.id)}>
        <div/>
      </button>
      
       <p> 
        {task.title}
       </p>

      <button className="button-delete" onClick={handleOpenOrCloseModal}>
        Deletar
      </button>
    </Container>
  )
}