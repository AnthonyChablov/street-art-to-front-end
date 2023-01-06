import { BsSearch, BsFillHeartFill } from "react-icons/bs";

const Icon = ({iconName, size, color}) => {
  return (
      {
        Search : <BsSearch size={size} color={color}/>,
        Heart : <BsFillHeartFill size={size} color={color}/>
        
      }[iconName]
  )
}

export default Icon