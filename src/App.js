import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import About from "./components/About"

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  // Fetching Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Fetching sigle task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Delete task
  const onTaskDeleteClicked = async (id) => {
    await fetch (`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  // Toggle task
  const onTaskToggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updatedTaskObject = {...task, reminder: !task.reminder}

    const updatedTask = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTaskObject)
    })
    setTasks(tasks.map((task) => {
      return task.id === id ? {...task, reminder: !task.reminder} : task
    }))
  }

  // Add a task
  const onAddTask = async (task) => {
    const insertedTask = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(task)
    })
    setTasks([...tasks, await insertedTask.json()])
  }
  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" addTaskShown={showAddTask} onAddClicked={() => {setShowAddTask(!showAddTask)}}/>
        <Route exact path='/' render={(props) => (
          <>
            { showAddTask && <AddTask onAddSubmit={onAddTask} /> }
            {
              tasks.length > 0 ? (
              <Tasks 
              tasks={tasks}
              onDeleteClicked = {onTaskDeleteClicked}
              onToggleReminder = {onTaskToggleReminder} />
              ) : (
              "Kosong anjir"
              )
            }
            <Footer />
          </>
        )} />
        <Route path='/about' component={About} />
      </div>
    </Router>

  );
}

export default App;
