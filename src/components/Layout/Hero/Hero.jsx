import { Button } from "@mui/material"



const Hero = () => {
  return (
    <>
      {/* background */}
      <div className="bg-heroImage bg-no-repeat bg-left h-screen w-screen ">
        <div className=" sm:container sm:mx-auto text-center px-4 sm:px-20 md:px-40 lg:px-60">
          <div className="pt-40 md:pt-60 text-white text-4xl ">Lorem ipsum dolor sit amet consectetur elit</div>
          <div className="pt-10 text-white text-md 
            sm:text-lg  
            w-9/12 
            text-center 
            mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio non repudiandae officiis in aliquid saepe recusandae a, odit consequatur nesciunt. Alias dolor eveniet voluptatibus delectus quas accusantium ea dignissimos sapiente!
          </div>
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
          >Launch App</Button>
        </div>
      </div>
      
    </>
  )
}

export default Hero