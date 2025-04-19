import { Link } from "react-router-dom";
import "../css/checkout.css";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import imgBay1 from "../images/Bkash.svg";
import imgBay2 from "../images/Visa.svg";
import imgBay3 from "../images/Mastercard.svg";
import imgBay4 from "../images/Nagad.svg";
import Footer from "./Footer";
import { useSelector } from "react-redux";
function Checkout(){
    const state = useSelector(state => state.cart);
    console.log( state);

    const totalPrice = state.reduce((total,product) => {
        return total + product.newprice * product.quantity;
    },0)

    //console.log( totalPrice);

    const [clickIcon,setClickIcon] = useState(false);
    const [firstName,setFirstName] = useState("");
    const [companyName,setCompanyName] = useState("");
    const [address,setAddress] = useState("");
    const [Apartament,setApartament] = useState("");
    const [City,setCity] = useState("");
    const [phone,setPhone] = useState("");
    const [Email,setEmail] = useState("");

    const submitInformation = () => {
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("companyName", companyName);
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("Apartament", Apartament);
        sessionStorage.setItem("City", City);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("Email", Email)
    }

    const [apperCheck,setApperCheck] = useState(false);

    return(
        <div className="Checkout-Departament">
            <div className="container">
                <div className="heading-checkout">
                    <Link to={"/MyAccount"}>Account</Link>
                    <span>/</span>
                    <Link to={"/MyAccount"}>My Account</Link>
                    <span>/</span>
                    <Link to={"/Home"}>Product</Link>
                    <span>/</span>
                    <Link to={"/Cart"}>View Cart</Link>
                    <span>/</span>
                    <Link to={"/Checkout"}>CheckOut</Link>
                </div>
                <h1>Billing Details</h1>
                <div className="Checkout-Content">
                    <div className="all-Inputs">
                        <div className="col-input">
                            <div>
                                <label>First Name</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setFirstName(e.target.value);
                            }} type="text" required/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Company Name</label>
                            </div>
                            <input onChange={(e) => {
                                setCompanyName(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Street Address</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setAddress(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Apartment, floor, etc. (optional)</label>
                            </div>
                            <input onChange={(e) => {
                                setApartament(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Town/City</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setCity(e.target.value)
                            }} type="text"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Phone Number</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setPhone(e.target.value)
                            }} type="number"/>
                        </div>
                        <div className="col-input">
                            <div>
                                <label>Email Address</label>
                                <FontAwesomeIcon className="icon" icon={faStar}/>
                            </div>
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email"/>
                        </div>
                        <div className="col-text">
                            <div className= {`checkbox ${clickIcon ? "background": ""}`}  onClick={() => {
                                setClickIcon(!clickIcon)
                            }}>
                                <FontAwesomeIcon className={`icon ${clickIcon ? "color" : ""}`} icon={faCheck}/>
                            </div>
                            <p>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                    <div className="content-checkout">
                        {state.map((product,index) => {
                            return(
                                <div className="content-product" key={product.id}>
                                    <div>
                                        <img src={product.img} alt="img-product"/>
                                        <h3>{product.title.slice(0,13)}</h3>
                                    </div>
                                     <p>{`$${product.newprice}`}</p>
                                </div>
                            )
                        })}
                        <div className="all-Col-Total">
                            <div className="col-Subtotal">
                                <h3>Subtotal:</h3>
                                <p>{`$${totalPrice}`}</p>
                            </div>
                            <div className="col-Shipping">
                                <h3>Shipping:</h3>
                                <p>Free</p>
                            </div>
                            <div className="col-Total">
                                <h3>Total:</h3>
                                <p>{`$${totalPrice}`}</p>
                            </div>
                        </div>
                        <div className="Payment-Col">
                            <div className="bank-col">
                                <div className="col-bank">
                                    <div className="col-check" onClick={() => {
                                        setApperCheck(!apperCheck)
                                    }}>
                                        <li className={`${apperCheck ? "appear" : ""}`}></li>
                                    </div>
                                    <p>Bank</p>
                                </div>
                                <div className="col-delivery">
                                    <div className="col-check" onClick={() => {
                                        setApperCheck(!apperCheck)
                                    }}>
                                        <li className={`${apperCheck ? "none" : ""}`}></li>
                                    </div>
                                    <p>Cash on delivery</p>
                                </div>
                            </div>
                            <div className="all-Images">
                                <img src={imgBay1} alt="Bay1"/>
                                <img src={imgBay2} alt="Bay2"/>
                                <img src={imgBay3} alt="Bay3"/>
                                <img src={imgBay4} alt="Bay4"/>
                            </div>
                        </div>
                        <div className="col-Buttons">
                            <button>Coupon Code</button>
                            <button>Apply Coupon</button>
                        </div>
                        <button className="Place-Order" onClick={submitInformation}>Place Order</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Checkout;