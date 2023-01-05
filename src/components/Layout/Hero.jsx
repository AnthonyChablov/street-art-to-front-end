
import { NavLink } from "react-router-dom";


const Hero = () => {
  return (
  <section className="relative bg-heroImage bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/25">
    </div>
    <div className="relative mx-auto max-w-screen-xl px-4 py-80  h-screen  
      sm:px-6 md:px-8 
      md:items-center lg:flex lg:h-screen lg:items-center ">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-roboto sm:text-5xl">
          Embrace Street Art
          <strong className="block font-roboto text-sky-700">
            Made In Toronto.
          </strong>
        </h1>
        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
          Discover street-art, graffiti and murals created by the many talented 
          artists throughout Toronto!
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a href="#" className="block w-full rounded bg-sky-800 px-12 py-3 text-sm font-medium text-white shadow 
            hover:bg-sky-600 focus:outline-none focus:ring 
            active:bg-sky-700 sm:w-auto">
            Get Started
          </a>
          <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-sky-600 shadow 
          hover:bg-sky-100 focus:outline-none focus:ring active:text-sky-700 sm:w-auto">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Hero