//import { NavLink } from "react-router-dom"
import { useEffect } from "react"

import classes from "./Home.module.css"
import "./Team.css"

import Tal from "../../../assets/images/tal.jpg"
import Girl from "../../../assets/images/Female.jpg"
import Hannah from "../../../assets/images/hannah.jpg"
import Bro from "../../../assets/images/cottonbro.jpg"


import Facebook from "../../../assets/facebook-f-brands.svg"
import Twitter from "../../../assets/twitter-brands.svg"
import Instagram from "../../../assets/facebook-square-brands.svg"


const FifthPage = () => {
  useEffect(() => {
    let dots = document.querySelectorAll(".dots")
    //let holder = document.querySelector(".holder")


dots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    removeMe()
      e.target.classList.toggle("active")
})
})

  function removeMe(){
    dots.forEach(dot => {
      dot.classList.remove("active");
    })
  }
      

  })
  
  return (
    <section className={classes["team-section"]}>
        <div className={classes.title}>
          <h3>THE FAMILY</h3>
          <h6>Meet The Team</h6>
        </div>
        
        <p>
          Make Your Hair Style Better With Our Professional Barbers!
        </p>
        
        <p className={classes["together"]}>
          We have been working together as a team for over 7years, so we collectivelly know how to satisfy our customers and give them that look they desire.
        </p>
        
        <div className={classes["teams"]}>
          <div className={classes["member-wrapper"]}>
            <div className={classes["img-wrapper"]}>
              <img src ={Tal} alt="Ceo" className={classes["images"]}/>
            </div>
              <div class="container">
    <div class="holder">
      <div class="image">
        <img src={Tal} alt="low" />
      </div>
      <div class="about">
        <h3 class="titles">
          Ojoge Moses
        </h3>
        <div class="name">Founder</div>
      </div>
    </div>
    <div class="dots active ">
      <span>
      <img src={Facebook} alt=""/>
      </span>
      <span>
       <img src={Twitter} alt=""/>
      </span>
      <span>
      <img src={Instagram} alt=""/>
      </span>
    </div>
  </div>
          </div>
               <div className={classes["member-wrapper"]}>
            <div className={classes["img-wrapper"]}>
              <img src ={Girl} alt="Ceo" className={classes["images"]}/>
            </div>
              <div class="container">
    <div class="holder">
      <div class="image">
        <img src={Girl} alt="low" />
      </div>
      <div class="about">
        <h3 class="titles">
          Helena Christian
        </h3>
        <div class="name">Cosmetologist</div>
      </div>
    </div>
    <div class="dots">
      <span>
      <img src={Facebook} alt=""/>
      </span>
      <span>
       <img src={Twitter} alt=""/>
      </span>
      <span>
      <img src={Instagram} alt=""/>
      </span>
    </div>
  </div>
  
           </div>
               <div className={classes["member-wrapper"]}>
            <div className={classes["img-wrapper"]}>
              <img src ={Bro} alt="Ceo" className={classes["images"]}/>
            </div>
              <div class="container">
    <div class="holder">
      <div class="image">
        <img src={Bro} alt="low" />
      </div>
      <div class="about">
        <h3 class="titles">
          Bradley Mike
        </h3>
        <div class="name">Barber</div>
      </div>
    </div>
    <div class="dots">
      <span>
      <img src={Facebook} alt=""/>
      </span>
      <span>
       <img src={Twitter} alt=""/>
      </span>
      <span>
      <img src={Instagram} alt=""/>
      </span>
    </div>
  </div>
   </div>
    <div className={classes["member-wrapper"]}>
            <div className={classes["img-wrapper"]}>
              <img src ={Hannah} alt="Ceo" className={classes["images"]}/>
            </div>
              <div class="container">
    <div class="holder">
      <div class="image">
        <img src={Hannah} alt="low" />
      </div>
      <div class="about">
        <h3 class="titles">
          Lucas Tom
        </h3>
        <div class="name">Hair Stylist</div>
      </div>
    </div>
    <div class="dots">
      <span>
      <img src={Facebook} alt=""/>
      </span>
      <span>
       <img src={Twitter} alt=""/>
      </span>
      <span>
      <img src={Instagram} alt=""/>
      </span>
    </div>
  </div>
   </div>
        </div>
        {/*<NavLink to = "/bookus">*/}
        <button>
          BOOK AN APPOINTMENT
        </button>
        {/*</NavLink>*/}
    </section>
    )
}

export default FifthPage