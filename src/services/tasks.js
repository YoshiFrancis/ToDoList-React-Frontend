import axios from 'axios'

const getAll = async () => {
    let tasks = await axios.get("http://localhost:3001/tasks")
    return tasks.data
}

const create = async (task) => {
    task = {
        task: task.task,
        priority: task.priority
    }
    let createdTask = await axios.post("http://localhost:3001/tasks", task)
    console.log("This is the created task", createdTask)
}

const removeTask = async (id) => {
    console.log("Deleting now")
    console.log(id)
    await axios.delete(`http://localhost:3001/tasks/${id}`)
}

const updateTask = async (task) => {
    console.log("Updating Now")
    await axios.put(`http://localhost:3001/tasks/${task.id}`, task)
    return 1
}
export default {
    getAll, create, removeTask, updateTask
}