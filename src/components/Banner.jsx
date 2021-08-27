import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="pt-24 pb-8 md:pt-30 md:pb-15">

            {/* Section header */}

            <div className="text-center pb-8 md:pb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-1">Start Crafting Your </h1>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter text-indigo-600 tracking-tighter mb-2">Next Great Idea</h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8" >Simplifying the creation of landing pages, blog pages, application pages and so much more!</p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:block-flex  sm:justify-center" >

                        {/* <Link to="/" className="font-medium text-gray-100 hover:text-gray-300 bg-indigo-700 px-4 py-1 border border-transparent text-base font-medium rounded-full py-3 px-6 " >
                                Purchase Now
                                <button className='absolute  bg-green-500 text-white rounded-full p-1 w-20 top-5 left-28' style={{ fontSize: "10px" }}>Only $15/mo</button>
                            </Link> */}
                        <button className=' relative bg-indigo-700 text-gray-100 rounded-full py-4 px-8 text-1xl shadow-md'>Purchase Now
                            <button className='absolute  bg-green-500 text-white rounded-full p-1 md:mb-10 w-20  -top-1 left-28' style={{ fontSize: "10px" }}>Only $15/mo</button>

                        </button>

                        <div className="mt-6">
                            <Link to="/" className="font-medium text-indigo-500 hover:text-indigo-900" >
                                Learn More!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
