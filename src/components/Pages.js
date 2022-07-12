import { Routes, Route } from "react-router-dom"

import Home from "./Routes/Home/Home"
import About from "./Routes/About/About"
import Appointment from "./Routes/Appointment/Appointment"
import Shop from "./Routes/Shop/Shop"
import Services from "./Routes/Services/Services"
import SharedLayout from "./SharedLayout"
import Gallery from "./Routes/Gallery/Gallery"

const Pages = () => {
  return (
    <Routes>
      <Route path = "/" element = { <SharedLayout />}>
        <Route  index element = { <Home />}/>
        <Route  path = "about" element = { <About />}/>
        <Route  path = "services" element = { <Services />}/>
        <Route  path = "bookus" element = { <Appointment />}/>
        <Route  path = "gallery" element = { <Gallery />}/>
        <Route  path = "shop" element = { <Shop />}/>  
      </Route>
    </Routes>
    )
}

export default Pages;