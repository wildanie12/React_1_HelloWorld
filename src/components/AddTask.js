import {useState} from 'react'

const AddTask = (props) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmitForm = (e) => {
        e.preventDefault()
        if (!text) alert('Please add a task first!')
        props.onAddSubmit({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmitForm}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text"
                    value={text}
                    placeholder="Add Task"
                    onChange={(e) => {setText(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type="text"
                    value={day}
                    placeholder="Set day & time..."
                    onChange={(e) => {setDay(e.target.value)}} />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder?</label>
                <input 
                    type="checkbox"
                    value={text}
                    checked={reminder}
                    onChange={(e) => {setReminder(e.currentTarget.checked)}} />
            </div>
            <input type="submit" value="Add" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
