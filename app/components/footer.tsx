import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800">
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image
                            src="/assests/picture/pf.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 flex items-center justify-center mr-2 rounded-full bg-blue-600"
                        />
                        <span className="ml-3 text-xl">Amio Rashid</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2025 Portfolio —
                        <a
                            href="https://www.linkedin.com/in/amio-rashid-0808b52b8"
                            className="text-gray-600 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Amio Rashid
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* <Link
                            target="_blank"
                            href="https://www.facebook.com/amio.rashid"
                            className="text-blue-500"
                        >
                            <FaFacebook className="text-2xl hover:text-blue-600" />
                        </Link>

                        <Link
                            target="_blank"
                            href="https://www.instagram.com/aa_mii_oo/"
                            className="ml-4"
                        >
                            <FaInstagram className="text-2xl hover:text-pink-500" color="#E4405F" />
                        </Link> */}

                        <Link
                            target="_blank"
                            href="https://github.com/Flamy-A"
                            className="ml-4"
                        >
                            <FaGithub className="text-2xl hover:text-gray-800" />
                        </Link>

                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/amio-rashid-0808b52b8"
                            className="ml-4"
                        >
                            <FaLinkedin className="text-2xl hover:text-blue-700" color="#0A66C2" />
                        </Link>

                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
