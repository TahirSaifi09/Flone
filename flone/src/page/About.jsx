import Banner from "../component/about/Banner";
import Hero from "../component/about/Hero";
import Overview from "../component/about/Overview";
import Footer from "../component/Footer";
import Navbar from "../component/home/navbar";

export default function About(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Banner />
            <Overview />
            <Footer />
        </div>
    )
}