// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import { AddTodo } from './components/AddTodo';
import { About } from './components/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  else {
    initTodo = [];
  }
  const onDelete = (todo) => {
    console.log("I am todo", todo);

    // let index =todos.indexOf(todo);
    // todo.splice(index, 1)
    setTodos(todos.filter((e) => {
      return e.sno !== todo.sno;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) { sno = 1; }
    else { sno = todos[todos.length - 1].sno + 1; }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (
  <>  
     <Router>
       <Header title="Todo" search={true}   />
        <Routes> <Route exact path="/" element={
          <div> 
            <AddTodo addTodo={addTodo} />
             <Todos todos={todos} onDelete={onDelete} />
          </div>} />
         <Route exact path="/about" element={<About />} />
          </Routes>
           <Footer />
            </Router> </>);
}


export default App;
