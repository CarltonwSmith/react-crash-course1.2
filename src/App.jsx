import './App.css';
import Todo from './Components/Todo';
import Title from './Components/Title';
import Modal from './Components/Modal';   
function App() {
  return (
    <div className="App">
      <Title />
      <div className="todo__wrapper">
        <Todo title="Finish fronted simplified" onDelete={() => {}} 
          paragraph = "Code along with Frontend Simplified step by step."
          />
        <Todo title="Finish interview section" onDelete={() => {}} 
          paragraph = "Complete every interview question in the next 6 weeks."
          />
        <Todo title="Land $100K+ a Job" onDelete={() => {}} 
          paragraph = "Apply to 100 jobs."
          />
      </div>
      <Modal message="Are you sure you want to delete?" />
    </div>
  );
}

export default App;

