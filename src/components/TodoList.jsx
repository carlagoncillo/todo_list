import React, {usestate} from "react"

const ToDo = (props) => {
    const list = props.list;
    const deleteTask = props.deleteTask;
    const update = props.update

    return(
        <div>
            {list.map((item, idx) => (
                <div key={idx}>
                    <li style={{textDecoration: item.completed ? "line-through": ""}}>
                        {item.text}
                        <input type="checkbox" checked={item.completed} onChange={() => update(idx)}/>
                        <button onClick={() => deleteTask(idx)}>Delete</button>
                    </li>
                </div>
            ))}
        </div>
    )
}

export default ToDo