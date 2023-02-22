import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Services from "../components/Services";


function Service(){
    return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="https://c4.wallpaperflare.com/wallpaper/231/111/776/relax-girl-massage-wallpaper-preview.jpg"
    title="Service"
    
    btnClass="hide"

    
    
    />
    <Services/>
    <Footer/>
    </>
    )
}

export default Service;