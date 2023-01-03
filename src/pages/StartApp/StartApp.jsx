import Map from "../../components/Map/Map";
import Navigation from "../../components/Layout/Navigation";
import SideBar from "../../components/Map/SideBar";
import Card from '../../components/Map/Card';
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";


const StartApp = () => {
  /* const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }; */

  const windowDimensions = useWindowSize();
  return (
    <>
      <Map/>
      {
        /* render Sidebar for mobile, Card for large screens */
        windowDimensions.width >= 850
          ? <Card/> 
          : <>
              <Navigation/>
              <SideBar/>
            </> 
      }
    </>
  )
}

export default StartApp