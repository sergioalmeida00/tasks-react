import { Task } from '../Task/Task'
import style from './HeaderTask.module.css'
import ClipBoard from '../../assets/Clipboard.svg'
import { useContext } from 'react'
import { ContextTask } from '../../TaskContext'


export function HeaderTask(){
  const { tasks } = useContext(ContextTask)

  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return(
    <section>
        <div className={style.tasksInfo}>
          <span>Tarefas criadas <strong> {tasksQuantity} </strong></span>
          <span>Concluídas <strong>{completedTasks} de {tasksQuantity} </strong></span>
        </div>
        <div className={style.task}>
          {
            tasks.map((task) => (
              <Task 
                key={task.id}
                task={task}  
              />
            ))
          }

          {tasksQuantity <= 0 && (
            <div className={style.tasksEmpety}>
                <img src={ClipBoard} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
    </section>

  )
}