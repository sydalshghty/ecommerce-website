import "../css/contact.css";
import imgPhone from "../images/icons-phone.svg";
import imgMail from "../images/icons-mail.svg";
import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Contact() {
    const navigate = useNavigate("");
    const handleNavigate = () => {
        navigate("/Home");
    }

    const handleNavigateContact = () => {
        navigate("/Contact");
    }

    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("Your Email");
    const [number, setNumber] = useState("Your Phone");
    const [message, setMessage] = useState("Your Massage");

    const [validName, setValidName] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [validNumber, setValidNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            validName,
            validEmail,
            validNumber,
            validMessage
        });
        sessionStorage.setItem("Name", validName);
        sessionStorage.setItem("Email", validEmail);
        sessionStorage.setItem("Number", validNumber);
        sessionStorage.setItem("Message", validMessage);
    }

    return (
        <>
        <div className="contact-Departament">
            <div className="container">
                <div className="heading-contact">
                    <p style={{cursor: "pointer"}} onClick={handleNavigate}>Home /</p>
                    <p style={{cursor: "pointer"}} onClick={handleNavigateContact}>Contact</p>
                </div>
                <div className="contact-Content">
                    <div className="call-write-Cols">
                        <div className="call-Col">
                            <div className="heading-call">
                                <img src={imgPhone} alt="img-Call" />
                                <h3>Call To Us</h3>
                            </div>
                            <div className="content-call">
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                            </div>
                        </div>
                        <div className="write-Col">
                            <div className="heading-Write">
                                <img src={imgMail} alt="img-Write" />
                                <h3>Write To US</h3>
                            </div>
                            <div className="content-write">
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="all-Email-Phone-Name">
                            <input
                                onChange={(e) => {
                                    setValidName(e.target.value);
                                }}
                                onFocus={() => {
                                setName("");
                            }}
                                onBlur={() => {
                                    setName("Your Name");
                                }}
                                type="text" placeholder={name} required />
                            <input
                                onChange={(e) => {
                                    setValidEmail(e.target.value);
                                }}
                                onFocus={() => {
                                setEmail("");
                            }}
                                onBlur={() => {
                                    setEmail("Your Email");
                                }}
                                type="email" placeholder={email} required />
                            <input
                                onChange={(e) => {
                                    setValidNumber(e.target.value);
                                }}
                                onFocus={() => {
                                setNumber("");
                            }}
                                onBlur={() => {
                                    setNumber("Your Phone")
                                }}
                                type="number" placeholder={number} required />
                        </div>
                        <textarea
                            onChange={(e) => {
                                setValidMessage(e.target.value);
                            }}
                            onFocus={() => {
                            setMessage("");
                        }}
                            onBlur={() => {
                                setMessage("Your Massage")
                            }}
                            placeholder={message} />
                        <button>Send Massage</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Contact;



