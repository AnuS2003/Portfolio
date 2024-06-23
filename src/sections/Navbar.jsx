import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className="mb-4 flex items-center justify-between py-4 px-10">
        <div className="flex items-center justify-end flex-1 gap-3 text-white">

            <a href="https://www.linkedin.com/in/anupamashettigar" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="mx-4 text-3xl text-neutral-400 hover:text-purple-400" />
            </a>
            <a href="https://github.com/AnuS2003" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mx-4 text-3xl text-neutral-400 hover:text-purple-400" />
            </a>
            
        </div>
      </nav>
    </div>
  )
}
export default Navbar