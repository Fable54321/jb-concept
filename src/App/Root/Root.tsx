import { Outlet } from "react-router"
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"


const Root = () => {
  return (
    <>
    <NavBar />
    <main>
       <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Root
