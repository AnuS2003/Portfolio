import Navbar from "../src/sections/Navbar"
import Hero from "../src/sections/Hero"
import About from "../src/sections/About"
import Technologies from "../src/sections/Technologies"
import Experiences from "./sections/Experiences"
import Project from "../src/sections/Project"
import Contacts from "./sections/Contacts"



const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      <div className="container mx-auto px-4 ">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences/>
        <Project />
        <Contacts />
      </div>
    </div>
  )
}

export default App


