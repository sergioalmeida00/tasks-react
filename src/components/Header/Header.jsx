import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { ContextTask } from '../../TaskContext'
import { Container } from './styles'
import { ModalForm } from '../ModalForm'

export function Header(){
  
  const {handleOpenOrCloseModal,openModal} = useContext(ContextTask)

  return(
      <Container>
        {
          openModal && (
            <ModalForm/>
          )
        }
        <main>
          <img src={logo} alt="Logo" />
          <button onClick={() => handleOpenOrCloseModal(true)}>
              Criar
          </button>
        </main>
      </Container> 
  )
}