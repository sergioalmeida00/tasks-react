import styles from './Modal.module.css'

export function Modal({task, onDelete, onModal}){

  return(
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h3>Você tem certeza que gostaria de excluir esta task?</h3>
          <strong> { task.title } </strong>
          <footer>
            <button className={styles.cancel} onClick={() => onModal(false)}>Cancelar</button>
            <button className={styles.delete} onClick={() => onDelete(task.id)} >Sim, excluir</button>
          </footer>
        </div>
      </div>
  )
}