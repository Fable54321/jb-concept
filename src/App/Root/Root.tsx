import { Outlet } from "react-router"
import NavBar from "./NavBar/NavBar"


const Root = () => {
  return (
    <>
    <NavBar />
    <main>
       <Outlet />
    </main>
    </>
  )
}

export default Root
