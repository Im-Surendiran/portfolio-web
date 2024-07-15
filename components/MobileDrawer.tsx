import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileDrawer = ({ isOpen, onClose }) => {
  return (
    <div
    className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <button className="absolute right-7 top-4 p-3" onClick={onClose}>
      <FontAwesomeIcon className="text-5xl" icon={faXmark} />
    </button>
    <ul className="flex flex-col justify-center items-center space-y-4">
      <li onClick={onClose} className="text-3xl hover:font-semibold hover:border-b-2 border-black pb-2 transition duration-300 transform hover:scale-110">
        <Link href="#about">About</Link>
      </li>
      <li onClick={onClose} className="text-3xl hover:font-semibold hover:border-b-2 border-black pb-2 mt-2 transition duration-300 transform hover:scale-110">
        <Link href="#experience">Experience</Link>
      </li>
      <li onClick={onClose} className="text-3xl hover:font-semibold hover:border-b-2 border-black pb-2 mt-2 transition duration-300 transform hover:scale-110">
        <Link href="#skills">Skills</Link>
      </li>
      <li onClick={onClose} className="text-3xl hover:font-semibold hover:border-b-2 border-black pb-2 mt-2 transition duration-300 transform hover:scale-110">
        <Link href="#projects">Projects</Link>
      </li>
      {/* Add other navigation links */}
    </ul>
  </div>
  )
}

export default MobileDrawer