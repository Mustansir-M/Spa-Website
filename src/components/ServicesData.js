import "./ServicesStyles.css"

function ServicesData(props){
    return(
        <div className="t-card">
            <div className="t-image">
            <img alt="" src={props.image}></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default ServicesData