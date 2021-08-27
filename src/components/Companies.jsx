import React from 'react'
import disney from "../assets/companies/disney.png"
import google from "../assets/companies/google.png"
import youtube from "../assets/companies/youtube.png"
import slack from "../assets/companies/slack.png"
import shopify from "../assets/companies/shopify.png"
import hubspot from "../assets/companies/hubspot.png"

const Companies = () => {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center font-bold pb-8 md:pb-12">
                        <h2 className="h2 mb-4">TRUSTED BY TOP-LEADING COMPANIES.</h2>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-6">

                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <img className="max-w-full fill-current text-gray-400" width="124" height="24" alt=""
                                src={disney}
                            />
                        </div>
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <img className="max-w-full fill-current text-gray-400" width="124" height="24" alt=""
                                src={google}
                            />
                        </div>
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <img className="max-w-full fill-current text-gray-400" width="124" height="24" alt=""
                                src={hubspot}
                            />
                        </div>
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <img className="max-w-full fill-current text-gray-400" width="124" height="24" alt=""
                                src={youtube}
                            />
                        </div>
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <img className="max-w-full fill-current text-gray-400" width="124" height="24" alt=""
                                src={slack}
                            />
                        </div>
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <img className="max-w-full fill-current text-gray-400" width="124" height="24" alt=""
                                src={shopify}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies
