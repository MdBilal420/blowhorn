import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Companies from '../components/Companies'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectBlog from '../components/ProjectBlog'


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <Banner />
            <Companies />
            <About />
            <Features />        
            <ProjectBlog />
            <Footer />
        </div>
    )
}

export default Home
