import React from 'react'
import'./footer.css'
export const Footer = () => {
  let styles ={
      // position: "relative",
      // top:"70vh",
      width:"100%",
      border: "2px solid aqua"
  }
  return (
  
    <footer className="bg-dark text-light py-2" style={styles} >
      <p className="text-center bg-dark" >
      Copyright &copy; MyTodosList.com
      </p>
   </footer>
  )
}

// export default Footer
