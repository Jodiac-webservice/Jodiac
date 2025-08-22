import React from 'react'
import Addadress from '../Components/Addadress'
import Navbar from '../Components/Navbar'
import ExistingAddress from '../Components/ExistingAddress'
import Ordersummary from '../Components/Ordersummary'

const Checkout = () => {
  return (
    <div >
      <Navbar />
      <div className=" mt-24">
        <Addadress />
        <Ordersummary />
        <ExistingAddress />
      </div>
    </div>
  )
}

export default Checkout;