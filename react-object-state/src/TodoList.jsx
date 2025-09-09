import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task",id: uuidv4()}]);

    let [newTodo, setnewTodo] = useState(" ");

    let addnewTask = () =>{
        setTodos((preTodo) =>{
            return [...preTodo, {task: newTodo, id: uuidv4()}]

        })
        setnewTodo(" ")
    }

    let updateTaskValue = (event) =>{
        setnewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // ✅ fix: update todos
  };
    return(
        <div>
            <input placeholder="write here your task" value={newTodo} onChange={updateTaskValue}></input>
            <button onClick={addnewTask}>Add Task</button>

            <br></br><br></br>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={ () => deleteTodo(todo.id)}>Delete</button>
                            </li>
                    ))
                }
            </ul>
        </div>
    )
}