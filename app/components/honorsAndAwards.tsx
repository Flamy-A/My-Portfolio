import React from "react";

const awards = [
    {
        title: "UAP Cyber Siege 2025",
        placement: "10th Place",
        team: "Team_Cookies"
    },
    {
        title: "DUCTF 2024",
        placement: "4th Place",
        team: "Team_KukiChin"
    },
    {
        title: "DU CTF 2023",
        placement: "Top 15",
        team: null
    },
    {
        title: "IUT CTF 2024",
        placement: "Top 25",
        team: null
    },
];

const HonorsAndAwards = () => {
    return (
        <div id="HonorsAndAwards" className="bg-[#e0d6f5] py-12">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col text-center w-full mb-12 animate-fade-in-up">
                        <h2 className="text-xs bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-widest font-bold title-font mb-1">
                            HONORS & AWARDS
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font gradient-text mb-4">
                            My Achievements
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mx-auto animate-slide-in-right"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full justify-items-center mx-auto">
                        {awards.map((award, idx) => (
                            <div key={idx} className="p-2 animate-fade-in-up h-full">
                                <div className="p-4 rounded-lg bg-white h-full flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100 min-w-[140px] min-h-[140px] max-w-[160px] max-h-[160px] mx-auto aspect-square justify-center">
                                    <div className="font-bold text-gray-900 text-base text-center mb-1">{award.placement}</div>
                                    <div className="text-xs text-gray-700 font-semibold text-center mb-1">{award.title}</div>
                                    {award.team && <div className="text-xs text-purple-600 text-center">{award.team}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HonorsAndAwards; 