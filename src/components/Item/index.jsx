import React from "react"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Item(props) {
  const { id, name, done } = props
  const handleCheck = (id) => {
    return (event) => {
      props.updateTodo(id, event.target.checked)
    }
  }
  const handleDelete = (id) => {
    return (event) => {
      props.deleteTodo(id)
    }
  }
  return (
    <li className="tolist-li">
      <input type="checkbox" checked={done} onChange={handleCheck(id)} />
      <span>{name}</span>
      <button
        className="btn btn-danger"
        style={{ fontSize: "10px" }}
        onClick={handleDelete(id)}
      >
        删除
      </button>
    </li>
  )
}
