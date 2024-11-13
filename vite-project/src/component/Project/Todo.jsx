import './Todo.css'
import { useState } from 'react'
import { TodoForm } from './TodoForm';
import { Button } from './TodoClearAll';
import { TodoList } from './Todolist';
import {DateTime} from './TodoDatetime';
const Todo = () =>{
    
    
    const  [task, setTask] = useState([]);
    

    const formSubmission = (value) =>{
        if (!value) return; // check if input is not empty
        if(task.includes(value)) return;
        setTask((prev) => [...prev, value]);
        
    }

    
    
    const deleteVal = (value) =>{

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
        
            <div className="todo-app">
                <DateTime/>
                <TodoForm onAddTo={formSubmission}/>
                <TodoList deleteFun={deleteVal} proptask={task}/>
                <Button deleteAlldata={deleteAll}/>
            </div>
        
        </>
    )
}

export default Todo;