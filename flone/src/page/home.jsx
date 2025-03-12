import React from "react";
import Hero from "../component/hero/hero";
import Navbar from "../component/navbar/navbar";
import Services from "../component/home/services";
export default function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Services />
        </div>
    )
}