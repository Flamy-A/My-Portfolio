import React from "react";
import Image from 'next/image';

const educationData = [
    {
        logo: "/assests/picture/logo.png", // Replace with actual logo if available
        institution: "University of Dhaka",
        degree: "Bachelor of Science - BS, Computer Science and Engineering",
        dates: "Sep 2022 - Dec 2026",
        grade: null,
    },
    {
        logo: "/assests/picture/ndc.png",
        institution: "Notre Dame College",
        degree: "Higher Secondary (School) Certificate (HSC)",
        dates: "Jul 2019 - Dec 2021",
        grade: "5.00",
    },
    {
        logo: "/assests/picture/lab.png",
        institution: "Government Laboratory High School | Dhaka",
        degree: "Secondary School Certificate (SSC)",
        dates: "Jan 2009 - Jun 2019",
        grade: "5.00",
    },
];

const Education = () => {
    return (
        <div id="Education" className="bg-[#e0d6f5] py-12">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col text-center w-full mb-12 animate-fade-in-up">
                        <h2 className="text-xs bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-widest font-bold title-font mb-1">
                            EDUCATION
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font gradient-text mb-4">
                            My Education
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto animate-slide-in-right"></div>
                    </div>

                    {/* Education Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full justify-items-center mx-auto">
                        {educationData.map((edu, idx) => (
                            <div key={idx} className="p-2 animate-fade-in-up h-full">
                                <div className="p-4 rounded-lg bg-white h-full flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100 min-w-[180px] max-w-[220px] mx-auto">
                                    <div className="flex items-center mb-3">
                                        <Image src={edu.logo} alt={edu.institution + ' logo'} width={40} height={40} className="w-10 h-10 rounded-full mr-3 border border-blue-300 bg-white" />
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg title-font">{edu.institution}</div>
                                            <div className="text-xs text-gray-500 font-semibold">{edu.degree}</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-700 mb-1 font-medium">{edu.dates}</div>
                                    {edu.grade && <div className="text-xs text-purple-700 mb-1 font-semibold">Grade: {edu.grade}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education; 