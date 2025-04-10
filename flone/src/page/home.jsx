import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/home/hero";
import Services from "../component/home/services"
import Deals from "../component/home/deals";
import Blog from "../component/home/Blog";
import Footer from "../component/Footer";
export default function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Deals />
            <Blog />
            <Footer />
        </div>
    )
}