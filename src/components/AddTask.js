import { useState } from "react"

const AddTask = ( {onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
      e.preventDefault()

      if (!text) {
          alert('Please Add Text')
          return
      }

      onAdd({text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)
  }

  return (
    <form className="add-form form-control" onSubmit={onSubmit}>
        <div>
            <label className="form-label">Task</label>
            <input className="form-control" 
            type='text' 
            placeholder="Add task" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div>
            <label className="form-label">Day and Time</label>
            <input className="form-control" type='text' placeholder="Add day and time"
            value={day} 
            onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-check">
            <input className="form-check-input" type='checkbox'
            checked={reminder}
            value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
            <label className="form-check-label">
                Set Reminder
            </label>   
        </div><br/>
        <input className="btn btn-primary mb-3" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask