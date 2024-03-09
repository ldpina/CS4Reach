export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, priority }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
       <p id="prio">Priority: {priority}</p>
      </label>
      <p>Task: {title}</p>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>

      
    </li>
  )
}
