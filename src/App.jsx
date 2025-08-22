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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
