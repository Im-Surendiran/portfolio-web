import LinkButton from "@/components/LinkButton";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className='w-4/5'>
                <div className='flex justify-center'>
                    <h1 className="text-xl text-black font-semibold mb-7">About me</h1>
                </div>
                <div className="mx-auto bg-white rounded-lg overflow-hidden md:shadow-lg">
                    <div className="md:p-4">
                        <div className="flex items-center mt-4">
                            <img className="md:w-20 md:h-20 h-14 w-14 rounded-full mr-2 object-cover" src="/personalImages/myImage.png" alt="Avatar" />
                            <div className='md:mx-4'>
                                <p className="text-2xl text-gray-800 md:font-semibold">Surendiran</p>
                                <p className="text-gray-600">Software Developer</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2 p-2 text-xl">
                            Hello, I am Surendiran, a dedicated software developer actively seeking new opportunities to leverage my 1 year and 5 months of professional experience. I have a strong background in full-stack development, having independently managed and successfully delivered two projects during my tenure at a startup company.
                        </p>
                        <p className="text-gray-600 mt-2 p-2 text-xl">
                            Currently, I am in the UAE on a visit visa and available to join immediately. I am eager to contribute my skills and passion for software development to a dynamic team. </p>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-wrap justify-center gap-4 ">
                                <LinkButton href="/file/SOFTWARE DEVELOPER _20240702_142344_0000-2-1.pdf" text="Download CV" />

                                <a href='mailto:surendiranpks@gmail.com'
                                    className="bg-black text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300 transform hover:scale-110"
                                > Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
