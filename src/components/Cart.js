import "../css/cart.css";
import iconCancel from "../images/icon-cancel.svg";
import dropUp from "../images/Drop-Up-Small.svg";
import dropDown from "../images/Drop-Down-Small.svg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deletefromCart } from "../store/cartReducer";
import { useDispatch } from "react-redux";
import { increasequantity,decreasequantity } from "../store/cartReducer";

function Cart(){
    const dispatch = useDispatch();

    const state = useSelector(state => state.cart);
    console.log(state);

    const navigate = useNavigate("");

    const handleNavigate = () => {
        navigate("/Checkout");
    }

    const handleNavigateShop = () => {
        navigate("/ShopNow");
    }

    const handleNavigateHome = () => {
        navigate("/Home");
    }

    const handleNavigateCart = () => {
        navigate("/Cart");
    }
    const totalProduct = state.reduce((total,product) => {
        return total + product.newprice * product.quantity;
    },0);

    console.log(totalProduct)
    
    return(
        <div className="Cart-Departament">
            <div className="container">
                <div className="heading-cart">
                    <p onClick={handleNavigateHome} style={{cursor: "pointer"}}>Home</p>
                    <span>/</span>
                    <p onClick={handleNavigateCart} style={{cursor: "pointer"}}>Cart</p>
                </div>
                <div className="heading-Product">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className="Col-Products">
                    {state.map((product,index) => {
                        return(
                            <div className="product-content" key={product.id}>
                                <div className="P-Content">
                                    <div className="col-image">
                                        <img onClick={() => {
                                            dispatch(deletefromCart(product))
                                        }} className="icon-cancel" src={iconCancel} alt="delete-icon"/>
                                        <img className="img-product" src={product.img} alt="img-product"/>
                                    </div>
                                    <p className="title-product">{product.title}</p>
                                </div>
                                <div className="col-price">
                                    <p>{`$${product.newprice}`}</p>
                                </div>
                                <div className="quantity">
                                <div className="col-quantity">
                                    <p>{`0${product.quantity}`}</p>
                                    <div className="buttons">
                                        <img onClick={() => {
                                            dispatch(increasequantity(product))
                                        }} src={dropUp} alt="drop-up"/>
                                        <img onClick={() => {
                                            dispatch(decreasequantity(product))
                                        }} src={dropDown} alt="drop-down"/>
                                    </div>
                                </div>
                                </div>
                                <div className="col-Subtatol">
                                    <p>{`$${product.newprice * product.quantity}`}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-button-shop">
                    <button onClick={handleNavigateShop}>Return To Shop</button>
                    <button>Update Cart</button>
                </div>
                <div className="col-Coupon-Code">
                    <div className="col-buttons">
                        <button>Coupon Code</button>
                        <button>Apply Coupon</button>
                    </div>
                    <div className="col-Cart-Total">
                        <h3>Cart Total</h3>
                        <div className="Subtotal-Col">
                            <p>Subtotal:</p>
                            <p>{`$${totalProduct}`}</p>
                        </div>
                        <div className="Shipping-Col">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className="Total-Col">
                            <p>Total:</p>
                            <p>{`$${totalProduct}`}</p>
                        </div>
                        <div className="checkout-button">
                            <button onClick={handleNavigate}>Procees to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Cart;