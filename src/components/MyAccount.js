import "../css/MyAccount.css";
import { useState,useRef } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function MyAccount(){
    const navigate = useNavigate("");
    const navigateHome = () => {
        navigate("/Home");
    };

    const navigateAccount = () => {
        navigate("/MyAccount");
    };

    const [FirstName,setFirstName] = useState("Md");
    const [LastName,setLastName] = useState("Rimel");
    const [Email,setEmail] = useState("rimel1111@gmail.com");
    const [Address,setAddress] = useState("Kingston, 5236");
    const [firstPassword,setfirstPassword] = useState("Current Passwod");
    const [secondPassword,setsecondPassword] = useState("New Passwod");
    const [thirdPassword,setThirdPassword] = useState("Confirm New Passwod");
    const spanRef = useRef("");

    const [nameFirst,setnameFirst] = useState("");
    const [nameSecond,setnameSecond] = useState("");
    const [email,setemail] = useState("");
    const [address,setaddress] = useState("");
    const [CPassword,setCPassword] = useState("");
    const [NPassword,setNPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");

    const handleSubmit = () => {
        sessionStorage.setItem("First-Name",nameFirst);
        sessionStorage.setItem("Second-Name",nameSecond);
        localStorage.setItem("First-Name",nameFirst);
        localStorage.setItem("Second-Name",nameSecond);
        sessionStorage.setItem("Email",email);
        sessionStorage.setItem("Address",address);
        sessionStorage.setItem("First-Password",CPassword);
        sessionStorage.setItem("Second-Password",NPassword);
        sessionStorage.setItem("Third-Password",confirmPassword);
        if(spanRef.current){
            spanRef.current.textContent = `${localStorage.getItem("First-Name")} ${localStorage.getItem("Second-Name")}`
        }
    }

    return(
        <div className="MyAccount-Departament">
            <div className="container">
                <div className="heading-account">
                    <div className="col-one">
                        <p style={{cursor: "pointer"}} onClick={navigateHome}>Home</p>
                        <span>/</span>
                        <p style={{cursor: "pointer"}} onClick={navigateAccount}>My Account</p>
                    </div>
                    <div className="col-two">
                        <p>Welcome!</p>
                        <span ref={spanRef}>Md Rimel</span>
                    </div>
                </div>
                <div className="myAccount-Form">
                    <div className="myAccount-Col">
                        <div className="col">
                            <h3>Manage My Account</h3>
                            <p>My Profile</p>
                            <p>Address Book</p>
                            <p>My Payment Options</p>
                        </div>
                        <div className="col">
                            <h3>My Orders</h3>
                            <p>My Returns</p>
                            <p>My Cancellations</p>
                        </div>
                        <div className="col">
                            <h3>My WishList</h3>
                        </div>
                    </div>
                    <div className="Form-Account">
                        <h2>Edit Your Profile</h2>
                        <form action={""}>
                            <div className="col-Name">
                                <div>
                                    <label>First Name</label>
                                    <input 
                                    onFocus={() => {
                                        setFirstName("")
                                    }} 
                                    onBlur={() => {
                                        setFirstName("Md")
                                    }}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                        setnameFirst(e.target.value);
                                    }}
                                    type="text" placeholder={FirstName}/>
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input onFocus={() => {
                                        setLastName("")
                                    }} 
                                    onBlur={() => {
                                        setLastName("Rimel")
                                    }}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        setnameSecond(e.target.value);
                                    }}
                                    type="text" placeholder={LastName}/>
                                </div>
                            </div>
                            <div className="col-Email-Address">
                                <div>
                                    <label>Email</label>
                                    <input
                                    onChange={(e) => {
                                        setemail(e.target.value);
                                    }}
                                    onFocus={() => {
                                        setEmail("")
                                    }}
                                    onBlur={() => {
                                        setEmail("rimel1111@gmail.com")
                                    }}
                                    type="email" placeholder={Email}/>
                                </div>
                                <div>
                                    <label>Address</label>
                                    <input
                                    onChange={(e) => {
                                        setaddress(e.target.value);
                                    }}
                                     onFocus={() => {
                                        setAddress("");
                                    }} 
                                    onBlur={() => {
                                        setAddress("Kingston, 5236")
                                    }}
                                    type="text" placeholder={Address}/>
                                </div>
                            </div>
                            <div className="col-password">
                                <label>Password Changes</label>
                                <input
                                onChange={(e) => {
                                    setCPassword(e.target.value);
                                }}
                                onFocus={() => {
                                    setfirstPassword("")
                                }} 
                                onBlur={() => {
                                    setfirstPassword("Current Passwod")
                                }}
                                type="password" placeholder={firstPassword}/>
                                <input 
                                onChange={(e) => {
                                    setNPassword(e.target.value);
                                }}
                                onFocus={() => {
                                    setsecondPassword("")
                                }}
                                onBlur={() => {
                                    setsecondPassword("New Passwod")
                                }}
                                type="password" placeholder={secondPassword}/>
                                <input
                                onChange={(e) => {
                                    setconfirmPassword(e.target.value)
                                }}
                                 onFocus={() => {
                                    setThirdPassword("")
                                }}
                                onBlur={() => {
                                    setThirdPassword("Confirm New Passwod")
                                }}
                                 type="password" placeholder={thirdPassword}/>
                            </div>
                            <div className="col-button">
                                <button>Cancel</button>
                                <button onClick={handleSubmit}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default MyAccount;