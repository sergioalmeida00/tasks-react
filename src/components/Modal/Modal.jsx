import { Container, Footer, Overlay } from './styles'

export function Modal({task, onDelete, onModal}){

  return(
      <Overlay>
        <Container>
          <h3>Você tem certeza que gostaria de excluir esta task?</h3>
          <strong> { task.title } </strong>
          <Footer>
            <a onClick={() => onModal(false)}>Cancelar</a>
            <button className="button-modal-delete" onClick={() => onDelete(task.id)} >Sim, excluir</button>
          </Footer>
        </Container>
      </Overlay>
  )
}