import React from 'react'  //rafc

export const Todoitem  = ({todo, onDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}} >Delete</button>
    </div>
    <hr />
    </>
  );
}

export default Todoitem;
