import React, { useState } from 'react'; 
import { Container } from './todostyle';
import { Box } from './todostyle';
import Task from './Task';

function Todo() {
  const [tarefa, setTarefa] = useState({
    tarefa:'',
    concluido: false,
    id: ''
  }); 
  const [itens, setItens] = useState([]); 

  function inputTarefa(event) {
    const input = event.target.value;
    if(input === ' ') {
      return
    }
    setTarefa({tarefa: input, concluido:false, id: Date.now()});
 }

 function addTarefa(event) {
   event.preventDefault();
  if (!tarefa.tarefa) {
    return
  };
  setItens([...itens, tarefa]);
  setTarefa({tarefa: '', concluido:false, id: ''});
}

function handleCheckbox(event, id) {
  const input = event.target.checked;
  const newItens = itens.map((itens) => {
    if(id === itens.id) {
      return {
        ...itens, concluido: input
      }
    }
    return itens;
  })
  setItens(newItens);
}

function clearTarefa(id) {
  const newItens = itens.filter((item) => {
    if(item.id === id && item.concluido) {
      return false
    }
    if(item.id === id && !item.concluido){
      window.alert('❗ Conclua o seu lembrete antes de excluí-lo ❗');
      return true
    }
    return item.id !== id
  });
  console.log(newItens);
  setItens(newItens);
}

function clearAll() {
  const confirm = window.confirm('❗ Deseja excluir todos os seus lembretes? ❗')
  if(confirm) {
    setItens([])
  }
}

  return (
    <Container>
      <h1> Lembretes 📌 </h1>
      <form onSubmit={addTarefa} >
        <input type='text' placeholder='Adicione uma tarefa' onChange={inputTarefa} value={tarefa.tarefa} />
        <button type='submit' id='btn-add'> + </button>
        <button type='submit' id='btn-del' onClick={clearAll}> x </button>
      </form>
      <Box>
        {itens.map((item) => (
          <Task handleCheckbox={handleCheckbox} clearTarefa={clearTarefa} concluido={tarefa.concluido} item={item} key={item.id} />
	    ))}
      </Box>
    </Container>
  );
}

export default Todo;