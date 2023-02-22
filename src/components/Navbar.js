import "./NavbarStyles.css"
import {Component} from "react"
import {Link} from "react-router-dom"
import { MenuItems } from "./MenuItems"

class Navbar extends Component{
    
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i class="fa-solid fa-spa"></i>Relaxxa</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>

                <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <div>
                            <li key={index}><Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link></li>
                            
                            </div>
                        )
                    })}
                    {/* <button className="nav-links-mobile" Link to={"/signup"}>Sign Upp</button> */}
                    
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar