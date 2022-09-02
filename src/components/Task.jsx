import { Container } from './taskstyle';

function Task({handleCheckbox, clearTarefa, item}) {

  return(
    <Container concluido={item.concluido}>
      <div className='box-checkbox'>
        <input type='checkbox' onChange={(event) => handleCheckbox(event, item.id)} value={item.concluido}/>
        <p key={item.id} > {item.tarefa} </p> 
      </div>
      <span onClick={() => clearTarefa(item.id)} id='btn-delete'> 🗑️ </span>
    </Container>
  )
}

export default Task;