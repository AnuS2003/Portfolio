import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contacts = () => {
  return (
    <div>
      <div className="border-b border-neutral-600 pb-24 lg:mb-30">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeVariant}
          className="my-20 text-center text-4xl"
        >
          Contact Me
        </motion.h1>
        <div className="max-w-3xl mx-auto text-center tracking-tighter">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeVariant}
            className="my-4 text-lg text-neutral-400"
          >
            Thank you for your interest in reaching out!
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeVariant}
            className="my-4 text-lg text-neutral-400"
          >
            I value open communication and am excited about the possibility of connecting. 
            Whether you have inquiries, feedback, or collaboration opportunities, I’m here and eager
            to hear from you. Let’s create something great together!
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeVariant}
            className="flex justify-center mt-8"
          >
            <a href="https://www.linkedin.com/in/anupamashettigar" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="mx-4 text-6xl text-neutral-400 hover:text-purple-400" />
            </a>
            <a
              href="mailto:anupamacks589@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-purple-400"
            >
              <CiMail className="text-6xl text-neutral-400 hover:text-purple-400" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
