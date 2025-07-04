import React from "react";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="w-10 h-10 flex items-center justify-center mr-2 rounded-full bg-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </span>
                        <span className="ml-3 text-xl">PORTFOLIO</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
                        <Link href="/services" className="mr-5 hover:text-gray-900">Services</Link>
                        <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Button
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;