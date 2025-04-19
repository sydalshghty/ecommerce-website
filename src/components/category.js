import "../css/category.css";
import ColProps from "./ColProps";
import leftArrow from "../images/Fill With Left Arrow.png";
import rightArrow from "../images/Fill with Right Arrow.png";
import imgPhone from "../images/Category-CellPhone.png";
import imgComputer from "../images/Category-Computer.png";
import imgSmartWatch from "../images/Category-SmartWatch.png";
import imgCamera from "../images/Category-Camera (1).png";
import imgHeadPhone from "../images/Category-Headphone.png";
import imgGame from "../images/Category-Gamepad.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
function Category() {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [slider, setSlider] = useState(null);

    const goToPrev = () => {
        if (slider) {
            slider.slickPrev();
        }
    }

    const goToNext = () => {
        if (slider) {
            slider.slickNext();
        }
    }
    return (
        <div className="category-Departament">
            <div className="container">
                <ColProps title="Categories" />
                <div className="heading-Categories">
                    <h3>Browse By Category</h3>
                    <div className="Col-Left-Right">
                        <img onClick={() => {
                            goToPrev();
                        }} src={leftArrow} alt="leftArrow" />
                        <img onClick={() => {
                            goToNext();
                        }} src={rightArrow} alt="rightArrow" />
                    </div>
                </div>
                <div className="Categories-Content" style={{overflow: "hidden"}}>
                    <Slider {...settings} ref={setSlider}>
                        <div className="col-category">
                            <div>
                                <img src={imgPhone} alt="img-phones" />
                                <p>Phones</p>
                            </div>
                        </div>
                        <div className="col-category">
                            <div>
                                <img src={imgComputer} alt="img-Computers" />
                                <p>Computers</p>
                            </div>
                        </div>
                        <div className="col-category">
                            <div>
                                <img src={imgSmartWatch} alt="img-SmartWatch" />
                                <p>SmartWatch</p>
                            </div>
                        </div>
                        <div className="col-category">
                            <div>
                                <img src={imgCamera} alt="img-Camera" />
                                <p>Camera</p>
                            </div>
                        </div>
                        <div className="col-category">
                            <div>
                                <img src={imgHeadPhone} alt="img-HeadPhones" />
                                <p>HeadPhones</p>
                            </div>
                        </div>
                        <div className="col-category">
                            <div>
                                <img src={imgGame} alt="img-Gaming" />
                                <p>Gaming</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Category;