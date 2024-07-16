'use client'

import { useRef, useState } from "react";
import Image from "next/image";
type Props = {
  data: Array<any>;
};

export default function Projects({ data }: Props) {
  const swiperRef = useRef<any>(null);



  return (
    <div className="flex min-h-screen justify-center items-center bg-white pt-10">
      <div className="w-4/5">
        <div className='flex justify-center mt-5'>
          <h1 className="text-xl text-black font-semibold mb-8">Projects</h1>
        </div>
        <div className="md:grid gap-8 grid-cols-4">
          {data && data.map((project) => (
            <div key={project.id} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition mb-6" >
              <div className="rounded-2xl overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={project.imgurl}
                  alt="" />
              </div>
              <div className="w-full min-h-[50%] p-4 md:w-full md:text-left">
                <h4 className="text-base font-semibold md:text-base text-black">
                  {project.title}
                </h4>

                <div className="text-base font-light  space-x-6 md:mt-2 text-gray-700 ">
                  <span className="cursor-pointer underline">
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                    <span className="inline-flex">
                      <svg
                        className="with-icon_icon__MHUeb"
                        data-testid="geist-icon"
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        style={{
                          color: "currentColor",
                          width: "14px",
                          height: "14px",
                        }}
                      >
                        <path d="M7 17L17 7"></path>
                        <path d="M7 7h10v10"></path>
                      </svg>
                    </span>
                  </span>
                </div>

                <p className="text-sm font-normal md:text-sm mt-3 text-gray-800">
                  {project.content}
                </p>

                <div className="flex gap-2 mt-2 font-normal text-sm items-center text-gray-700">
                  <span>tech stack used:</span>
                  {project.tech?.map((tech: any, i: any) => (
                    <Image
                      key={i}
                      width={20}
                      height={20}
                      src={tech.tech}
                      alt=""
                      className="w-5 h-5 rounded-sm object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
