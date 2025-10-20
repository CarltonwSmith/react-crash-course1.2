import './App.css';
import Todo from './Components/Todo';
import Title from './Components/Title';
import Modal from './Components/Modal';   
function App() {
  return (
    <div>
      <Title />
      <input type= "text" onChange={(event) => {
        console.log (event.target.value)
      }} />
      <button>Add Todo</button>
      <div className="todo__wrapper">
        <Todo title="Finish fronted simplified" onDelete={() => {}} />
        <Todo title="Finish interview section" onDelete={() => {}} />
        <Todo title="Land $100K+ a Job" onDelete={() => {}} />
           
      </div>
      <Modal message="Are you sure you want to delete?" />
    </div>
  );
}

export default App;

