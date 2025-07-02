import React from "react";

const skillsData = [
    {
        icon: (
            // Web Development Icon (Globe)
            <span className="text-2xl">🌐</span>
        ),
        title: "Web Development",
        skills: ["JavaScript", "HTML5", "CSS3"],
        gradient: "from-blue-400 to-purple-500",
    },
    {
        icon: (
            // Programming Languages Icon (Monitor)
            <span className="text-2xl">🖥️</span>
        ),
        title: "Programming Languages",
        skills: ["C++", "Java", "Python"],
        gradient: "from-green-400 to-blue-500",
    },
    {
        icon: (
            // Databases Icon (Database)
            <span className="text-2xl">🗄️</span>
        ),
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "Neon"],
        gradient: "from-yellow-400 to-pink-500",
    },
    {
        icon: (
            // Operating Systems Icon (Penguin)
            <span className="text-2xl">🐧</span>
        ),
        title: "Operating Systems",
        skills: ["Linux", "macOS", "Windows"],
        gradient: "from-gray-400 to-blue-400",
    },
];

const Skills = () => {
    return (
        <div id="Skills" className="bg-[#e0d6f5]">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20 animate-fade-in-up">
                        <h2 className="text-xs bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-widest font-bold title-font mb-1">
                            SKILLS
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font gradient-text">
                            My Skills
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto mt-4 animate-slide-in-right"></div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:flex-nowrap">
                        {skillsData.map((group) => (
                            <div
                                key={group.title}
                                className="p-2 w-full sm:w-1/2 md:w-1/4 animate-fade-in-up flex-shrink-0"
                            >
                                <div
                                    className={`flex rounded-lg h-full bg-white p-4 flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100 min-w-[180px] max-w-[220px] mx-auto`}
                                >
                                    <div className="flex items-center mb-3">
                                        <div
                                            className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r ${group.gradient} text-white flex-shrink-0 shadow-lg`}
                                        >
                                            {group.icon}
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-bold">
                                            {group.title}
                                        </h2>
                                    </div>
                                    <div className="flex-grow">
                                        <ul className="list-disc list-inside text-gray-700 font-medium pl-2">
                                            {group.skills.map((skill) => (
                                                <li key={skill}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
