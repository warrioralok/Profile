export const TodoList = ({deleteFun,proptask,checkedTodo}) =>{
    return(
        <>
             <div id="taskList" className="task-list">
                {proptask.map((proptask) =>{
                    return(
                    <div className="task-item" key={proptask.id}>
                            <span className={`task-text ${proptask.checked ? 'checked'  : ''}`}>{proptask.content}</span>
                            <button className="complete-btn" onClick={() =>checkedTodo(proptask.content)}>✔</button>
                            <button className="delete-btn" onClick={() =>deleteFun(proptask.content)}>✖</button>
                    </div>
                    )
                })}    
            </div>
        </>
    )
}