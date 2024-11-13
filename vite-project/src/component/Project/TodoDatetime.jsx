import { useState } from "react";
import { useEffect } from "react";

export const DateTime = () => {
    const  [dateTime, setDateTime] = useState("");

    useEffect(() =>{
        const interval = setInterval(()=>{
            const date = new Date();
            const getDate = date.toLocaleDateString();
            const getTime = date.toLocaleTimeString();
            setDateTime(`${getDate} - Time:${getTime}`)
    },1000);

    return () => clearInterval(interval);
    },[])

    return(
        <>
                <h1>Todo List</h1>
                <h3 className='DateTime'>Date: {dateTime}</h3>
                <p className="current-time" id="currentTime"></p>
        </>
    )
}