
import './App.css';
import Todo from './Components/Todo';
function App() {
  return (
    <div >
      <h1>My to do list</h1>
      <div>
        <Todo title="Finish fronted simplified" onDelete={() => {}} />
      </div>
      <div>
        <Todo title="Finish interview section" onDelete={() => {}} />
      </div>
      <div>
        <Todo title="Land $100K+ a Job" onDelete={() => {}} />
      </div>
    </div>
  );
}

export default App;
