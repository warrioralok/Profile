import './Todo.css'
import { useState } from 'react'
import { TodoForm } from './TodoForm';
import { Button } from './TodoClearAll';
import { TodoList } from './Todolist';
import {DateTime} from './TodoDatetime';
const Todo = () =>{
    
    
    const  [task, setTask] = useState([]);
    

    const formSubmission = (value) =>{
        const {id , content , checked} = value
        if (!content) return; // check if input is not empty
        
        const ifcontentmatched = task.find((curritem) => curritem.content === content);
        if(ifcontentmatched) return;

        setTask((prev) => [...prev, {id: id , content: content, checked: checked}]);
        
    }

    
    
    const deleteVal = (content) =>{  
    // Filter out the item
    const newArray = task.filter((item) => {
        
        return item.content !== content
    });

    console.log("Updated array:", newArray);
    setTask(newArray);
    }
    

    const checkval = (val) =>{
        console.log(val)
        const updateTask = task.map((currTask) =>{
            if(currTask.content == val){
                return {...currTask, checked: !currTask.checked};
                
            }
            else{
                return currTask
            }
        })
        setTask(updateTask)
    }



    const deleteAll = () => {
        setTask([]);
    }

    return(
        <>
        
            <div className="todo-app">
                <DateTime/>
                <TodoForm onAddTo={formSubmission}/>
                <TodoList deleteFun={deleteVal} checkedTodo={checkval} proptask={task}/>
                <Button deleteAlldata={deleteAll}/>
            </div>
        
        </>
    )
}

export default Todo;