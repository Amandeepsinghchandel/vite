import React from 'react';
import { v4 as uuidv4 } from 'uuid';

 const Todo = () => {
    let [todos,setTodos] = useState([{tasks:"simple todo", id:uuidv4()}]);
    let [newTask, setNewTasks] = useState("");
   
    let addNewTask = () => {
        setTodos([...todos, newTask])
        setNewTasks("")
      };

    
      let addTodo = (event) => {
        setNewTasks(event.target.value);
        console.log(event.target.value);
      };
      return (
        <div>
          <h1 className="mb-10">Todo App</h1>
          <input
            placeholder="add a new task"
            value={newTask}
            onChange={addTodo}
          ></input>
          <button onClick={addNewTask}>Add Task</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <h3>Tasks ToDo</h3>
          <ul>
            {todos.map((task, index) => {
              return <li key={index}>{task}</li>;
            })}
          </ul>
        </div>
      );
    };
    
    export default Todo;
