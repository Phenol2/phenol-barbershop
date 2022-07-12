//import { NavLink } from "react-router-dom"

import classes from "./Home.module.css"

import ArrowRight from "../../../assets/right-long-solid.svg"
import Carter from "../../../assets/images/carter.jpg"
import Clipper from "../../../assets/images/Barbers.jpg"
import Marcelo from "../../../assets/images/marcelo.jpg"


const ThirdPage = () => {
  return (
    <section className={classes["about-section"]}>
        <div className={classes.title}>
          <h3>ABOUT</h3>
          <h6>About Us</h6>
        </div>
        <div className={classes["about-desc"]}>
        <h4>Phenol Salon Since 1998</h4>
        <h1>We Will Change Your
        <br/>
        Out Looks!</h1>
        </div>
         <div className={classes["top"]}>
        <img src = {Marcelo} alt=""/>
      </div>
        <p>
          A barber is a person whose work is to cut, dress, groom, style, and shave men's and boys hair. A barber's place of work is known as barber's shop. Phenol Barbershop was established in the year 1998, we have a passionate commitment to men's grooming and haircuts. Styling  and shaving for men.
        </p>
        
      {/*<NavLink to="/about" className={classes["nav"]}>*/}
         <div className={classes["readmore-btn"]}>
              More About Us 
              <img src={ArrowRight} alt="arrow right" />
            </div>
        {/*</NavLink>*/}  
    
            <img src={Carter} alt="tools" className={classes["tools"]}/>
             <img src={Clipper} alt="clippers" className={classes["clipper"]}/>
    </section>
    )
}

export default ThirdPage;