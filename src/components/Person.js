import iconTwitter from "../images/Icon-Twitter (1).png";
import iconInstagram from "../images/icon-instagram.svg";
import iconLinkedin from "../images/Icon-Linkedin.svg";
import person1 from "../images/Frame 874.png";
import person2 from "../images/Frame 875.png";
import person3 from "../images/Frame 876.png";
import "../css/person.css";
import Slider from "react-slick";
function Person() {
    const  settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
      responsive: [
      {
        breakpoint: 1320, 
        settings: {
          slidesToShow: 3,
        },
        },
        {
          breakpoint: 1150,
          settings: {
              slidesToShow: 2
            },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
    };
    return (
        <div className="Person-Departament">
            <Slider {...settings}>
            <div className="person-Col">
                <div className="col-image">
                    <img src={person1} alt="" />
                </div>
                <div className="col-content">
                    <h2>Tom Cruise</h2>
                    <p>Founder & Chairman</p>
                    <div className="col-Social">
                        <img src={iconTwitter} alt="Twitter" />
                        <img src={iconInstagram} alt="Instagram" />
                        <img src={iconLinkedin} alt="Linkedin"/>
                    </div>
                </div>
                
            </div>
            <div className="person-Col">
                <div className="col-image">
                    <img src={person2} alt="" />
                </div>
                <div className="col-content">
                    <h2>Emma Watson</h2>
                    <p>Managing Director</p>
                    <div className="col-Social">
                        <img src={iconTwitter} alt="Twitter" />
                        <img src={iconInstagram} alt="Instagram" />
                        <img src={iconLinkedin} alt="Linkedin"/>
                    </div>
                </div>
                
            </div>
            <div className="person-Col">
                <div className="col-image">
                    <img src={person3} alt="" />
                </div>
                <div className="col-content">
                    <h2>Will Smith</h2>
                    <p>Product Designer</p>
                    <div className="col-Social">
                        <img src={iconTwitter} alt="Twitter" />
                        <img src={iconInstagram} alt="Instagram" />
                        <img src={iconLinkedin} alt="Linkedin"/>
                    </div>
                </div>
                
            </div>
            </Slider>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
export default Person;