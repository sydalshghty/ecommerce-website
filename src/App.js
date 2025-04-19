import Header from "./components/header";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MyAccount from "./components/MyAccount";
import Cart from "./components/Cart";
import Checkout from "./components/checkout";
import WishList from "./components/wishList";
function App() {
  return (
    <>
    <div className="header-NavBar-Departament">
        <Header />
      </div>
        <Navbar  />
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/MyAccount" element={<MyAccount/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/ShopNow" element={<WishList/>}/>
      </Routes>
    </>
  )
}

export default App;
