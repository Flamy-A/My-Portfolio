"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image';
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const Hero = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="relative overflow-hidden bg-[#e0d6f5]">
            {/* Animated gradient overlay removed for solid color */}
            <section className="text-gray-600 body-font relative z-10">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fade-in-up">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold gradient-text">
                            I am
                            <br className="hidden lg:inline-block" />
                            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                {isClient ? (
                                    <Typewriter
                                        options={{
                                            strings: ['Amio Rashid', 'a Web Developer', 'a CS Undergrad', 'a Tech Enthusiast'],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                            deleteSpeed: 50,
                                        }}
                                    />
                                ) : (
                                    <span>Amio Rashid</span>
                                )}
                            </span>
                        </h1>
                        <hr className="w-48 border-b-2 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mb-6 mx-auto md:mx-0 animate-slide-in-left" />
                        <p className="mb-8 leading-relaxed text-gray-700 font-medium">
                            Hello There!! This is Amio Rashid - an undergraduate student majoring in Computer Science and Engineering (CSE) at the University of Dhaka, with a keen interest in machine learning and natural language processing (NLP). I am passionate about problem-solving and actively engage in hackathons, CTF competitions, and competitive programming.

                        </p>
                        <div className="flex justify-center animate-slide-in-right">
                            <Link href={"#Contact"}>
                                <button className="inline-flex text-white bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:via-blue-600 hover:to-purple-600 border-0 py-3 px-8 focus:outline-none rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-lift">
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-slide-in-right">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                            <Image
                                src="/assests/picture/Amio_2nd.png"
                                alt="hero"
                                width={480}
                                height={400}
                                className="relative object-cover object-center rounded-lg shadow-2xl hover-lift w-120 h-100"
                            />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Hero;
