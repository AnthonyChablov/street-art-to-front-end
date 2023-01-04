import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="pt-4 pb-4 bg-neutral-900 w-full top-0 z-50 absolute font-roboto">
      <div className="container mx-auto">
        <ul className="flex justify-between ">
          <li className="">
            <NavLink exact="true" to="/" >
              <div className="font-empire text-zinc-300 text-4xl">
                Street-Art-To
              </div>
            </NavLink> 
          </li>
          <div className="flex items-center">
            <li className=" ">
              <NavLink exact="true" to="/sign-up" >
                <div className=" text-zinc-300 text-md mr-7">Sign-up</div>
              </NavLink> 
            </li>
            <li className="">
              <NavLink exact="true" to="/sign-in" >
                <div className=" text-zinc-300 text-md">Login</div>
              </NavLink> 
            </li>
          </div>
        </ul>
      </div>  
    </nav>
  )
}

export default Navigation;