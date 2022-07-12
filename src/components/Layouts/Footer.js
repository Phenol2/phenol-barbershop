
import classes from "./Footer.module.css"
import Facebook from "../../assets/facebook-f-brands.svg"
import Twitter from "../../assets/twitter-brands.svg"
import Instagram from "../../assets/facebook-square-brands.svg"


const Footer = () => {
  return (
    <footer className={classes["footer"]}>
    <h2>
      Phenol<span className={classes["trademark"]}>&reg;</span> BarberShop
    </h2>
      <p>
        We take tremendous pride in our work and
        <br/>
        perpetuating the fine art of classic barbering.
      </p>
      
      <div className={classes["mine"]}>
        <div className={classes["address"]}>
          <h4>Address</h4>
          <p>
            32 Ewupe Sango Otta, <br />Ogun State Nigeria
          </p>
        </div>
        <div className={classes["contacts"]}>
          <h4>Contact</h4>
          <p>
            <div>08105441247</div>
              <span>ojogemoses1@gmail.com</span>
          </p>
        </div>
      </div>
        <div className={classes["hours"]}>
          <h4> Business Hours</h4>
          <div>
            <div>MON - FRI </div>  
            <div>   8 AM - 9 PM </div>
          </div>
          <div>
           <div> SUN - SAT  </div>    
           <div> 9 AM - 4 PM </div>
          </div>
        </div>
        
        <div className={classes["socials"]}>
        <div>
          <img src ={Facebook} alt = ""/>
          </div>
          <div>
          <img src ={Twitter} alt = ""/>
          </div>
          <div>
          <img src ={Instagram} alt = ""/>
          </div>
        </div>
        <div className={classes["copy"]}>
          &copy; 2022 Phenol Barbershop
        </div>
    </footer>
    )
}

export default Footer;