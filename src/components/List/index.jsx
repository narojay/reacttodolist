import React from "react"
import Item from "../Item"

export default function List(props) {
  const { todos, updateTodo, deleteTodo, handleCheckAll } = props
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            {...todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            handleCheckAll={handleCheckAll}
          />
        )
      })}
    </ul>
  )
}
