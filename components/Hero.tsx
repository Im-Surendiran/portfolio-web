'use client'
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import LinkButton from "./LinkButton";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
type Props = {};

export default function Hero({ }: Props) {

    return (
        <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <Image
                width={240}
                height={240}
                className="relative h-32 w-32 rounded-full mx-auto object-cover transition duration-300 transform hover:scale-110"
                src="/personalImages/myImage.png"
                alt="surendiran profile image"
                priority={true}
            />

            <div>
                <h2 className="text-md text-gray-800 uppercase md:tracking-[15px] pb-2 font-outfit">
                    Software developer
                </h2>
                <h3 className="pt-2 text-3xl md:text-xl lg:text-6xl font-semibold px-16 text-black ">
                    <span className="font-outfit text-black">Hello&sbquo; I&apos;m Surendiran.</span>
                </h3>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center gap-4 ">
                    <LinkButton href="/file/SOFTWARE DEVELOPER _20240702_142344_0000-2-1.pdf" text="Download CV" />

                    <a href='mailto:surendiranpks@gmail.com'
                        className="bg-black text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300 transform hover:scale-110"
                    > Hire me</a>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center gap-4">
                    <a href='https://www.linkedin.com/in/surendiran-s-259963179/'
                        className="bg-black text-white font-bold p-2 rounded-full inline-block transition duration-300 transform hover:scale-110"
                    >
                        <SiLinkedin />
                    </a>
                    <a href='https://github.com/Im-Surendiran?tab=repositories'
                        className="bg-black text-white font-bold p-2 rounded-full inline-block transition duration-300 transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
}
