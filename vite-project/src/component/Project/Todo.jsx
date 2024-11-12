import './Todo.css'
import { useEffect, useState } from 'react'

const Todo = () =>{
    
    const  [inputValue, setInputValue] = useState('');
    const  [task, setTask] = useState([]);
    const  [dateTime, setDateTime] = useState("")
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

    useEffect(() =>{
        const interval = setInterval(()=>{
            const date = new Date();
            const getDate = date.toLocaleDateString();
            const getTime = date.toLocaleTimeString();
            setDateTime(`${getDate} - Time:${getTime}`)
    },1000);

    return () => clearInterval(interval);
    },[])
    
    const deleteVal = (value) =>{
        console.log("Value to remove:", value);
    console.log("Current task array:", task);

    // Filter out the item
    const newArray = task.filter((item) => {
        
        return item !== value
    });

    console.log("Updated array:", newArray);
    setTask(newArray);
    }
    
    const deleteAll = () => {
        setTask([]);
    }

    return(
        <>
        <form onSubmit={formSubmission}>
            <div className="todo-app">
                <h1>Todo List</h1>
                <h3 className='DateTime'>Date: {dateTime}</h3>
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
                            <button className="delete-btn" onClick={() =>deleteVal(task)}>✖</button>
                    </div>
                    )
                })}    
            </div>
        
            <button  className="clear-btn" onClick={()=>deleteAll()}>Clear All</button>
        </div>
        </form>
        </>
    )
}

export default Todo;