import MultiButton from "../../Common/MultiButton"
import SearchBar from "../../Common/SearchBar"
import Discover from "./Discover"
import Favourites from "./Favourites";


const Menu = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <MultiButton/>
      </div>
      <SearchBar/>
      <Discover/>
    </div>
  )
}

export default Menu