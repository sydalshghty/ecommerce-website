import "../css/FreeAndFast.css";
import imgService1 from "../images/Services.png";
import imgService2 from "../images/Services (1).png";
import imgService3 from "../images/Services (2).png";

function FreeAndFastDelivery() {
    return (
        <div className="FreeAndFast-Delivery">
            <div className="container">
                <div className="service-Col">
                    <img src={imgService1} alt="img-service" />
                    <h3>FREE AND FAST DELIVERY</h3>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="service-Col">
                    <img src={imgService2} alt="img-service" />
                    <h3>24/7 CUSTOMER SERVICE</h3>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="service-Col">
                    <img src={imgService3} alt="img-service" />
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    )
}
export default FreeAndFastDelivery;