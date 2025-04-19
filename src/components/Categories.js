import imgCategories from "../images/Frame 600.png";
import "../css/Categories.css";
import { useNavigate } from "react-router-dom";
function Categories() {
    const navigate = useNavigate("");
    const handleNavigate = () => {
        navigate("/ShopNow")
    }

    return (
        <div className="Categories-departament">
            <div className="container">
                <img className="main-img" src={imgCategories} alt="img-categories" />
                <div className="content-categories">
                    <h4 className="title">Categories</h4>
                    <h2>Enhance Your Music Experience</h2>
                    <div className="col-Days">
                        <div className="col">
                            <p className="p-number">23</p>
                            <p className="p-content">Hours</p>
                        </div>
                        <div className="col">
                            <p className="p-number">05</p>
                            <p className="p-content">Days</p>
                        </div>
                        <div className="col">
                            <p className="p-number">59</p>
                            <p className="p-content">Minutes</p>
                        </div>
                        <div className="col">
                            <p className="p-number">35</p>
                            <p className="p-content">Seconds</p>
                        </div>
                    </div>
                    <button onClick={handleNavigate}>Buy Now!</button>
                </div>
            </div>
        </div>
    )
}
export default Categories;