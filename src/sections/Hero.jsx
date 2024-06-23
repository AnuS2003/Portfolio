import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CV from '../assets/Anupama S.pdf';
import icon from '../assets/profile.svg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!inView) {
      setAnimated(false); // Reset animation state when user leaves the page
    }
  }, [inView]);

  return (
    <div ref={ref} className='flex justify-center items-center min-h-screen border-b border-neutral-600 pb-6 lg:mb-30'>
      <div className='flex flex-wrap lg:flex-nowrap max-w-7xl w-full'>
        <div className='flex flex-col items-center lg:items-start lg:w-1/2'>
          <motion.h1
            variants={container(0.5)}
            initial={animated ? "visible" : "hidden"}
            animate={animated ? "visible" : "hidden"}
            className='px-10 pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Anupama S</motion.h1>
          <motion.p
            variants={container(1)}
            initial={animated ? "visible" : "hidden"}
            animate={animated ? "visible" : "hidden"}
            className='px-10 my-2 max-w-xl py-6 font-thin tracking-tighter text-2xl'>
            I'm a 3rd year undergraduate majoring in Artificial Intelligence and Machine Learning.
          </motion.p>
          <div className='flex px-10 w-full'>
            <a href={CV} download>
              <motion.button
                variants={container(1.6)}
                initial={animated ? "visible" : "hidden"}
                animate={animated ? "visible" : "hidden"}
                className="mt-8 relative overflow-hidden rounded-lg border-2 border-gray-300 px-4 py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-transparent hover:shadow-lg hover:bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500">
                <span className="relative z-10 bg-clip-text text-2xl font-light tracking-tight">
                  Resume
                </span>
              </motion.button>
            </a>
          </div>
        </div>
        <div className='mb-20 flex justify-center items-center lg:w-1/3 lg:pl-5'>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={animated ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            src={icon} className="mt-10 rounded w-full sm:w-auto items-center" alt="Anupama S" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
