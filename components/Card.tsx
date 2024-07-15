import React from 'react'
import Image from "next/image";

type Props = {
    data: Array<any>;
};
const Card = ({ data }: Props) => {
    return (
        <div className="bg-white w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
            {data.data.map((project: any, i: any) => (
                <div key={i} className="w-60 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                    <img className="h-40 object-cover rounded-xl" src={project.imgurl} alt="project" />
                    <div className='p-2'>
                        <div className="p-2">
                            <h2 className="font-bold text-lg mb-2 ">Heading</h2>
                            <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
                        </div>
                        <div className="m-2">
                            <a role='button' href='#' className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
                        </div>
                    </div>

                </div >
            ))}

        </div>
    )
}

export default Card