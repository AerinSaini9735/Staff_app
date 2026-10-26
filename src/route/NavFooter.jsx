import Navigation from "./Navigation"
import Footer from "../Footer"
import { Outlet } from "react-router-dom";

import { useContext } from "react"
import { UserContext } from "../context/UserContext"
function NavFooter(){
     
const {currentuser}=useContext(UserContext)

  console.log(currentuser)
    return(     <>

   <Navigation />
   <Outlet />
   <Footer />
   </>
     )

}
export default NavFooter