import { PROJECTS } from "../sections/project";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-600 pb-24 lg:mb-30">
      <div className="container mx-auto px-4">
        <h1 className="my-20 text-center text-4xl">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded-t-lg"
              />
              <div className="px-2 py-4">
                <h2 className="text-1xl mb-2 font-semibold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </h2>
                <p className="mb-4 text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-purple-900 text-gray-300 px-3 py-1 text-sm font-medium rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
