import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { useContext } from 'react'
import { ContextTask } from '../../TaskContext'
import { Container } from './styles'

export function Header(){
  
  const {handleSetTasks} = useContext(ContextTask)

  const [title,setTitle] = useState('')
  const isNewTaskEmpty = title.length === 0


  function handleSubmit(event){
    event.preventDefault()
    handleSetTasks(title)
    setTitle('')
  }

  function handleTitleOnChange(event){
    setTitle(event.target.value)
  }

  return(
      <Container>
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={title}
            onChange={handleTitleOnChange}
          />
          <button disabled={isNewTaskEmpty}>
            Criar
          </button>
        </form>
      </Container> 
  )
}