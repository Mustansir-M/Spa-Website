import "./ServicesStyles.css"
import ServicesData from "./ServicesData"



function Services(){
    return(
        <div className="Services">
            <h1>Our Services</h1>
            <p>One Stop Solution to all your needs </p>
            <div className="Servicescard-top">
                <ServicesData
                image="https://images.everydayhealth.com/images/what-to-know-before-undergoing-laser-resurfacing-for-better-skin-alt-1440x810.jpg"
                heading="Laser Therapy"
                text="Laser therapies are medical treatments that use focused light. Unlike most light sources, light from a laser (which stands for light amplification by stimulated emission of radiation) is tuned to specific wavelengths. This allows it to be focused into powerful beams. Laser light is so intense that it can be used to shape diamonds or cut steel."
                />


                <ServicesData
                image="https://cdn5.newsnationtv.com/images/2022/02/21/mani-padi-89.jpg"
                heading="Manicure/Pedicure"
                text="What is the pedicure and manicure?
                The treatment for improving the appearance of fingernails and hands is known as manicure, whereas, the same treatment meant for improving the appearance of toenails, feet and legs is known as pedicure. "
                />


                <ServicesData
                image="https://images.healthshots.com/healthshots/en/uploads/2021/08/27173822/katherine-hanlon-Pdea8oxLHkU-unsplash.jpg"
                heading="Cupping Therapy"
                text="Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. People get it for many purposes, including to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage."
                />
            </div>
            <div className="Servicescard-bottom">
                <ServicesData
                image="https://letsrelaxspa.com/wp-content/uploads/2022/09/spa-massage-thai-healing-relaxation.jpg"
                heading="Thai Massage"
                text="Thai massage or Thai yoga massage is a traditional therapy combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.[1] The idea of Sen-lines alias energy-lines was first used as Thai yoga massage. These are similar to nadis as per the philosophy of yoga by Gorakhnath"
                />


                <ServicesData
                image="https://www.thehubnewmills.co.uk/wp-content/uploads/2018/05/body-scrub2.jpg"
                heading="Body Exfoliation"
                text="Exfoliation is the process of removing dead skin cells from the outer layer of your skin. While some people believe that this improves the appearance of their skin, it’s not for everyone. If not done properly, it could do more harm than good.

                "
                
                />


                <ServicesData
                image="https://www.americanself.com/wp-content/uploads/2017/04/Whipple-skin-tightning-options.jpg"
                heading="Skin Tightening"
                text="In general, non-surgical skin tightening procedures work by using targeted energy to heat deeper layers of skin, which stimulates collagen and elastin production and gradually improves skin tone and texture. Some treatments also affect fibrous tissue to help smooth cellulite."
                />
            </div>
        </div>
    )
}

export default Services