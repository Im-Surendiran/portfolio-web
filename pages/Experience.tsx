import React from 'react'

const Experience = () => {
    return (
        <div className="flex h-screen justify-center items-center bg-white pt-20">
            <div className="w-4/5">
            <div className='flex justify-center'>
                <h1 className="text-xl text-black font-semibold mb-7">Experience</h1>
            </div>
                
                <ul>
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-black" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl text-black mb-2 font-medium mb-2">Software developer (Internship)</p>
                            <p className="text-sm text-gray-600 mb-2 font-light mb-2">FinFlow Tech Pvt Ltd</p>
                            <p className="text-sm text-white bg-black rounded-full w-fit px-2 mb-2">01-11-2022 - 30-01-2023</p>
                            <p className="mt-2 text-gray-600 font-light text-sm">
                            During my internship at FinFlow Tech Pvt Ltd, I had the opportunity to work alongside a team of talented developers, gaining practical experience in software development and contributing to impactful projects within the organization.
                            </p>
                        </div>
                    </li>
                    <li className="relative flex items-baseline gap-6 pb-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-black" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl text-black mb-2 font-medium mb-2">Software developer</p>
                            <p className="text-sm text-gray-600 mb-2 font-light mb-2">FinFlow Tech Pvt Ltd</p>
                            <p className="text-sm text-white bg-black rounded-full w-fit px-2 mb-2">01-02-2023 - 30-03-2024</p>
                            <p className="mt-2 text-gray-600 font-light text-sm">
                            As a software developer, I have gained valuable experience designing, developing, and deploying three full-stack web applications independently.utilizing a variety of technologies to deliver functional and user-friendly solutions.
                           </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Experience