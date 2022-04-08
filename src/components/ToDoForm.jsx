import {useState} from "react";

const ToDoForm = (props) => {
    const addTask = props.newList
    const [task, setTask] = useState("")

    const submitTask = (e) => {
        e.preventDefault();
        
        const newTask = {
            text: task,
            completed: false
        }
        addTask(newTask);
        setTask("");
    }

    return (
        <form onSubmit = {e => submitTask(e)}>
            <label>Add a Task: </label>
            <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default ToDoForm