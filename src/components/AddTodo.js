import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[title,setTitle] =useState("");
    const [desc, setdesc] = useState(" ");

        const submit =(e)=>{
        e.preventDefault();
        if(!title ||!desc){
            alert("Title or Description cannot not be blank");
        }
        else{
        props.addTodo(title, desc);
        setTitle("");
        setdesc("");}
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
