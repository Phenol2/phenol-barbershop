//import { NavLink } from "react-router-dom"

import classes from "./Home.module.css"

import ArrowRight from "../../../assets/right-long-solid.svg"
import Allyson from "../../../assets/images/allyson.jpg"
import Agustin from "../../../assets/images/agustin.jpg"
import Mitchell from "../../../assets/images/mitchell.jpg"


const FourthPage = () => {
  return (
    <section className={classes["gallery-section"]}>
        <div className={classes.title}>
          <h3>GALLERY</h3>
          <h6>Our Gallery</h6>
        </div>
        <p>
          These are some snapshots  of some of our awesome services rendered to our wonderful customers.
        </p>
        <div className={classes["snapshots"]}>
        <div className={classes["snapshot-one"]}>
          <img src = {Agustin}   alt="agustin"/>
        </div>
        <div className={classes["snapshot-two"]}>
          <img src = {Mitchell}   alt="mitchell"/>
          <img src = {Allyson}   alt="allyson"/>
        </div>
        </div>
        
            {/*<NavLink to="/gallery" className={classes["nav"]}>*/}
         <div className={classes["readmore-btn"]}>
              More From Our Gallery 
              <img src={ArrowRight} alt="arrow right" />
            </div>
        {/*</NavLink>*/}  
    </section>
    )
}

export default FourthPage;