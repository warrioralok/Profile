export const Button = ({deleteAlldata}) =>{
    return(
        <button  className="clear-btn" onClick={() => deleteAlldata()}>Clear All</button>
       )
}