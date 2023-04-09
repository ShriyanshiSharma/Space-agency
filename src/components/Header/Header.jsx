import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/">
            <img  src={logo}className="header__logo" />
        </Link>
        <ul className='header__content'>

            <Link to="/about" style={{textDecoration:"none" , color:"white"}}>
                <li className="header__list">
                    ABOUT
                </li>
            </Link>

            <Link to="/services" style={{textDecoration:"none" , color:"white"}}>
                <li className="header__list">
                    LAUNCH SERVICES
                </li>
            </Link>

            <Link to="/news" style={{textDecoration:"none" , color:"white"}}>
                <li className="header__list">
                    NEWS ROOM
                </li>
            </Link>

            <Link to="/career" style={{textDecoration:"none" , color:"white"}}>
                <li className="header__list">
                    CAREER
                </li>
            </Link>

            <Link to="/login" style={{textDecoration:"none" , color:"white"}}>
                <li className="launch-button">
                    LAUNCH WITH US
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default Header