import { Task } from '../Task/Task'
import ClipBoard from '../../assets/Clipboard.svg'
import { useContext } from 'react'
import { ContextTask } from '../../TaskContext'
import { Container } from './styles'


export function HeaderTask(){
  const { tasks } = useContext(ContextTask)

  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return(
    <Container>
        <div className="task-info">
          <span>Tarefas criadas <strong> {tasksQuantity} </strong></span>
          <span>Concluídas <strong>{completedTasks} de {tasksQuantity} </strong></span>
        </div>
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