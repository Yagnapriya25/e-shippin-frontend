import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./Component/User/Signin/Signin";
import Signup from "./Component/User/Signup/Signup";
import Forget from "./Component/User/Forget";
import Reset from "./Component/User/Reset";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import Profile from "./Component/Profile";
import Category from "./Component/CategoryEntry";
import Search from "./Component/Search";
import ProfileEdit from "./Component/ProfileEdit";
import AddressEdit from "./Component/AddressEdit";
import AddProductEntry from "./Component/AddProductEntry";
import AddProduct from "./Component/AddProduct";
import Buy from "./Component/Buy";
import categoryProduct from "./Component/CategoryProduct";
import CategoryProduct from "./Component/CategoryProduct";
import UserProducts from "./Component/UserProducts";
import UserProductView from "./Component/UserProductView";
import EditProduct from "./Component/EditProduct";
import AddAddress from "./Component/AddAddress";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forget" element={<Forget />} />

        <Route path="/reset/:id/:token" element={<Reset />} />

        <Route path="/home/:token" element={<Home />} />

        <Route path="/cart/:token" element={<Cart />} />

        <Route path="/product/:id/:token" element={<Product />} />

        <Route path="/profile/:token" element={<Profile />} />

        <Route path="/category/:token" element={<Category />} />

        <Route path="/search/:name" element={<Search />} />

        <Route path="/profile_edit/:token" element={<ProfileEdit />} />

        <Route path="/address_edit/:token" element={<AddressEdit />} />

        <Route path="/add_product_entry/:token" element={<AddProductEntry />} />

        <Route path="/add-product/:cat_id" element={<AddProduct />} />

        <Route path="/categoryProduct/:cat_id" element={<CategoryProduct />} />

        <Route path="/buy/:id" element={<Buy />} />

        <Route path="/userProduct/:token" element={<UserProducts/>}/>

        <Route path="/userProductView/:p_id/:token" element={<UserProductView/>}/>

        <Route path="/editProduct/:p_id/:token" element={<EditProduct/>}/>

        <Route path="/addAddress/:token" element={<AddAddress/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
