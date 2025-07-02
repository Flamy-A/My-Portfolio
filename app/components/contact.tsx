import React from "react";

const Contact = () => {
    return (
        <div id="Contact" className="bg-[#e0d6f5]">
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-2xl hover-lift animate-slide-in-left" style={{ minHeight: '350px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5224053497254!2d90.39650797503572!3d23.72874348960791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ef3976bbbd%3A0x1b3140066a1d7bb8!2sDepartment%20of%20Computer%20Science%20and%20Engineering%2C%20University%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1751095845793!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '350px', position: 'absolute', inset: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="map"
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md hover-lift z-10 w-full">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-bold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1 text-gray-700 font-medium">
                                    Dept. of CSE, University of Dhaka, Dhaka, Bangladesh
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-bold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text leading-relaxed font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">amio-2021311235@cs.du.ac.bd</a>
                                <h2 className="title-font font-bold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-gray-700 font-medium">+880 1777 655900</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 md:w-3/5 bg-white flex flex-col md:ml-auto w-full md:py-10 py-8 px-6 md:px-10 mt-8 md:mt-0 rounded-xl shadow-2xl border border-gray-200 hover-lift animate-slide-in-right">
                        <h2 className="title-font sm:text-4xl text-3xl mb-2 font-bold gradient-text md:text-left text-center">
                            Contact
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mb-4 animate-slide-in-right md:ml-0 ml-auto mr-auto"></div>
                        <p className="leading-relaxed mb-4 text-gray-600 font-medium md:text-left text-center">
                            Feel free to reach out to me for any inquiries or collaborations.
                        </p>
                        <div className="relative mb-2 group">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold mb-1 block ml-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-300 ease-in-out hover:border-purple-300 group-hover:shadow-md"
                            />
                        </div>
                        <div className="relative mb-2 group">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-semibold mb-1 block ml-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-300 ease-in-out hover:border-purple-300 group-hover:shadow-md"
                            />
                        </div>
                        <div className="relative mb-4 group">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-semibold mb-1 block ml-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-all duration-300 ease-in-out hover:border-purple-300 group-hover:shadow-md"
                                defaultValue={""}
                            />
                        </div>
                        <button className="text-white bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:via-blue-600 hover:to-purple-600 border-0 py-3 px-8 focus:outline-none rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-lift md:self-start self-center mt-2">
                            Send Message
                        </button>
                        <p className="text-xs text-gray-500 mt-2"></p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;

