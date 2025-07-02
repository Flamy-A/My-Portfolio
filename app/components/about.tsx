import React from "react";
import Image from 'next/image';

const About = () => {
    return (
        <div id="About" className="bg-[#e0d6f5]">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate-slide-in-left">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                            <Image
                                className="relative object-cover object-center rounded-lg shadow-2xl hover-lift w-120 h-100"
                                alt="hero"
                                src="/assests/picture/Amio_2nd.png"
                                width={480}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate-fade-in-up">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold gradient-text">
                            About Me
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mb-6 mx-auto md:mx-0 animate-slide-in-right"></div>
                        <p className="mb-8 leading-relaxed text-gray-700 font-medium">
                            I&apos;m a passionate Computer Science &amp; Engineering student at the University of Dhaka, currently pursuing my Bachelor of Science. My core programming skills include C, C++, and Java, and I&apos;m expanding my expertise in Web Development, working with various Databases, and comfortable across Linux, macOS, and Windows operating systems. Outside of my studies, I&apos;m a devoted football fan (Hala Madrid!), and a keen cinephile. Feel free to reach out to me at amio-2021311235@cs.du.ac.bd to discuss my experiences or anything related to my skills and interests.
                        </p>
                        <div className="w-full max-w-xl md:mx-0 mx-auto">
                            <div className="mb-8 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 shadow animate-fade-in-up w-full">
                                <h3 className="font-bold text-lg mb-1 text-blue-900 flex items-center">
                                    Python AI Trainer <span className="mx-2 text-xs text-gray-500">@ SuperAnnotate</span>
                                </h3>
                                <div className="text-sm text-gray-700 mb-1">December 2023 - Present · 1year 8 mos · Remote</div>
                                <div className="text-gray-800">
                                    I work as a Python AI Trainer, building, training, and refining machine learning and AI models in Python, focusing on enhancing algorithms and optimizing model performance.
                                </div>
                                <div className="text-xs text-blue-700 mt-1">Python (Programming Language)</div>
                            </div>
                            <div className="flex md:justify-start justify-center animate-slide-in-right w-full">
                                <a
                                    href="/cv"
                                    className="inline-flex text-white bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:via-blue-600 hover:to-purple-600 border-0 py-3 px-8 focus:outline-none rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-lift"
                                >
                                    View My CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
