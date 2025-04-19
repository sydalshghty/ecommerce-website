import imgEmail from "../images/Vector (9).png"; 
import imgQR from "../images/Qr Code.png";
import imgGooglePlay from "../images/GooglePlay.png";
import imgAppStore from "../images/download-appstore.png";
import imgFacebook from "../images/Icon-Facebook.png";
import imgTwiteer from "../images/Icon-Twitter.png";
import imgInstagram from "../images/icon-instagram.png";
import imgLinkedin from "../images/Icon-Linkedin.png";
import "../css/Footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {

    const [Email, setEmail] = useState("Enter your email");

    return (
        <div className="Footer-Departament">
            <div className="container">
                <div className="footer-Content">
                    <div className="Exclusive-Col">
                        <h3>Exclusive</h3>
                        <h4>Subscribe</h4>
                        <p>Get 10% off your first order</p>
                        <div className="input-Email">
                            <input onFocus={() => {
                                setEmail("");
                            }}
                                onBlur={() => {
                                    setEmail("Enter your email");
                            }}    type="email" placeholder={Email} />
                            <img src={imgEmail} alt="img-Email"/>
                        </div>
                    </div>
                    <div className="Support-Col">
                        <h3>Support</h3>
                        <p className="p-one">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className="email-Title">exclusive@gmail.com</p>
                        <p className="P-Phone">+88015-88888-9999</p>
                    </div>
                    <div className="Account-Col">
                        <h3>Account</h3>
                        <Link to={"/MyAccount"}>My Account</Link>
                        <Link to={"/Login"}>Login / Register</Link>
                        <Link to={"/Cart"}>Cart</Link>
                        <Link to={"/ShopNow"}>Wishlist</Link>
                        <Link to={"/ShopNow"}>Shop</Link>
                    </div>
                    <div className="QuickLink-Col">
                        <h3>Quick Link</h3>
                        <a href="#Privacy Policy">Privacy Policy</a>
                        <a href="#Terms Of Use">Terms Of Use</a>
                        <a href="#FAQ">FAQ</a>
                        <Link to={"/Contact"}>Contact</Link>
                    </div>
                    <div className="DownloadApp-Col">
                        <h3>Download App</h3>
                        <p>Save $3 with App New User Only</p>
                        <div className="images-Col">
                            <img src={imgQR} alt="imgQr" />
                            <div>
                                <img src={imgGooglePlay} alt="img-GooglePlay" />
                                <img src={imgAppStore} alt="img-AppStore" />
                            </div>
                        </div>
                        <div className="col-SocialMedia">
                            <img src={imgFacebook} alt="img-Facebook" />
                            <img src={imgTwiteer} alt="img-Twiter" />
                            <img src={imgInstagram} alt="img-Instagram" />
                            <img src={imgLinkedin} alt="img-Linkedin" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="reserved-Col">
                    <p className="p-one">&copy;</p>
                    <p>Copyright Saeed Mohamed 2025. All right reserved</p>
                </div>
        </div>
    )
}
export default Footer;