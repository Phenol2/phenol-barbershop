import classes from "./Home.module.css"

const Subscribe = () => {
  return (
     <section className={classes["subscribe"]}>
      <h5>Our Subscription</h5>
      <p>
        Subscribe and get one month for free grooming 
      </p>
      
      <div className={classes["form"]}>
        <input type="text" placeholder="please enter your email..." />
        <button>
          Subscribe
        </button>
      </div>
     </section>
    )
}

export default Subscribe

