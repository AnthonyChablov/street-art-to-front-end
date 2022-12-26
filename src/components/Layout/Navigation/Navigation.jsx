import { NavLink } from "react-router-dom";
import logo from './../../../assets/logo.PNG'
const Navigation = () => {
  return (
    <nav className="pt-4 pb-4 bg-neutral-900 w-full top-0 z-50 absolute">
      <div className=" container mx-auto">
        <ul className="  flex justify-center text-white">
          <li className="">
              <NavLink exact to="/" >
                <img src={logo} alt="Street-Art-TO" />
              </NavLink>
          </li>
        </ul>
      </div>
                  
          
        
    </nav>
  )
}

export default Navigation;