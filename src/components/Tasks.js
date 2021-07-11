import Task from './Task'

const Tasks = (props) => {
    return (
        <>
            {
                props.tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onDeleteClicked={props.onDeleteClicked}
                        onToggleReminder={props.onToggleReminder} />
                ))
            }
        </>
    )
}

export default Tasks
