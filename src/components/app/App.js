import Nav from "../nav/nav";
import TodoList from "../todo/TodoList";
import AddTodo from "../todo/AddTodo";


function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7 m-auto">
          <Nav/>
          <AddTodo/>
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
