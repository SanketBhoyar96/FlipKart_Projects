
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from "./Componant/Cart";
import Footer from "./Componant/Footer";
import Home from "./Componant/Home";
import Login from "./Componant/Login";
import Products from "./Componant/Products";
import Register from "./Componant/Register";
import Wishlist from "./Componant/Wishlist";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path="/register" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/products" element={<Products/>}/>
     <Route path="/cart" element={<Cart/>} />
     <Route path="/wishlist" element={<Wishlist/>}/>
     <Route path="/footer" element={<Footer/>}/>
    </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
