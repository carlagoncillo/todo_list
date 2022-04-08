import './App.css';
import {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDo from './components/TodoList';

function App() {
  const [list, setList] = useState([
    {text: "Get Python black belt.", completed: true},
    {text: "Get MERN black belt.", completed: false},
    {text: "Get WebFundamentals yellow belt.", completed: true}
    ]);

  const newList = (task) =>{
    const copyList = [...list];
    copyList.push(task);
    setList(copyList);
  }

  const update = (idx) => {
    console.log("Task done!")
    const copyList = [...list];
    if(copyList[idx].completed === true){
      copyList[idx].completed = false;
    } else {
      copyList[idx].completed = true;
    }
    setList(copyList);
  }

  const deleteTask = (deleteIdx) => {
    console.log(deleteIdx)
    const filterList = list.filter((e, idx) => {
      if(deleteIdx !== idx) {
        return true;
      } else return false;
    });
    setList(filterList);
  }

  return (
    <div className="App">
      <ToDoForm newList = {newList} />
      <ToDo list={list} update={update} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
