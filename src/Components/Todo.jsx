import './Todo.css';

function Todo({ title, onDelete, paragraph }) {
    console.log(title); 
function handleDelete() {
    onDelete();
} 

  return (
    <div className='todo'>
        <h2>{title}</h2>
        <p>{paragraph}</p>  
        <button onClick={() => onDelete(
          console.log('Delete clicked')
        )}>Delete</button>
      </div>
  );
}


export default Todo;