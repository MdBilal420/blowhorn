import React from 'react'

import ab3 from "../assets/about/ab3.png"
import ab4 from "../assets/about/ab4.png"


const About = () => {
    return (
        <div className="py-12 bg-white" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                            <img src={ab3} alt="" className="h-50 w-md" />
                        </div>

                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Boost Productivity</h3>
                            <p className="text-xl text-gray-800">Build an atmosphere that creates productivity in your organization and your company culture.</p>
                            <div className="flex mt-10">
                                <span className="relative flex items-center justify-center h-6 w-6 rounded-lg bg-yellow-500 text-white">
                                    1
                                </span>
                                <p className="ml-5 text-xl text-gray-600">Maximum productivity and growth.</p>
                            </div>
                            <div className="flex mt-10">
                                <span className="relative flex items-center justify-center h-6 w-6 rounded-lg bg-yellow-500 text-white">
                                    2
                                </span>
                                <p className="ml-5 text-xl text-gray-600">Speed past your competition.</p>
                            </div>
                            <div className="flex mt-10">
                                <span className="relative flex items-center justify-center h-6 w-6 rounded-lg bg-yellow-500 text-white">
                                    3
                                </span>
                                <p className="ml-5 text-xl text-gray-600">Learn the top techniques</p>
                            </div>
                        </div>
                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Automated Tasks</h3>
                            <p className="text-xl text-gray-600">Save time and money with our revolutionary services. We are the leaders in the industry.</p>
                            <div className="flex mt-10">
                                <span className="relative flex items-center justify-center h-6 w-6 rounded-lg bg-yellow-500 text-white">
                                    1
                                </span>
                                <p className="ml-5 text-xl text-gray-600">Automated task management workflow.</p>
                            </div>
                            <div className="flex mt-10">
                                <span className="relative flex items-center justify-center h-6 w-6 rounded-lg bg-yellow-500 text-white">
                                    2
                                </span>
                                <p className="ml-5 text-xl text-gray-600">Detailed analytics for your data.</p>
                            </div>
                            <div className="flex mt-10">
                                <span className="relative flex items-center justify-center h-6 w-6 rounded-lg bg-yellow-500 text-white">
                                    3
                                </span>
                                <p className="ml-5 text-xl text-gray-600">Some awesome integrations.</p>
                            </div>
                        </div>
                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                            <img src={ab4} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
