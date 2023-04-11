import React,{useState} from 'react'
import "./Header.css"
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'
import menuu from "../../assets/menu.svg"
import x from "../../assets/x.svg"


function Header() {
    const [show ,setShow] = useState(1)
    const [menu,setMenu] = useState(1)
  return (
    <div className='header'>
        <Link to="/Space-agency">
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
        <div className="menu">
            {menu ?  <img src={x} alt="close" onClick={(e) => {setMenu(0)}}/>:<img src={menuu} alt="menu"  onClick={(e) => {setMenu(1)} }  /> }
        </div>
        {menu ?(show?
        <div className="side__menu">
            <ul>
            <Link to="/about" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list">
                    ABOUT
                </li>
            </Link>

            <Link to="/services" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list">
                    LAUNCH SERVICES
                </li>
            </Link>

            <Link to="/news" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list">
                    NEWS ROOM
                </li>
            </Link>

            <Link to="/career" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__list">
                    CAREER
                </li>
            </Link>

            <Link to="/login" style={{textDecoration:"none" , color:"white"}}>
                <li className="side__launch">
                    LAUNCH WITH US
                </li>
            </Link>
            </ul>
        </div>:<></>):<></>}
    </div>
  )
}

export default Header