import { Outlet } from "react-router-dom"
import Header from "./Layouts/Header"
import Footer from "./Layouts/Footer"
import styles from "./Layouts/Header.module.css"

const SharedLayout = () => {
  return (
    <>
     <Header className = {styles["head"]} />
     <Outlet />
     <Footer />
    </>
    )
}

export default SharedLayout;