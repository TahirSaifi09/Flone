import React from "react";
import Hero from "../component/hero/hero";
import Navbar from "../component/navbar/navbar";
import Services from "../component/home/services";
import Deals from "../component/daily-deals/deals";
export default function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Deals />
        </div>
    )
}