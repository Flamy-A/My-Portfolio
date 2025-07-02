import React from "react";

const CVPage = () => (
    <div className="min-h-screen bg-[#e0d6f5] flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold mb-6 gradient-text">My CV</h1>
        <div className="w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <iframe
                src="/assests/cv/AmioRashid__CV.pdf"
                title="Amio Rashid CV"
                width="100%"
                height="100%"
                className="w-full h-full"
            />
        </div>
    </div>
);

export default CVPage;