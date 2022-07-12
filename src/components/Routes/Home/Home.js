import classes from "./Home.module.css"

import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"
import FourthPage from "./FourthPage"
import FifthPage from "./FifthPage"
import Subscribe from "./Subscription.js"



const Home = () => {
  return (
    <main className={classes.main}>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <Subscribe />
    </main>
    )
}

export default Home;