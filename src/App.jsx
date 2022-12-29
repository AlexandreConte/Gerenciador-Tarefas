import { useState } from 'react'
import './styles/App.css'
import { getLastId, removeTodo } from './functions/utils'
import Task from './components/Task'
import ToDoModel from './model/ToDoModel'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todoValue) {
      const id = getLastId([...todos])
      setTodos([...todos, new ToDoModel(id, todoValue)])
    }
    setTodoValue('')
  }

  const handleComplete = (todo) => {
    todo.toggleCompleted()
  }

  const handleDelete = (todo) => {
    setTodos(removeTodo(todos, todo))
  }

  return (
    <div>
      <div>
        {todos ? todos.map(todo => {
          return (
            <Task
              key={`${todo.id} ${todo.title}`}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              className={todo.completed ? "completed" : "incompleted"}
            />
          )
        }) : null}
      </div>
      <div id='formSpaceHolder'>
        <form id='form' onSubmit={handleSubmit}>
          <div id='taskValue'>
            <input
              type="text"
              value={todoValue}
              onChange={e => setTodoValue(e.target.value)}
              placeholder='Adicionar uma tarefa'
              required
            />
          </div>
          <div>
            <button type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
