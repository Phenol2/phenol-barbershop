import { NavLink } from "react-router-dom"

import classes from "./Home.module.css"

import BrownChair from "../../../assets/barber-chair.png"
import ArrowRight from "../../../assets/right-long-solid.svg"
import  Chair from "../../../assets/chair.png"
import Hairdresser from "../../../assets/hairdresser.png"


const SecondPage = () => {
  return (
         <section className={classes["services"]}>
        <div className={classes.title}>
          <h3>SERVICES</h3>
          <h6>Our Services</h6>
        </div>
        <p>
          Look and feel better from head to toe with our range of services. From haircuts, to selling of hair products and overall grooming, treat yourself to a date at Phenol Salon 
        </p>
        
        <div className={classes["service-one"]}>
          <div className={classes["service-img"]}>
            <img src = {BrownChair} alt = "Barber's chair"/>
          </div>
          
          <div className={classes["service-desc"]}>
            <h4>Men's Haircuts</h4>
            <p>
            Scissors cut or clipper cut, straight razor shape on hairline around ears back of the neck and styled  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
             <div className={classes["price"]}>
             <NavLink to="/services" className={classes["nav"]}>
            <div className={classes["readmore-btn"]}>
              Read More 
              <img src={ArrowRight} alt="arrow right" />
            </div>
            </NavLink>
            <div> $ 40</div>
            </div>
            
          </div>
        </div>
        
         <div 
         className={classes["service-one"]}
         id={classes["change"]}
         >
          <div className={classes["service-img"]}>
            <img src = {Hairdresser} alt = "Barber's chair"/>
          </div>
          
          <div className={classes["service-desc"]}>
            <h4>Hair colour </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
             <div className={classes["price"]}>
                 <NavLink to="/services" className={classes["nav"]}>
            <div className={classes["readmore-btn"]}>
              Read More 
              <img src={ArrowRight} alt="arrow right" />
            </div>
            </NavLink>
              <div> $ 30</div>
            </div>
          </div>
        </div>
        
           <div className={classes["service-one"]}>
          <div className={classes["service-img"]}>
            <img src = {Chair} alt = "Barber's chair"/>
          </div>
          
          <div className={classes["service-desc"]}>
            <h4>Hair Treatment</h4>
            <p>
            Hot towel with lemon essential oil aroma therapy, stright razor shave with pre-shave oil and hot lather shaving cream
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={classes["price"]}>
                 <NavLink to="/services" className={classes["nav"]}>
            <div className={classes["readmore-btn"]}>
              Read More 
              <img src={ArrowRight} alt="arrow right" />
            </div>
            </NavLink>
              <div> $ 50</div>
            </div>
          </div>
        </div>
        
        <NavLink to = "/services" >
        <div className={classes["action-btn"]}>
          <button>
           View More Services
          </button>
        </div>
        </NavLink>
     </section>
    )
}

export default SecondPage;