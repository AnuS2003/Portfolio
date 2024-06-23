import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RiHtml5Line, RiJavaLine } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { DiMysql, DiGit } from 'react-icons/di';
import './CubeAnimation.css';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      // Start animations when the component is in view
      // You can place your animation logic here
    }
  }, [inView]);

  return (
    <div className="border-b border-neutral-600 pb-4 lg:mb-30" ref={ref}>
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 lg:p-8 mb-20">
                <div className="flex items-center justify-center">
                  <div className="stage-cube-cont pt-8 ml-0 absolute">
                    <div className="cubespinner animate-spincube">
                      <div className="face1">
                        <RiHtml5Line className="text-7xl text-orange-600" />
                      </div>
                      <div className="face2">
                        <SiCss3 className="text-7xl text-blue-600" />
                      </div>
                      <div className="face3">
                        <RiJavaLine className="text-7xl text-red-600" />
                      </div>
                      <div className="face4">
                        <FaPython className="text-7xl text-yellow-400" />
                      </div>
                      <div className="face5">
                        <DiMysql className="text-7xl text-cyan-500" />
                      </div>
                      <div className="face6">
                        <DiGit className="text-7xl text-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-10">
              I am an ambitious software developer driven by the excitement of
              exploring diverse roles tailored to each task. Through effective
              communication, which has prepared me to be a team player,faces
              problems analytically and apply technical skills to tackle any
              challenge.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
