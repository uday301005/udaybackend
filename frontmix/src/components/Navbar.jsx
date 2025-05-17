// import React from 'react';
import React from "react";
import { useEffect, useState } from "react";

import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';   

    const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    fetch("/restApi.json")
      .then((response) => response.json())
      .then((json) => {
        if (json.data && json.data[0] && json.data[0].navbarLinks) {
          setNavLinks(json.data[0].navbarLinks);
        }
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);
  return (
    <nav>
      <div className="logo">Master</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
            {
    navLinks.map((element) => (
        <ScrollLink 
            key={element.id}
            to={element.link} 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={() => setShow(false)}
        >
            {element.title}
        </ScrollLink>
    ))
}

        </div>
        <Link to="/menu" className="menuBtn">OUR MENU</Link>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    
    </nav>
   
  )
}

export default Navbar;




