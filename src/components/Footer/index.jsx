import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function index(props) {
  const handleCheckAll = (event) => {
    props.handleCheckAll(event.target.checked)
  }
  const deleteTodoAll = () => {
    props.deleteTodoAll()
  }
  return (
    <div>
      <label>
        全选:
        <input type="checkbox" name="" id="" onChange={handleCheckAll} />
      </label>
      <button
        className="btn btn-danger"
        style={{ fontSize: "10px", float: "right" }}
        onClick={deleteTodoAll}
      >
        全部删除
      </button>
      <p> 总数{props.num}</p>
    </div>
  )
}
