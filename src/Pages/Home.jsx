import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImage from '../Components/HeroImage';
import NewArrival from '../Components/NewArrival';
import JodiacShowcase from '../Components/jodiac';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <NewArrival/>
      <div id="jodiac-showcase">
        <JodiacShowcase/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;