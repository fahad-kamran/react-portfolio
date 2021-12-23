import React from 'react';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import Experience from '../Components/Experience';
import PortfolioSection from '../Components/PortfolioSection';
import Carousel from '../Components/Carousel';
import Blog from '../Components/Blog';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
import GotoTop from '../Components/Goto_Top';
export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <Services />
            <Experience />
            <PortfolioSection />
            <Carousel />
            <Blog />
            <ContactUs />
            <Footer />
            <GotoTop />
        </div>
    )
}
