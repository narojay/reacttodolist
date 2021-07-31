import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"
import List from "./components/List"

export default function App() {
  //状态在哪里，操作状态的方法就在哪里
  //初始化状态
  const [state, setState] = useState({
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: false }
    ]
  })
  const addToDo = (toDoObj) => {
    const { todos } = state
    const newTodos = [toDoObj, ...todos]
    setState({ todos: newTodos })
  }
  const handleCheckAll = (done) => {
    const { todos } = state
    const newTodos = todos.map((todo) => {
      return { ...todo, done }
    })
    setState({ todos: newTodos })
  }
  const updateTodo = (id, done) => {
    const { todos } = state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        console.log({ ...todo })
        console.log({ ...todo, done })
        return { ...todo, done }
      } else {
        return { ...todo }
      }
    })
    setState({ todos: newTodos })
  }
  const deleteTodo = (id) => {
    const { todos } = state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    //更新状态
    setState({ todos: newTodos })
  }

  const deleteTodoAll = () => {
    const { todos } = state
    const newtodos = todos.filter((todo) => todo.done === false)
    //更新状态
    setState({ todos: newtodos })
  }
  //addTodo用于添加一个todo，接收的参数是todo对
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addToDo={addToDo} />
        <List
          todos={state.todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          handleCheckAll={handleCheckAll}
        />
        <Footer
          handleCheckAll={handleCheckAll}
          deleteTodoAll={deleteTodoAll}
          num={state.todos.length}
        />
      </div>
    </div>
  )
}
