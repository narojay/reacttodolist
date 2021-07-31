import { nanoid } from "nanoid"
import "./index.css"
export default function Header(props) {
  const handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (target.value.trim() === "") {
      alert("输入不能为空")
      return
    }
    if (keyCode !== 13) return
    const todoObj = { id: nanoid(), name: target.value, done: false }
    props.addToDo(todoObj)
    target.value = ""
  }
  return (
    <div>
      <span style={{ lineHeight: "30px", height: "30px" }}>添加:</span>
      <input
        className="todo-header"
        type="text"
        onKeyUp={handleKeyUp}
        placeholder="请输入你的任务名 称,按回车确认"
      />
    </div>
  )
}
