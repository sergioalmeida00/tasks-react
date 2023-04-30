import { Task } from '../Task/Task'
import ClipBoard from '../../assets/Clipboard.svg'
import { useContext, useState } from 'react'
import { ContextTask } from '../../TaskContext'
import { Container } from './styles'
import { FiArrowDown } from 'react-icons/fi';

export function HeaderTask(){
  const { tasks } = useContext(ContextTask)
  const[orderBy, setOrderBy] = useState(false)

  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  function handleOrderBy(propriedade){
    
    tasks.sort((a, b) => {
      if (a[propriedade] > b[propriedade]) {
        return orderBy ? 1 : -1;
      }
      if (a[propriedade] < b[propriedade]) {
        return orderBy ? -1 : 1;
      }
      return 0;
    })
    setOrderBy(
      (prevState) =>  ( !prevState )
    )
  }
  

  return(
    <Container orderBy={orderBy}>
        <div className="task-info">
          <span>Tarefas criadas <strong> {tasksQuantity} </strong></span>
          <span>Concluídas <strong>{completedTasks} de {tasksQuantity} </strong></span>
        </div>

          <button onClick={() => handleOrderBy('isCompleted')}>
            <span>Ordenar</span>
            <FiArrowDown/>            
          </button>

        <div className="task">
          {
            tasks.map((task) => (
              <Task 
                key={task.id}
                task={task}  
              />
            ))
          }

          {tasksQuantity <= 0 && (
            <div className="task-empty">
                <img src={ClipBoard} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
    </Container>

  )
}