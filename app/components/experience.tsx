import React from "react";
import Image from 'next/image';

const experienceData = [
    {
        logo: "/assests/picture/code_samurai.png",
        title: "Code Samurai BD",
        org: " Passed the Preliminary Round and Promoted to 2nd Round in Code Samurai (A Inter-University Hacakthon) 2024 by Bangladesh Japan Information Technology",
        dates: null,
        description: null,
        skills: []
    },
    {
        logo: "/assests/picture/code_samurai.png",
        title: "Code Samurai BD",
        org: "Volunteer",
        dates: "May 2024",
        description: null,
        skills: []
    },

    {
        logo: "/assests/picture/code_samurai.png",
        title: "Code Samurai BD",
        org: "Volunteer",
        dates: "December 2022",
        description: null,
        skills: []
    },

];

const Experience = () => {
    return (
        <div id="Experience" className="bg-[#e0d6f5] py-12">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col text-center w-full mb-12 animate-fade-in-up">
                        <h2 className="text-xs bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-widest font-bold title-font mb-1">
                            EXPERIENCE
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font gradient-text mb-4">
                            My Experience
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto animate-slide-in-right"></div>
                    </div>

                    {/* Experience Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        {experienceData.map((exp, idx) => (
                            <div key={idx} className="p-2 animate-fade-in-up h-full">
                                <div className="p-4 rounded-lg bg-white h-full flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100 min-w-[220px] min-h-[220px] max-w-[260px] max-h-[260px] mx-auto aspect-square">
                                    <div className="flex items-center mb-3">
                                        <Image src={exp.logo} alt={exp.org + ' logo'} width={64} height={64} className="w-16 h-16 rounded-full mr-3 border border-blue-300 bg-white" />
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg title-font">{exp.title}</div>
                                            <div className="text-xs text-gray-500 font-semibold max-w-[180px] whitespace-normal break-words">{exp.org}</div>
                                        </div>
                                    </div>
                                    {exp.dates && <div className="text-sm text-gray-700 mb-1 font-medium">{exp.dates}</div>}
                                    {exp.description && <div className="text-gray-800 mb-1">{exp.description}</div>}
                                    {exp.skills && exp.skills.length > 0 && (
                                        <div className="text-xs text-blue-700 mt-1 flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span key={skill} className="bg-white/80 border border-blue-200 rounded px-2 py-0.5 mb-1">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience; 