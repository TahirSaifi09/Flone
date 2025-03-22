import React from "react";
import Navbar from "../component/home/navbar";
import Hero from "../component/home/hero";
import Services from "../component/home/services"
import Deals from "../component/home/deals";
import Blog from "../component/home/Blog";
export default function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Deals />
            <Blog />
        </div>
    )
}