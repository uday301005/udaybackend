import React from 'react' //rafc
import {Todoitem} from '../components/Todoitem';
export const Todos = (props) => {
  let my_style= {
       minHeight:"70vh",
       margin:"100px auto",
  }
  return (
    <div  className="container my-3" style={my_style}>
        <h3 className=" my-3" >Todos list</h3>
         {/* {props.todos} */}
         {props.todos.length===0? "No Todos to display":
         props.todos.map((todo) =>{
            return (
           
            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />);
})
}
    </div>
  );
}

export default Todos;
