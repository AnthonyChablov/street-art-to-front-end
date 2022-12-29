import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="pt-3 pb-3 bg-neutral-900 w-full top-0 z-50 absolute">
      <div className=" container mx-auto">
        <ul className="  flex justify-center text-white">
          <li className="">
              <NavLink exact="true" to="/" >
                <div className="font-empire text-white text-3xl">Street-Art-To</div>
              </NavLink>
          </li>
        </ul>
      </div>  
    </nav>
  )
}

export default Navigation;