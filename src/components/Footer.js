import { Link } from "react-router-dom"
import "./FooterStyles.css"

function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1><i class="fa-solid fa-spa"></i>Relaxxa</h1>
                    <p>Beauty and Wellness Spa</p>
                </div>
                <div>
                    <a href="https://www.facebook.com" target="_blank">
                    <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.behance.net" target="_blank">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">ChangeLog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2023 Relaxxa Spa : Mustansir - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer