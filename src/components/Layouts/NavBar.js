import { NavLink } from "react-router-dom"
import classes from "./NavBar.module.css"


const NavBar = ({ isNavActive, setIsNavActive }) => {
  
  const closeNavHandler = () => {
    setIsNavActive(false)
  }

  return (
     
    <div className = {classes[ `${isNavActive ? "active" : "nav-list"}`]} >
      <NavLink to = "/" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#083865" : "#062943"};
     }} 
     onClick = {closeNavHandler}
     className = {classes.nav}
     >
         Home
      </NavLink> 
      <NavLink to = "/about" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#083865" : "#062943"};
     }} 
     className = {classes.nav} 
     onClick = {closeNavHandler}
     >
       About 
      </NavLink>
      <NavLink to = "/services" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#083865" : "#062943"};
     }} 
     className = {classes.nav}
     onClick = {closeNavHandler}
     >
         Service 
      </NavLink> 
      <NavLink to = "/bookus" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#083865" : "#062943"};
     }} 
     className = {classes.nav}
     onClick = {closeNavHandler}
     >
        Appointment 
         </NavLink> 
      <NavLink to = "/gallery" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#083865" : "#062943"};
     }} 
     className = {classes.nav} 
     onClick = {closeNavHandler}
     >   
         Gallery 
         </NavLink> 
      <NavLink to = "/shop" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#083865" : "#062943"};
     }} 
     className = {classes.nav}
     onClick = {closeNavHandler}
     >   
         Shop  
      </NavLink> 
      
      <div className={classes.down}>
        <div>Logo</div>
        <button>
          BOOK US
        </button>
      </div>
      </div>
    )
}

export default NavBar