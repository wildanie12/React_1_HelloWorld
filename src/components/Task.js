import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder': ''}`} onDoubleClick={() => {props.onToggleReminder(props.task.id)}}>
            <h3>
                {props.task.text}
                <FaTimes onClick={() => {props.onDeleteClicked(props.task.id)}} style={{color: 'red'}} />
            </h3>
            <p>{props.task.day}</p>   
        </div>
    )
}

Task.defaultProps = {
    task: {
        text: "Some Task"
    }
}

export default Task
