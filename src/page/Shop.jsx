import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Hero from "../component/shop/hero";
import HeroShop from "../component/shop/HeroShop";

export default function Shop(){
    return(
        <div>
            <Navbar />
            <Hero />
            <HeroShop />
            <Footer />
        </div>
    )
}