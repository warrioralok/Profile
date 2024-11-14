export const getLocalStorage = () => {
        const TodolocalStore = localStorage.getItem('reactTodo')
        console.log(TodolocalStore)
        if(TodolocalStore == null || TodolocalStore == undefined) {
            return []
        }
        else{
            return JSON.parse(TodolocalStore)
        }
          
}

export const setLocalStorage = ({task}) => {
    localStorage.setItem("reactTodo", JSON.stringify(task))
}