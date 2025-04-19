import "@fortawesome/react-fontawesome"; 
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/header.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <div className="container">
                <div className="summer-col">
                    <div className="col-text">
                        <p>Summer Sale For All Swim Suits And Free Express</p>
                        <p>- OFF 50%!</p>
                    </div>
                    <Link to={"/ShopNow"}>ShopNow</Link>
                </div>
                <div className="English-col">
                    <p>English</p>
                    <FontAwesomeIcon className="icon-Down" icon={faChevronDown}/>
                </div>
            </div>
        </header>
    )
}
export default Header;