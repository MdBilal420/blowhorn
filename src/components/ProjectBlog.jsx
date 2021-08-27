import React from 'react'
import Blog from "./Blog"
import BlogCard from "./BlogCard"
import b1 from "../assets/blog/b1.png"
import b2 from "../assets/blog/b2.png"
import b3 from "../assets/blog/b3.png"
import b4 from "../assets/blog/b4.png"
import b5 from "../assets/blog/b5.png"
import b6 from "../assets/blog/b6.png"

const ProjectBlog = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">The Project Blog</h3>
                <p className="text-xl text-gray-600">Design and layout to help you with your apps.</p>
            </div>
            <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none'>
                <Blog img={b1} bg1="bg-purple-600" bg2="bg-purple-500" textColor="text-purple-500" heading="Refreshing Designs" tagline="Quench satisfying designs to help you stir up emotion and tell a story" alt="" btnText="RESOURCES" />
                <Blog img={b2} bg1="bg-blue-500" bg2="bg-blue-400" textColor="text-blue-500" heading="Healthier Lifestyle" tagline="Living a healthier lifestyle will help with you productivity and your mind-set." alt="" btnText="LIFESTYLE" />
                <Blog img={b3} bg1="bg-yellow-500" bg2="bg-yellow-400" textColor="text-yellow-500" heading="Gaming Evolution" tagline="Learn about the evolution of gaming and how it started a revolution." alt="" btnText="ENTERTAINMENT" />
            </div>
            <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none'>
                <BlogCard img={b4} bgColor="text-blue-500" heading="Best WorkStations of the Year" desc="Check out these inspiring workstations to get ideas on how to level-up your workstation." alt="" btnText="INSPIRATION" />

                <BlogCard img={b5} bgColor="text-red-500" heading="Eating for Productivity" desc="Learn how to be more disciplined in your diet and how you can eat to maximize productivity." alt="" btnText="FOOD" />
                <BlogCard img={b6} bgColor="text-purple-500" heading="A Design Mind-set" desc="What does it mean to have a design mind-set? Learn how to improve your eye for design." alt="" btnText="RESOURCES" />
            </div>
        </div>
    )
}

export default ProjectBlog

