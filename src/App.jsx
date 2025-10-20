import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import Title from './Components/Title';
import Modal from './Components/Modal';   
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteTodo() {
    setIsModalOpen(true);
  }

  return (
    <div>
      <Title />
      <input type= "text" onChange={(event) => {
        console.log (event.target.value)
      }} />
      <button onClick={() => setIsModalOpen(true)}>Add Todo</button>
      <div className="todo__wrapper">
        <Todo title="Finish fronted simplified" onDelete={deleteTodo} />
        <Todo title="Finish interview section" onDelete={deleteTodo} />
        <Todo title="Land $100K+ a Job" onDelete={deleteTodo} />

      </div>
        {isModalOpen && <Modal message="Are you sure you want to delete?" />}
    </div>
  );
}

export default App;

