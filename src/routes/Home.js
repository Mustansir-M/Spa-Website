import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Procedure from "../components/Procedure"

import Footer from "../components/Footer";

function Home(){


    return(
    <div>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://www.teahub.io/photos/full/110-1101163_2880x1800-beauty-salon-on-source-beauty-makeup.jpg"
    title="Welcome To Relaxxa Spa"
    text="Beauty and Wellness Spa"
    url="/service"
    buttonText="Our Services"
    btnClass="show"/>
    <Procedure/>
    <Footer/>
    </div>
    
    )
}

export default Home;