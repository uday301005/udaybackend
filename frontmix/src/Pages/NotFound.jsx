import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight} from 'react-icons/hi';
const NotFound = () => {
  return (
    <>
     <section className="notFound" id="notFound" >
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>LOOKS LIKE YOU'RE LOST</h1>
          <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
          <Link to="/">Go to Home<span><HiOutlineArrowNarrowRight/></span></Link>   
        </div>
      </section> 
    </>
  )
}

export default NotFound;
