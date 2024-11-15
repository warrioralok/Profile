import { useState } from "react";

export const TodoForm = ({onAddTo}) =>{

    const  [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) =>{
        setInputValue({id: value, content: value, checked: false});
    }

    const formSubmission = (e) =>{
        e.preventDefault();
        onAddTo(inputValue);
        setInputValue({id: '', content: '', checked: ''}); 
    }
    return(
        <>
            <form onSubmit={formSubmission}>
            <div className="input-container">
                <input type="text" value={inputValue.content} onChange={(e) => handleInputChange(e.target.value)} id="taskInput" placeholder="Add a new task" autoComplete='off'/>
                <button>Add Task</button>
            </div>
        
            
        
           
            </form>
        </>
    )
}