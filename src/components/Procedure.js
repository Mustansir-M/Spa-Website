
import ProcedureData from "./ProcedureData"

import "./ProcedureStyles.css"
 
 const Procedure =(props)=>{
    return(
        <div className="Procedure">
            <h1>Popular Procedures</h1>
            <p>Prepare and Prevent, instead of Repair and Repent</p>

            <ProcedureData
            className="first-des"
            heading="Laser Skin Resurfacing"
            text="Laser resurfacing uses lasers to reduce the appearance of wrinkles and scars, to even out skin coloring (pigmentation), to tighten skin and to remove lesions, both benign (non-cancerous) and malignant.

            The laser technique directs short, concentrated pulsating beams of light at irregular skin. Laser skin resurfacing removes skin very precisely, layer-by-layer by vaporizing it. Lasers remove the outer layer of your skin – the epidermis – and heats the underlying layer, called the dermis. The lasers stimulate the growth of new collagen fibers resulting in new skin that is smoother and firmer. This popular procedure is known by several other names, including lasabrasion, laser peel or laser vaporization."
            img1="https://skinspecialistsoa.com/wp-content/uploads/2020/01/Laser_facial_laser_skin_resurfacing_treatment_pros_and_cons.jpg"
            img2="https://theclinicroom.co/wp-content/uploads/2020/01/image003-1-870x500.jpg"
            />

            <ProcedureData
            className="first-des-reverse"
            heading="Cryotherapy"
            text="Cryotherapy is often used to treat skin lesions. Skin lesions are skin growths or patches that don’t look like the skin around them. The lesions can be:
            Benign (not cancerous).
            Actinic keratosis. These are precancerous skin cancers that look like scaly patches on your skin, and they can turn into cancer in the future.
            Superficial skin cancer (skin cancer that’s on the surface of your skin).
            Cryotherapy also helps save the area around the lesions and to reduce the scarring as much as possible.
            The treated area will become red soon after your procedure. It may also blister and swell. If this happens, don’t break open the blister. You may also see clear drainage on the treated area. This is normal.
            The treated area will heal in about 7 to 10 days. It probably won’t leave a scar."
            img1="https://www.dermexpert.co.uk/wp-content/uploads/2020/09/Screen-Shot-2020-09-09-at-13.33.41.png"
            img2="https://caloxinc.com/wp-content/uploads/2021/04/what-are-the-benefits-of-cryosurgery_inline2.jpg"
            />


            <ProcedureData
            className="first-des"
            heading="Massage Therapy"
            text="Massage used to only be available at high-end spas or health clubs. Some people viewed it as a luxury for the wealthy or a code word for illegal activities. Now massage is widely available and viewed as an important tool in promoting mental and physical health.

            Massage is a general term for pressing, rubbing and manipulating your skin, muscles, tendons and ligaments. Massage may range from light stroking to deep pressure. It's generally considered part of integrative medicine.
            
            Massage is increasingly being offered along with standard treatment for a wide range of medical conditions and situations. If you have never tried massage, read on to learn about its many benefits.
            
            A common misconception about massage is that it's only part of a spa day and intended for pampering yourself. While this may be true for some people, it is most frequently a tool for stress reduction and pain relief."
            img1="https://cdn.spafinder.com/2015/08/massage.jpg"
            img2="https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/growth/home-screen/1627557184380-b73c79.jpeg"
            />


        </div>
    )
}

export default Procedure