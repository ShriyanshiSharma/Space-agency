import React from 'react'
import "./Card.css"
import  { useState ,useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { Link } from 'react-router-dom';

function Card(props) {
  useEffect(() =>{
    Aos.init({duration:1000});
}, [])

  return (
    <div className='card' data-aos="flip-left">
        <img src={props.channel} alt=""  className='channel'/>
        <img src={props.img} alt="img"  className='card__image' />
        <div className="card__content" data-aos="zoom-out">
            <p>{props.des}</p>
            <Link to="/">
                <button>{props.button}</button>
            </Link>
        </div>
    </div>
  )
}

export default Card;