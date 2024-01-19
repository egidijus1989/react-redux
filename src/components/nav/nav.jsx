import { Button, ButtonGroup } from "react-bootstrap"
import filterTodos from "../../utilities/filterTodo"
import { connect } from "react-redux"

const Nav = (props) => {
    const {filterTodos} = props
    return(
        <ButtonGroup style ={{marginLeft: "156px"}}>
            <Button color="primary" onClick={()=>{filterTodos("VISOS")}}>Visos uzduotys</Button>
            <Button color="danger" onClick={()=>{filterTodos("AKTYVIOS")}}>Aktyvios</Button>
            <Button color="success" onClick={()=>{filterTodos("PABAIGTOS")}}>Uzbaigtos</Button>
        </ButtonGroup>
    )
}
export default connect(null,{filterTodos})(Nav)