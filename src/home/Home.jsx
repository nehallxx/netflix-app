import "./home.scss"
import React from 'react'
import Navbar from "../components/navbar/Navbar"
import vrImage from '../assets/virtual-reality.jpg';
import Featured from "../components/featured/Featured";
import List from "../components/list/List";

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured/>
      <List/>
    </div>
  )
}

export default Home

