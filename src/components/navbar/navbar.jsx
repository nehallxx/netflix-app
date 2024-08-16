import "./navbar.scss"
import React, { useEffect } from 'react'
import {Search,Notifications,AccountCircle,ExpandMore} from "@mui/icons-material"
import vrImage from '../../assets/virtual-reality.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"alt=""/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New</span>
          <span>My List</span>

            </div>
            <div className="right">
            <Search className="icon"/>
            <Notifications className="icon"/>
            <img src={vrImage} />
            <div className="profile">
            <ExpandMore className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>

                </div>
            

            </div>
            
            
            </div>
        </div>
    </div>
  )
}

export default Navbar
