import './Todo.css'
import { useState } from 'react'

const Todo = () =>{
    
    const  [inputValue, setInputValue] = useState('');
    const  [task, setTask] = useState([]);

    const handleInputChange = (value) =>{
        setInputValue(value);
    }

    const formSubmission = (e) =>{
        e.preventDefault();
        if (!inputValue) return; // check if input is not empty
        if(task.includes(inputValue)) return;
        setTask((prev) => [...prev, inputValue]);
        setInputValue(''); 
    }

    return(
        <>
        <form onSubmit={formSubmission}>
            <div className="todo-app">
                <h1>Todo List</h1>
                <p className="current-time" id="currentTime"></p>
        
            <div className="input-container">
                <input type="text" value={inputValue} onChange={(e) => handleInputChange(e.target.value)} id="taskInput" placeholder="Add a new task" autoComplete='off'/>
                <button>Add Task</button>
            </div>
        
            <div id="taskList" className="task-list">
                {task.map((task,index) =>{
                    return(
                    <div className="task-item" key={index}>
                            <span className="task-text">{task}</span>
                            <button className="complete-btn">✔</button>
                            <button className="delete-btn">✖</button>
                    </div>
                    )
                })}    
            </div>
        
            <button  className="clear-btn">Clear All</button>
        </div>
        </form>
        </>
    )
}

export default Todo;