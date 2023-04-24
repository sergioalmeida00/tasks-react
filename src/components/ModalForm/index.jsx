import { Container, Overlay } from "./styles";
import { Input } from "../Input"
import { useContext, useState } from "react";
import { ContextTask } from "../../TaskContext";

export function ModalForm(){
  const[title,setTitle] = useState('')
  const[quantity,setQuantity] = useState('')
  const[unit,setUnit] = useState('')
  
  const {handleOpenOrCloseModal, handleSetTasks} = useContext(ContextTask)

  function handleTitleChange(event){
    setTitle(event.target.value)
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value)
  }

  function handleUnitChange(event){
    setUnit(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    handleSetTasks(title,quantity,unit)
    setTitle('')
    setQuantity('')
    setUnit('')
  }
  const isEmpityTitleAndQuantity = (title.length === 0 || quantity.length === 0 || unit.length === 0) ? true : false

  return (
    <Overlay>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Nome do Item"
            value={title}
            onChange={handleTitleChange}
          />

          <div className="group">
            <Input
              type="number"
              placeholder="Quantidade"
              value={quantity}
              onChange={handleQuantityChange}
            />

            <select value={unit} onChange={handleUnitChange}>
              <option>Selecione a unidade</option>
              <option value="KG">Kilo</option>
              <option value="G">Grama</option>
              <option value="PCT">Pacote</option>
              <option value="UN">Unidade</option>
              <option value="CX">Caixa</option>
            </select>
          </div>
          <footer>
            <a onClick={()=>handleOpenOrCloseModal(false)}>Cancelar</a>
            <button disabled={isEmpityTitleAndQuantity} >Cadastrar</button>
          </footer>
        </form>
      </Container>
    </Overlay>
  )
}