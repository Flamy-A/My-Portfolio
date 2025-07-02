import Link from "next/link";
import React from "react";
import Image from 'next/image';

const Project = () => {
    return (
        <div id="project" className="bg-[#e0d6f5]">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20 animate-fade-in-up">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 gradient-text">
                            MY PROJECTS
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto mb-6 animate-slide-in-right"></div>
                        <p className="mb-8 leading-relaxed text-gray-700 font-medium">
                            I&apos;ve worked on a range of hands-on projects, from full-stack web applications to AI-powered tools. My focus is on building practical solutions that are both user-friendly and technically robust. Whether it&apos;s real-time collaboration tools or educational simulators, each project reflects my passion for clean code, smart design, and impactful technology.
                        </p>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        {/* Example project card */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 animate-fade-in-up">
                            <div className="flex relative group">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                                    src="/assests/project/Mine.png"
                                    width={400}
                                    height={300}
                                />
                                <div className="px-4 py-6 relative z-10 w-full border-4 border-transparent bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 cursor-pointer rounded-lg shadow-2xl transition-all duration-500 hover-lift min-h-[320px]">
                                    <h2 className="tracking-widest text-sm title-font font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                                        Fundamentals of Programming
                                    </h2>
                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                                        Minesweeper with Treasure Hunt
                                    </h1>
                                    <p className="leading-relaxed text-gray-700">
                                        Built a Minesweeper clone in C++ with Qt featuring multiple modes, story mode, timer, flagging, and random bomb placement.
                                    </p>
                                    <div className="flex items-center mt-3 gap-6">
                                        <Link
                                            target="_blank"
                                            href="https://github.com/TanzilaKhan1/Project_minesweeper_with_treasure_hunt"
                                        >
                                            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text inline-flex items-center font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group/link">
                                                View Project&nbsp;
                                                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://youtu.be/lSE2rmScvAU?si=zpGsNS8c3YfisTJP"
                                        >
                                            <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text inline-flex items-center font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 group/link">
                                                View Video
                                                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Another project card (OOP) */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 animate-fade-in-up">
                            <div className="flex relative group">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                                    src="/assests/project/oop.png"
                                    width={400}
                                    height={300}
                                />
                                <div className="px-4 py-6 relative z-10 w-full border-4 border-transparent bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 cursor-pointer rounded-lg shadow-2xl transition-all duration-500 hover-lift min-h-[320px]">
                                    <h2 className="tracking-widest text-sm title-font font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                                        Object Oriented Programming
                                    </h2>
                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                                        Coffee Shop Management System
                                    </h1>
                                    <p className="leading-relaxed text-gray-700">
                                        Developed a Coffee Shop Management System in Java using OOP principles, featuring user authentication, order management, and a dynamic menu.
                                    </p>
                                    <div className="flex items-center mt-3 gap-6">
                                        <Link
                                            target="_blank"
                                            href="https://github.com/Flamy-A/Cafe-Management-System"
                                        >
                                            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text inline-flex items-center font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group/link">
                                                View Project&nbsp;
                                                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://youtu.be/IeNikI1DcSk?si=IJVRR_Gcq6LshuyE"
                                        >
                                            <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text inline-flex items-center font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 group/link">
                                                View Video
                                                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Another project card (DSA Visualizer) */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 animate-fade-in-up">
                            <div className="flex relative group">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                                    src="/assests/project/dbms.png"
                                    width={400}
                                    height={300}
                                />
                                <div className="px-4 py-6 relative z-10 w-full border-4 border-transparent bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 cursor-pointer rounded-lg shadow-2xl transition-all duration-500 hover-lift min-h-[320px]">
                                    <h2 className="tracking-widest text-sm title-font font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                                        Database Management System
                                    </h2>
                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                                        CSEDU PMICS Portal
                                    </h1>
                                    <p className="leading-relaxed text-gray-700">
                                        Developed a web-based Database Management System (DBMS) portal for CSEDU, featuring user authentication, course management, and a dynamic dashboard.
                                    </p>
                                    <div className="flex items-center mt-3 gap-6">
                                        <Link
                                            target="_blank"
                                            href="https://github.com/Flamy-A/FinMan"
                                        >
                                            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text inline-flex items-center font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group/link">
                                                View Project&nbsp;
                                                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link
                                            target="_blank"
                                            href="https://docs.google.com/presentation/d/11eODqb87YNvtBR09MejHYdj94CMOYhqF/edit?usp=sharing&ouid=113373920320747388319&rtpof=true&sd=true"
                                        >
                                            <span className="text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text inline-flex items-center font-semibold hover:from-teal-600 hover:to-green-600 transition-all duration-300 group/link">
                                                View Slides
                                                <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Project;
