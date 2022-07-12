import { useState } from "react"
import { NavLink } from "react-router-dom"

import Logo from "../../assets/Phenol.png"
import Cart from "../../assets/cart.png"

import classes from "./Header.module.css"
import NavBar from "./NavBar"

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false)
  
  const navHandler = () => {
    setIsNavActive(!isNavActive)
  }
  
  return (
    <header className = {classes.header}>
      <nav>
        <div class={classes.hamburger} 
         onClick = {navHandler}>
          <div class={classes.line}></div>
          <div class={classes.line}></div>
          <div class={classes.line}></div>
        </div>
        <div className={classes["logo"]}>
          <img src ={Logo} alt = "logo" />
        </div>
        <NavBar 
        isNavActive = {isNavActive} 
        className = {classes.do}
        setIsNavActive = {setIsNavActive}
        />
    </nav>
      
      <div className={classes["right"]}>
        <div>
            <img src ={Cart} alt = "cart" />
        </div>
        <NavLink to = "/bookus">
        <button>BOOK US</button>
        </NavLink>
      </div>
    
    </header>
    )
}

export default Header;