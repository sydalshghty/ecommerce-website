import logoImg from "../images/Exclusive.svg";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";
import { useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";

function Navbar() {
    const cartLength = useSelector(state => state.cart.length);

    const state = useSelector(state => state.heart);

    const navigate = useNavigate("");
    
    const handleNavigate = () => {
        navigate("/MyAccount");
    }

    const handleNavigateCart = () => {
        navigate("/Cart");
    }

    const [search, setSearch] = useState("What are you looking for?");

    const [bars, setBars] = useState(true);

    const [display, setDisplay] = useState(false);

    return (
        <nav>
            <div className="container">
                <img src={logoImg} alt="Exclusive" />
                <ul>
                    <li>
                        <Link to={"Home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"Contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"About"}>About</Link>
                    </li>
                    <li>
                        <Link to={"SignUp"}>SignUp</Link>
                    </li>
                </ul>
                <div className="col-input-search">
                    <input onFocus={() => {
                        setSearch("")
                    }}
                        onBlur={() => {
                        setSearch("What are you looking for?")
                    }}
                     type="text" placeholder={search} />
                    <FontAwesomeIcon className="icon-search" icon={faSearch}/>
                </div>
                <div className="all-icons">
                    <FontAwesomeIcon onClick={handleNavigate} className="icon-User" icon={faUser} />
                    <div>
                        <FontAwesomeIcon className="icon-Heart" icon={faHeart} />
                        <p>{state}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="icon-Shop" onClick={handleNavigateCart} icon={faCartShopping} />
                        <p>{cartLength}</p>
                    </div>
                    <div>
                        {bars ? 
                            <FontAwesomeIcon onClick={() => {
                                setBars(false);
                                setDisplay(true);
                            }} className="icon-Bars" icon={faBars} />
                            : 
                            <FontAwesomeIcon onClick={() => {
                                setBars(true);
                                setDisplay(false);
                            }} className="icon-Mark" icon={faXmark}/>}
                    </div>
                </div>
            </div>
            <div className={`content-links ${display ? "margin" : ""}`}>
                <div className={`ul-contain-mobile ${display ? "appearLink" : ""}`}>
                    <ul>
                        <li>
                            <Link to={"Home"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"Contact"}>Contact</Link>
                        </li>
                        <li>
                            <Link to={"About"}>About</Link>
                        </li>
                        <li>
                            <Link to={"SignUp"}>SignUp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;