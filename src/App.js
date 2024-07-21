import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './Component/User/Signin/Signin';
import Signup from './Component/User/Signup/Signup';
import Forget from './Component/User/Forget';
import Reset from './Component/User/Reset';
import Home from './Component/Home';
import Cart from './Component/Cart';
import Product from './Component/Product';
import Profile from './Component/Profile';
import Category from './Component/Category';
import Search from './Component/Search';


function App() {
  return (
    <div className="App">
    <Routes>
   <Route exact path='/' element={<Signin/>}/> 

   <Route path='/signup' element={<Signup/>}/>

   <Route path='/forget' element={<Forget/>}/>

   <Route path='/reset' element={<Reset/>}/>

   <Route path='/home/:token' element={<Home/>}/>

   <Route path='/cart/:token' element={<Cart/>}/>

   <Route path='/product/:id/:token' element={<Product/>}/>

   <Route path='/profile/:token' element={<Profile/>}/>

   <Route path='/category/:token' element={<Category/>}/>

   <Route path='/search/:name' element={<Search/>}/>

   
    </Routes>
     
    </div>
  );
}

export default App;
