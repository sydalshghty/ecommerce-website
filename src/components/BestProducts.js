import { useEffect, useState } from "react";
import "../css/BestProducts.css";
import ColProps from "./ColProps";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import { IncreamentHeart } from "../store/reducer";
import { useDispatch,useSelector } from "react-redux";
import { getAllBestProducts } from "../store/BestProducts";
import Loading from "./loading";
import { addTocart } from "../store/cartReducer";
import { useNavigate } from "react-router-dom";
function BestProducts() {
    const navigate = useNavigate("");
    const handleNavigate = () => {
        navigate("/ShopNow");
    }
    const dispatch = useDispatch();
    const state = useSelector(state => state.bestProducts?.Products || []);

    useEffect(() => {
        dispatch(getAllBestProducts());
    }, [dispatch]); 

    const handleAddToCart = () => {
        alert("The product has been added to the cart!");
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
        <div className="best-Products">
            <div className="container">
                <div className="col-props">
                    <ColProps title="This Month"/>
                </div>
                <div className="heading-Best-Products">
                    <h3>Best Selling Products</h3>
                    <button onClick={handleNavigate}>View All</button>
                </div>
                {state.length === 0 ?
                <Loading/> :
                <div className="Products-Departament">
                    <Slider {...settings}>
                    {state.map((product, index) => {
                        return (
                            <div className="product-content" key={product.id}>
                                <div className="col-image">
                                    <div className="content-img">
                                        <img src={product.img} alt="img-product" />
                                    </div>
                                    <div className="Heart-Eye-Col" style={{cursor: "pointer"}}>
                                        <div>
                                            <FontAwesomeIcon onClick={() => {
                                                dispatch(IncreamentHeart(1))
                                            }} className="icon" icon={faHeart} />
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className="icon" icon={faEye}/>
                                        </div>
                                    </div>
                                    <p className="add-To-Cart" onClick={() => {
                                        dispatch(addTocart(product));
                                        handleAddToCart();
                                    }}>Add To Cart</p>
                                </div>
                                <div className="text-Content-Product">
                                    <h4 className="title-product">{product.title}</h4>
                                    <div className="col-price">
                                        <span className="new-price">${product.newprice}</span>
                                        <del className="old-price">${product.oldPrice}</del>
                                    </div>
                                    <div className="col-Stars">
                                        <div className="all-stars">
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                        </div>
                                        <span className="number-Star">({product.numberStar})</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
                }
            </div>
        </div>
    )
}
export default BestProducts;