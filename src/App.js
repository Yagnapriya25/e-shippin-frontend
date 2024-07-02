import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './Component/User/Signin/Signin';
import Signup from './Component/User/Signup/Signup';
import Forget from './Component/User/Forget/Forget';
import Reset from './Component/User/Reset/Reset';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart';
import Product from './Component/Product/Product';
import Profile from './Component/Profile/Profile';
import Category from './Component/Category/Category';

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
    </Routes>
     
    </div>
  );
}

export default App;
