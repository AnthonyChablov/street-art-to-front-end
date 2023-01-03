import Menu from "./Menu"
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="fixed top-3 mt-3 ml-5 bg-zinc-800 w-[32rem] h-[89vh] max-h-[45rem] py-5 px-5 rounded-xl">
      <div className="text-center pt-5">
        <NavLink exact="true" to="/" >
          <div className="font-empire text-6xl text-zinc-200">
            Street-Art-To
          </div>
        </NavLink>
      </div>
      <div className="pt-6 text-center">
        <Menu/>
      </div>
    </div>
  )
}

export default Card;