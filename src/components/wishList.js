import "../css/wishList.css";
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getAllWishList } from "../store/wishListReducer";
import imgDelete from "../images/Vector (10).svg";
import imgCart from "../images/Cart1.png";
import Slider from "react-slick";
import "../css/ColProps.css";
import imgEye from "../images/Group (1).svg";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { addTocart } from "../store/cartReducer";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";

function WishList(){
    const navigate = useNavigate("");

    const handleNavigate = () => {
        navigate("/Cart")
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
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWishList())
    },[dispatch]);

    const state = useSelector(state => state.items.WishList1 || []);
    const [Products1,setProducts1] = useState([]);
    const handleProducts1 = () => {
        setProducts1(state);
    }

    useEffect(() => {
        handleProducts1()
    },[state]);

    const [Products2,setProducts2] = useState([]);
    const state2 = useSelector(state => state.items.WishList2 || []);
    const handleProducts2 = () => {
        setProducts2(state2);
    }

    useEffect(() => {
        handleProducts2();
    },[state2])
    
    return(
        <div className="wishList-Departament">
            <div className="container">
                <div className="heading-wishlist">
                    <h3>Wishlist (4)</h3>
                    <button>Move All To Bag</button>
                </div>
                {state.length === 0 ? 
                    <Loading/>:
                    <div className="WishList-Products1">
                    <Slider {...settings}>
                    {Products1.map((product,index) => {
                        return(
                            <div className="col-product" key={product.id}>
                                <div className="col-image">
                                    <div className="div-img">
                                        <img className="img-product" src={product.img} alt="img-product"/>
                                    </div>
                                    <div className="col-star">
                                        <p className="num-star">{product.Star}</p>
                                        <div>
                                            <img src={imgDelete} alt="img-delete"/>
                                        </div>
                                    </div>
                                    <div className="col-addTocart" style={{backgroundColor: "black"}}
                                    onClick={() => {
                                        dispatch(addTocart(product));
                                        handleNavigate()
                                    }}>
                                        <img src={imgCart} alt="img-Cart"/>
                                        <p>Add To Cart</p>
                                    </div>
                                </div>
                                <div className="content-Product">
                                    <h2 className="title-product">{product.title}</h2>
                                    <div className="col-price">
                                        <p className="newPrice">{`$${product.newprice}`}</p>
                                        <p className="deletePrice">{`$${product.oldprice}`}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
                    </div>
                }
                <div className="wishlist-heading-2">
                    <div className="col-Props">
                        <span></span>
                        <p style={{color: "#000000"}}>Just For You</p>
                    </div>
                        <button>See All</button>
                </div>
                {state2.length === 0 ? 
                    <Loading/> : 
                    <div className="wishlist-Product2">
                    <Slider {...settings}>
                    {Products2.map((product,index) => {
                        return(
                            <div className="col-product" key={product.id}>
                                <div className="col-image">
                                    <div className="img-product">
                                        <img src={product.img} alt="img-product"/>
                                    </div>
                                    <div className="col-star">
                                        <div>
                                            <p>{product.Star}</p>
                                        </div>
                                        <div className="col-Eye">
                                            <img src={imgEye} alt="img-Eye"/>
                                        </div>
                                    </div>
                                    <div className="col-add-To-Cart"
                                    onClick={() => {
                                        dispatch(addTocart(product));
                                        handleNavigate()
                                    }}>
                                        <img src={imgCart} alt="img-cart"/>
                                        <p>Add To Cart</p>
                                    </div>
                                </div>
                                <div className="content-product">
                                    <h3>{product.title}</h3>
                                    <div className="col-price">
                                        <p className="new-price">{`$${product.newprice}`}</p>
                                        <p className="old-price">{`$${product.oldprice}`}</p>
                                    </div>
                                    <div className="col-star">
                                        <div className="all-stars">
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                            <FontAwesomeIcon className="icon" icon={faStar}/>
                                        </div>
                                        <p>(65)</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
                    </div>
                }
            </div>
            <Footer/>
        </div>
    )
}
export default WishList;