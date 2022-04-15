import { FaTimes } from 'react-icons/fa'

const Task = ( {task , onDelete, onToggle } ) => {
  return (
    <li  key={task.id}  className={task.reminder ? "list-group-item list-group-item-success" : "list-group-item" } onDoubleClick={() => onToggle(task.id)}>
        <h3>
          {task.text} 
          <FaTimes style={{color: 'red', cursor: 'pointer' }} 
          onClick={() => onDelete(task.id)} />
        </h3>
        <p>{task.day}</p>
    </li>
  )
}

export default Task