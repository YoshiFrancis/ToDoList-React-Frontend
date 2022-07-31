import { useState } from "react"


const AddTaskForm = ({ addTask, id }) => {
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState('')
    return (
        <div>
            <form onSubmit={() => {
                if (id) {
                    addTask({
                        task, priority, id
                    })
                } else {
                    addTask({
                        task, priority
                    })
                }
            }}>
                <input
                    type="text"
                    value={task}
                    name="task"
                    onChange={({ target }) => setTask(target.value)}
                    placeholder="Task"
                />
                <input
                    type="number"
                    value={priority}
                    name="priority"
                    onChange={({ target }) => setPriority(target.value)}
                    placeholder="Priority"
                />
                <button
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}

export default AddTaskForm