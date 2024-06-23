import CV from '../assets/Anupama S.pdf'
import icon from '../assets/profile.svg'
// import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='border-b border-neutral-600 pb-6 lg:mb-30'>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col items-center lg:items-start lg:w-2/3'>
          <h1 className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Anupama S</h1>
          <p className='my-2 max-w-xl py-6 font-thin tracking-tighter text-2xl'>
            I am currently a 3rd year undergraduate majoring in Artificial Intelligence and Machine Learning.
          </p>
          <a href={CV} download>
            <button className="mt-19 mb-2 relative overflow-hidden rounded-lg border-2 border-gray-300 px-4 py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-transparent hover:shadow-lg hover:bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500">
              <span className="relative z-10 bg-clip-text text-2xl font-light tracking-tight">
                Resume
              </span>
            </button>
          </a>
        </div>
        <div className='mb-20 flex justify-center items-center lg:w-1/3 lg:pl-5'>
          <img src={icon} className="rounded w-full sm:w-auto items-center" alt="Anupama S" />
        </div>
      </div>  
    </div>
  )
}

export default Hero
