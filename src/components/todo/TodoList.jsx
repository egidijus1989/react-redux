import TodoItem from "./TodoItem"
import { connect } from "react-redux"
import { markDone, deleteTodo } from "../../store/actions/TodoActions"
import filterTodos from "../../utilities/filterTodo"
import { ListGroup } from "react-bootstrap"

const TodoList = (props) => {
    let {todos, markDone, status, deleteTodo} = props;
    if(todos.length === 0) return <p>Nera ivestu uzduociu</p>
    let filterTodosList = filterTodos(todos, status)
    console.log(props)
    return(
        <ListGroup>
            {filterTodosList.map(todo=>
                <TodoItem todo={todo} key={todo.id} mark={markDone} remove={deleteTodo}/>
            )}
        </ListGroup>
    )
}

const mapDispatchtoProps = state => ({
    todos:state.todos.todos,
    status:state.todos.filter
})

export default connect(mapDispatchtoProps, {markDone, deleteTodo})(TodoList)