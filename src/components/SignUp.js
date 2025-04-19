import SlideImg from "../images/Side Image.png";
import imgGoogle from "../images/Icon-Google.svg";
import "../css/SignUp.css";
import Footer from "./Footer";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [Name, setName] = useState("Name");
    const [email, setEmail] = useState("Email or Phone Number");
    const [Password, setPassword] = useState("Password");

    const [validName,setValidName] = useState("");
    const [validEmail,setValidEmail] = useState("");
    const [validPassword,setValidPassword] = useState("");

    const createAccount = () => {
        localStorage.setItem("Name", validName);
        localStorage.setItem("Email", validEmail);
        localStorage.setItem("Password", validPassword);
    }

    const navigate = useNavigate("");

    const handleNavigate = () => {
        navigate("/Home");
    }

    return (
        <>
        <div className="Sign-Up-Departament">
            <div className="col-image">
                <img src={SlideImg} alt="SlideImg"/>
            </div>
            <div className="account-Col">
                <div className="container">
                    <div className="account-Text">
                        <h2>Create an account</h2>
                        <p>Enter your details below</p>
                    </div>
                    <form action="">
                        <input onFocus={() => {
                             setName("")   
                            }}
                            onBlur={() => {
                            setName("Name")
                            }} 
                            onChange={(e) => {
                                setValidName(e.target.value);
                            }}
                         type="text" placeholder={Name} />
                        <input onFocus={() => {
                            setEmail("")   
                            }}
                            onBlur={() => {
                                setEmail("Email or Phone Number");
                            }}
                            onChange={(e) => {
                                setValidEmail(e.target.value)
                            }}
                            type="text" placeholder={email} />
                         <input onFocus={() => {
                            setPassword("");  
                            }}
                            onBlur={() => {
                            setPassword("Password")
                            }}  
                            onChange={(e) => {
                                setValidPassword(e.target.value)
                            }}
                            type="Password" placeholder={Password} />
                        <button onClick={() => {
                            createAccount();
                            handleNavigate();
                        }}>Create Account</button>
                    </form>
                    <div className="google-Col">
                        <img src={imgGoogle} alt="img-Google" />
                        <p>Sign up with Google</p>
                    </div>
                    <div className="login-Col">
                        <p>Already have account?</p>
                        <NavLink to={"/Login"}>Log in</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-Departament">
             <Footer/>
        </div>
        </>
    )
}
export default SignUp;