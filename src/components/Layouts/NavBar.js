import { NavLink } from "react-router-dom"
import classes from "./NavBar.module.css"
import styles from "./Header.module.css"
import Logo from "../../assets/Phenol.png"


const NavBar = ({ isNavActive, setIsNavActive }) => {
  
  const closeNavHandler = () => {
    setIsNavActive(false)
  }

  return (
     
    <div className = {classes[ `${isNavActive ? "active" : "nav-list"}`]} >
      <NavLink to = "/" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#5d4037" : "#062943"};
     }} 
     onClick = {closeNavHandler}
     className = {classes.nav}
     >
         Home
      </NavLink> 
      <NavLink to = "#" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#5d4037" : "#062943"};
     }} 
     className = {classes.nav} 
     onClick = {closeNavHandler}
     >
       About 
      </NavLink>
      <NavLink to = "#" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#5d4037" : "#062943"};
     }} 
     className = {classes.nav}
     onClick = {closeNavHandler}
     >
         Service 
      </NavLink> 
      <NavLink to = "#" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#5d4037" : "#062943"};
     }} 
     className = {classes.nav}
     onClick = {closeNavHandler}
     >
        Appointment 
         </NavLink> 
      <NavLink to = "#" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#5d4037" : "#062943"};
     }} 
     className = {classes.nav} 
     onClick = {closeNavHandler}
     >   
         Gallery 
         </NavLink> 
      <NavLink to = "#" 
      style={({isActive}) => {
       return { backgroundColor: isActive ? "#5d4037" : "#062943"};
     }} 
     className = {classes.nav}
     onClick = {closeNavHandler}
     >   
         Shop  
      </NavLink> 
      
      <div className={classes.down}>
        <div className={styles["logo"]}>   <img src ={Logo} alt = "logo" /></div>
        <button>
          BOOK US
        </button>
      </div>
      </div>
    )
}

export default NavBar