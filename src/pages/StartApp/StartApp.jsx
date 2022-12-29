import Map from "../../components/Map/Map";
import Navigation from "../../components/Layout/Navigation";
import SideBar from "../../components/Map/SideBar";

import { useState } from "react";

const StartApp = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Navigation/>
      <Map/>
      <SideBar/>
    </>
  )
}

export default StartApp