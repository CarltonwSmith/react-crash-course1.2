import './App.css';
import Todo from './Components/Todo';
import Title from './Components/Title';

function App() {
  return (
    <div >
      <Title />
      <div className="todo__wrapper">
        <Todo title="Finish fronted simplified" onDelete={() => {}} />
        <Todo title="Finish interview section" onDelete={() => {}} />
        <Todo title="Land $100K+ a Job" onDelete={() => {}} />
      </div>
      <Modal />
    </div>
  );
}

export default App;

      </div>
    </div>
  );
}

export default App; 
