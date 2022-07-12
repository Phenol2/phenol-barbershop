import { NavLink } from "react-router-dom"

import classes from "./Home.module.css"

import Pictures from "../../Layouts/Pictures"


const FirstPage = ()  => {
  return (
      <section className={classes["first-page"]}>
      <h2>
        We Are Looking To Make You
        <span> Handsome. </span>
      </h2>
       <div className={classes.blobs}>
       
      </div>
        <div className={classes["blobs"]} id ={classes["two"]}>
       
      </div>
      <div className={classes["blobs"]} id ={classes["three"]}>
       
      </div>
      <p>
     Phenol Salon is the grooming experience every man deserves, where traditional barbering and modern spa meet your favourite watering hole.
        You will leave looking sharp, relaxed and ready to take on the world, with that swagger in your stride!.
      </p>
      
       <Pictures />
      
      <div className={classes.btns} >
      <NavLink to = "/bookus">
        <button className={classes.btnClose}> BOOK US </button>
        </NavLink>
          <button className={classes.btnOpen}> EXPLORE </button>
      </div>
      </section>
    )
}

export default FirstPage