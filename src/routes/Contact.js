import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
// import night from "../assets/night.jpg"



function Contact(){
    return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="https://wallpaperaccess.com/full/2090218.jpg"
    title="Contact Us"
    
    btnClass="hide"

    
    
    />
    <ContactForm/>
    <Footer/>
    </>
    )
}

export default Contact;