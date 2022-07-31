import { useEffect, useState } from "react"
import AddTaskForm from "./components/AddTaskForm"
import Task from "./components/Task"
import LoginForm from "./components/LoginForm"
import Welcome from "./components/Welcome"
import taskService from "./services/tasks"
const App = () => {
    console.log("rerender")
    const [tasks, setTasks] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')


    useEffect(() => {
        fetchData()
    }, [])

    const addTask = async (task) => {
        taskService.create(task)
        setMessage("Task is created!")
    }


    const removeTask = async (id) => {
        await taskService.removeTask(id)
        setMessage('Task has been deleted')
        await fetchData()
        setTimeout(() => {
            setMessage('')
        }, 5000)
    }

    const updateTask = async (task) => {
        await taskService.updateTask(task)
        setMessage('Task Has been updated')
        await fetchData()
        setTimeout(() => {
            setMessage('')
        }, 5000)
    }
    const fetchData = async() => {
        let tasksEl = await taskService.getAll()
        setTasks(tasksEl)
    }

    const tableStyle = {
        border: '1px solid black'
    }
    return (
        <div>
            <Welcome />
            <h1>{message}</h1>
            <LoginForm setPassword={setPassword} setUsername={setUsername} username={username} password={password}/>
            <AddTaskForm addTask={addTask}/>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {tasks
                        .sort((a, b) => a.priority - b.priority)
                        .map(task =>
                            <Task key={task.id} task={task} removeTask={removeTask} updateTask={updateTask}/>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default App