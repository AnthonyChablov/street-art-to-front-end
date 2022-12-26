import Hero from "../../components/Layout/Hero/Hero"
import Navigation from "../../components/Layout/Navigation/Navigation"

const Home = () => {
  return (
    <div className="min-h-screen font-roboto ">
      <Navigation/>
      <Hero/>
    </div>
  )
}

export default Home