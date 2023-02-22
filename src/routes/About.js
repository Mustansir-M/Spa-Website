
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs"


function About(){
    return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"

    
    heroImg="https://rare-gallery.com/uploads/posts/349280-4k-wallpaper.jpg"
    title="About Us"
    
    btnClass="hide"

    
    
    />
    <AboutUs/>
    <Footer/>
    </>
    )
}

export default About;