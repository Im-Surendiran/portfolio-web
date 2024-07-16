import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="h-screen bg-white text-black flex flex-col items-center justify-center">
            <div className="w-4/5 mx-auto flex flex-wrap justify-between  mx-4 py-12">
                <div className="w-full w-4/5 md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p>Email: <a href='mailto:surendiranpks@gmail.com'
                    >surendiranpks@gmail.com</a></p>
                    <p>Phone: <a href='tel:+971559015488'
                    >+971559015488</a></p>
                </div> 
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                    <ul className="flex space-x-4">
                        <li>
                            <a href='https://www.linkedin.com/in/surendiran-s-259963179/'
                                className="bg-black text-white font-bold p-2 rounded-full inline-block transition duration-300 transform hover:scale-110"
                            >
                                <SiLinkedin />
                            </a>

                        </li>
                        <li>
                            <a href='https://github.com/Im-Surendiran?tab=repositories'
                                className="bg-black text-white font-bold p-2 rounded-full inline-block transition duration-300 transform hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Legal</h3>
                    <p>&copy; 2024 Surendiran. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
