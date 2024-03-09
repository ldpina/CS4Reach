import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      <p>No Tasks!</p> 
      {todos.length === 0 && <img src = "https://media.tenor.com/QWSXGYQHn4oAAAAM/yippee-iluvmybf.gif"></img>}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
