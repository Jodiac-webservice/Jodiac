import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Accounts from './Pages/Accounts';
import SignIn from './Pages/Signin';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import Checkout from './Pages/Cheakout';
import Payment from './Components/Payment';
import Review from './Components/review';
import AdminPanel from './Pages/AdminPanel';
import Orders from './Pages/orders';
import ShippingPolicy from './Pages/Shipping';
import PrivacyPolicy from './Pages/Privacy';
import Terms from './Pages/Terms';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import RefundPolicy from './Pages/Refund';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/signup' element={<Accounts/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Productpage/:id' element={<ProductPage/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/AdminPanel' element={<AdminPanel/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/ShippingPolicy' element={<ShippingPolicy/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/Terms' element={<Terms/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
