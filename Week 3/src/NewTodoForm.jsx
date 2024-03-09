import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  const [newPrio, setNewPrio] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem, newPrio)

    setNewItem("")
    setNewPrio("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">

      <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />

      <label htmlFor="priority">Priority</label>
        <input
          value={newPrio}
          onChange={e => setNewPrio(e.target.value)}
          type="priority"
          id="priority"
  
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
