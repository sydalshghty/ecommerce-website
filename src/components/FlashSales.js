
import imgLeft from "../images/Fill With Left Arrow.png";
import imgRight from "../images/Fill with Right Arrow.png";
import { useState, useEffect } from "react";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/flashSales.css";
import Slider from "react-slick";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import ColProps from "./ColProps";
import ViewAllProducts from "./ViewAllProducts";
import { useDispatch,useSelector } from "react-redux";
import { IncreamentHeart } from "../store/reducer";
import { getAllFlashSaeles } from "../store/FlashSalesReducer";
import Loading from "./loading";
import { addTocart } from "../store/cartReducer";
import { useNavigate } from "react-router-dom";
function FlashSales() {
  const navigate = useNavigate("");
  const handleNavigate = () => {
    navigate("/ShopNow");
  }
  const dispatch = useDispatch();
  const stateFlashSales = useSelector(state => state.flasSales || []);
  const [flashSales,setFlashSales] = useState([]);
  const handleFlashSales = () => {
    setFlashSales(stateFlashSales.FlashSales || []);
  }
  useEffect(() => {
    dispatch(getAllFlashSaeles());
  },[dispatch]);

  useEffect(() => {
    handleFlashSales();
  },[stateFlashSales]);

  const alertProduct = () => {
    alert("The product has been added to the cart!")
  }
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
        breakpoint: 1350, 
        settings: {
          slidesToShow: 3,
        },
        },
        {
          breakpoint: 1100,
          settings: {
              slidesToShow: 2
            },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    const [sliderRef, setSliderRef] = useState(null);

    const goToPrev = () => {
    if (sliderRef) {
      sliderRef.slickPrev(); 
    }
  };

  const goToNext = () => {
    if (sliderRef) {
      sliderRef.slickNext();
    }
  };
  return (
        <div className="flashSales-Departament">
            <div className="container">
                <ColProps title= "Today’s"/>
                <div className="flashSales-col">
                    <h3>Flash Sales</h3>
                    <div className="left-right-col">
                        <img onClick={goToPrev}  className="img-left" src={imgLeft} alt="img-left" />
                        <img onClick={goToNext} className="img-right" src={imgRight} alt="img-right" />
                    </div>
                </div>
                {flashSales.length === 0 ?
                <Loading/> :
                <div className="flashSales-Products">
                    <Slider ref={setSliderRef} {...settings}>
                    {flashSales.map((product, index) => {
                        return (
                            <div className="col-product" key={product.id}>
                                <div className="col-img-product">
                                    <img className="main-img" src={product.img} alt="productImg" />
                                    <p className="product-star">{product.Star}</p>
                                    <div className="col-Heart-Eye">
                                    <div>
                                  <FontAwesomeIcon onClick={() => {
                                    dispatch(IncreamentHeart(1))
                                  }}  className="icon-Heart" icon={faHeart} />
                                    </div>
                                    <div>
                                      <FontAwesomeIcon className="icon-Eye" icon={faEye}/>
                                    </div>
                                    </div>
                                    <p className="Add-To-Cart" onClick={() => {
                                      dispatch(addTocart(product));
                                      alertProduct();
                                    }}>Add To Cart</p>
                                </div>
                                <div className="content-product-text">
                                    <h4>{product.title}</h4>
                                    <div className="col-price">
                                        <p>${product.newprice}</p>
                                        <del>${product.oldPrice}</del>
                                    </div>
                                    <div className="col-star">
                                        <div className="allIcon-Star">
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                        </div>
                                        <p>({product.numberStar})</p>
                                    </div>
                                </div>
                                </div>
                        )
                    })}
                    </Slider>
                </div>
                }
              <div className="col-button" onClick={handleNavigate}>
                  <ViewAllProducts/>
              </div>
            </div>
        </div>
    )
}
export default FlashSales;