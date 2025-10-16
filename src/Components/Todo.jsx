import './Todo.css';

function Todo({ title, onDelete, paragraph }) {
    console.log(title); 
  return (
    <div className='todo'>
      <div></div>
      <div>
        <h2>{title}</h2>
        <p>{paragraph}</p>  
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
export default Todo;