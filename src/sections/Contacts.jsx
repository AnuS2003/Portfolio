import { FaLinkedinIn } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";

const Contacts = () => {
  return (
    <div>
      <div className="border-b border-neutral-600 pb-24 lg:mb-30">
        <h1 className="my-20 text-center text-4xl">
          Contact 
          <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="max-w-3xl mx-auto text-center tracking-tighter">
          <p className="my-4 text-lg text-neutral-400">Thank you for your interest in reaching out!</p>
          <p className="my-4 text-lg text-neutral-400">
            I value open communication and am excited about the possibility of connecting. 
            Whether you have inquiries, feedback, or collaboration opportunities, I’m here and eager
            to hear from you. Let’s create something great together!
          </p>
          <div className="flex justify-center  mt-8">
            <a href="https://www.linkedin.com/in/anupamashettigar" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="mx-4 text-6xl text-neutral-400 hover:text-purple-400" />
            </a>
            {/* <div className="flex justify-center items-center cursor-pointer">
                <CiMail  className="mx-4 text-6xl text-neutral-400" />
                <span className="text-md text-neutral-300 hover:text-purple-400">anupamacks589@gmail.com</span>
            </div> */}
            <a href="mailto:anupamacks589@gmail.com" target="_blank" rel="noopener noreferrer">
              <CiMail  className="mx-4 text-6xl text-neutral-400 hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
