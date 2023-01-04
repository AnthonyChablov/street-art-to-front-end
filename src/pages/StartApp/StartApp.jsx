import Map from "../../components/Map/Map";
import Header from "../../components/Layout/Header"
import SideBar from "../../components/Map/SideBar";
import Card from '../../components/Map/Card';
import useWindowSize from "../../hooks/useWindowSize";


const StartApp = () => {
  
  const windowDimensions = useWindowSize();
  return (
    <>
      <Map/>
      {
        /* render Sidebar for mobile, Card for large screens */
        windowDimensions.width >= 850
          ? <Card/> 
          : <>
              <Header/>
              <SideBar/>
            </> 
      }
    </>
  )
}

export default StartApp