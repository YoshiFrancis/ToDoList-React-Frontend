import { useState } from "react"
import AddTaskForm from "./AddTaskForm"

const Task = ({ task, removeTask, updateTask }) => {

    const [visibility, setVisibility] = useState(false)
    return (
        <tr>
            <td>Task:{task.task}</td>
            <td>Priority: {task.priority}</td>
            <td><button onClick={() => removeTask(task.id)}>Delete</button></td>
            <td><button onClick={() => setVisibility(!visibility)}>{visibility ? "Update" : "Edit"}</button></td>
            {visibility ?
                <td>
                    <AddTaskForm addTask={updateTask} id={task.id}/>
                    <button onClick={() => setVisibility(!visibility)}>Cancel</button>
                </td> : <></>}
        </tr>
    )
}

export default Task