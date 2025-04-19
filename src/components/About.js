import SlideImg from "../images/Side Image (2).png";
import "../css/AboutUs.css";
import serviceImg1 from "../images/Services (3).png";
import serviceImg3 from "../images/Services (5).png";
import serviceImg4 from "../images/Services (6).png";
import Slider from "react-slick";
import Person from "./Person";
import FreeAndFastDelivery from "./FreeAndFast";
import Footeer from "./Footer";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate("");
  const handleNavigate = () => {
    navigate("/Home");
  };

  const navigateAbout = () => {
    navigate("/About");
  };

   const  settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500,
      responsive: [
      {
        breakpoint: 1320, 
        settings: {
          slidesToShow: 3,
        },
        },
        {
          breakpoint: 1050,
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
    <div className="About-Departament">
      <div className="container">
        <div className="heading-About">
          <p style={{cursor: "pointer"}} onClick={handleNavigate}>Home</p>
          <p>/</p>
          <p style={{cursor: "pointer"}} onClick={navigateAbout}>About</p>
        </div>
        <div className="our-Story">
          <div className="our-Story-Content">
            <h2>Our Story</h2>
            <p className="p-one">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
        </div>
        <div className="Sellers-Departament">
          <Slider {...settings}>
            <div className="col">
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                  <img src={serviceImg1} alt="img" />
                  <h3>10.5k</h3>
                  <p>Sallers active our site</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <img src={serviceImg4} alt="img" />
                  <h3>33k</h3>
                  <p>Mopnthly Produduct Sale</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <img src={serviceImg3} alt="img" />
                  <h3>45.5k</h3>
                  <p>Customer active in our site</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <img src={serviceImg4} alt="img" />
                  <h3>25k</h3>
                  <p>Anual gross sale in our site</p>
                </div>
              </div>
          </Slider>
        </div>
        <Person/>
        <FreeAndFastDelivery/>
      </div>
      <Footeer/>
    </div>
  )
}
export default About;
