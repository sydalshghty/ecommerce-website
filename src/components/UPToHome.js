import UPTOHomeImg from "../images/Fill with Up Arrow.png"; 
import "../css/UPTOHome.css";
import { animateScroll as Scroll } from "react-scroll";
function UPTOHome() {
    const goToUpHome = () => {
        Scroll.scrollToTop({
            duration: 1000, 
            smooth: true,
        })
    }
    return (
        <div className="up-To-Home">
            <div className="container">
                <img onClick={goToUpHome}  src={UPTOHomeImg} alt="img-UpToHome"/>
            </div>
        </div>
    )
}
export default UPTOHome;