import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Accounts from './Pages/Accounts';
import SignIn from './Pages/Signin';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/signup' element={<Accounts/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Productpage' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
