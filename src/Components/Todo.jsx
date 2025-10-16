import './Todo.css';

function Todo({ title, onDelete }) {
  return (
    <div className='todo'>
      <div>Todo</div>
      <div>
        <h2>{title}</h2>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
export default Todo;