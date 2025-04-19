import SlideImg from "../images/Side Image (1).png";
import "../css/Login.css";
import Footer from "./Footer";
import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("Email or Phone Number");
    const [Password, setPassword] = useState("Password");

    return (
        <>
        <div className="Login-Departament">
            <div className="col-image">
                <img src={SlideImg} alt="imgLogin"/>
            </div>
            <div className="Login-Content">
                <div className="container">
                    <div className="col-content">
                        <h2>Log in to Exclusive</h2>
                        <p>Enter your details below</p>
                    </div>
                    <form action="">
                         <input onFocus={() => {
                                setEmail("")
                            }}
                                onBlur={() => {
                                    setEmail("Email or Phone Number")
                                }}
                                type="text" placeholder={email} />
                            <input onFocus={() => {
                                setPassword("");
                            }}
                                onBlur={() => {
                                    setPassword("Password")
                                }}
                                type="Password" placeholder={Password} />
                    </form>
                    <div className="col-Button">
                        <button>Log In</button>
                        <a href="#ForgetPassword">Forget Password?</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Login;