const filterTodos = (todos, stattus) =>{
    switch(stattus){
        case "AKTYVIOS":
            return todos.filter(todo=> todo.isComplete === false)
        case "PABAIGTOS":
            return todos.filter(todo=> todo.isComplete === true)
        default: return todos
    }   

}
export default filterTodos