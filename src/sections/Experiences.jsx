import React from 'react'
import {EXPERIENCES } from '../sections/experience'

const Experiences = () => {
  return (
    <div className="border-b border-neutral-600 pb-24 lg:mb-30">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => ( 
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-300">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{experience.role} - {" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((technology, index) => (
                  <span key={index} className="mr-2 rounded-full px-2 py-1 text-sm font-medium bg-purple-900 text-gray-300">{technology}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    
    </div>

  )
}

export default Experiences
