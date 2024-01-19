import { Card, ListGroupItem, Button, CardBody } from "react-bootstrap"
import { UncontrolledCollapse } from "reactstrap"

const TotdoItem = ({todo, remove, mark}) => {
    return(
        <ListGroupItem>
            <div className="row">
                <div className="col-md-7">
                    <span color="primary" className="d-felx" id={`toggler${todo.id}`} style={{marginBottom: "1rem"}}>
                        {todo.isComplete ? <p><del>{todo.title}</del></p>:<p>{todo.title}</p>}
                    </span>
                    <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
                        <Card>
                            <CardBody>
                                {todo.description}
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
                <div className="col-md-5">
                    <Button color="danger" onClick={()=>{remove(todo.id)}} style={{marginRight: "10px"}}>Pasalinti</Button>
                    <Button color="danger" onClick={()=>{mark(todo.id)}} style={{marginRight: "10px"}}>Uzbaigti</Button>
                </div>
            </div>
        </ListGroupItem>
    )
}
export default TotdoItem