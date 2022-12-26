import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-heroImage bg-no-repeat bg-left h-screen w-screen ">
      <div className="text-center px-4 sm:container sm:mx-auto sm:px-20 md:px-40 lg:px-60">
        <div className="pt-40 text-white text-4xl md:pt-60">Lorem ipsum dolor sit amet consectetur elit</div>
        <div className="pt-10 text-white text-md w-9/12 text-center mx-auto sm:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio non repudiandae officiis in aliquid saepe recusandae a, odit consequatur nesciunt. Alias dolor eveniet voluptatibus delectus quas accusantium ea dignissimos sapiente!
        </div>
        <NavLink exact to="/app" >
          <Button 
            size="large"
            variant="contained" 
            sx={{
              color:'white',
              textDecoration:"none",
              backgroundColor:'teal',
              marginTop:"3.5em",
              boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
              '&:hover': {
                backgroundColor:'teal', 
                scale:"1.04",
                boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
              }
            }}
          >
            Launch App
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Hero