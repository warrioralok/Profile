export const TodoList = ({deleteFun,proptask}) =>{
    return(
        <>
             <div id="taskList" className="task-list">
                {proptask.map((proptask,index) =>{
                    return(
                    <div className="task-item" key={index}>
                            <span className="task-text">{proptask}</span>
                            <button className="complete-btn">✔</button>
                            <button className="delete-btn" onClick={() =>deleteFun(proptask)}>✖</button>
                    </div>
                    )
                })}    
            </div>
        </>
    )
}