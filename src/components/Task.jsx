import { useState } from 'react'
import '../styles/Task.css'
import doneIcon from '../assets/doneIcon.png'
import deleteIcon from '../assets/deleteIcon.png'

const Task = (props) => {

  const todo = props.todo
  const handleComplete = props.handleComplete
  const handleDelete = props.handleDelete
  const [className, setClassName] = useState('incompleted')

  const handleToggle = (todo) => {
    handleComplete(todo)
    todo.completed ? setClassName('completed') : setClassName('incompleted')
  }

  return (
    <div className={`${className} task`}>
      <p>{todo.title}</p>
      <div className='buttons'>
        <button onClick={() => handleToggle(todo)}>
          <img src={doneIcon} width={18} height={18} alt="Toggle check" />
        </button>
        <button onClick={() => handleDelete(todo)}>
          <img src={deleteIcon} width={20} height={20} alt="Delete" />
        </button>
      </div>
    </div>
  )
}

export default Task
