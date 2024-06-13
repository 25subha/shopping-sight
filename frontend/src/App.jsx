import "./styles/navber.css";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CreatProduct from "./pages/CreatProduct";
import CreatProfile from "./pages/CreatProfile";
import { Route,Routes } from "react-router-dom";
import Carousel from "./pages/Carousel";
// import Login from "./pages/Login";


function App() { 
   return (
   <div className="">
      <Navber/>
    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/creatproduct" element={<CreatProduct />}/>
          <Route path="/creatprofile" element={<CreatProfile />}/>
          <Route path="/carousel" element={<Carousel />}/>
          {/* <Route path="/login" element={<Login />}/> */}


        </Routes>
  
      <Footer/>
   </div>
  )
}

export default App;
