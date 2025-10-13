
import './App.css';
import Todo from './Components/Todo';
import Title from './Components/Title';
function App() {
  return (
    <div >
      <Title text="My Todo List" />
      <div>
        <Todo title="Finish fronted simplified" onDelete={() => {}} />
      </div>
      <div>
        <Todo title="Finish interview section" onDelete={() => {}} />
      </div>
      <div>
        <Todo title="Land $100K+ a Job" onDelete={() => {}} />
      </div>
      <div>
        <h2>Land $100K+ a Job</h2>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default App;
