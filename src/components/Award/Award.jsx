import React from 'react'
import "./Award.css"
import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Award() {
    useEffect(() =>{
        Aos.init({duration:1000});
    }, []) 
  return (
    <div className='award'>
        <h3 data-aos="zoom-in">Awards Won</h3>
        <div className="award__images">
            <img data-aos="zoom-in" src="https://skyroot.in/images/industry-award.jpeg" alt="" />
            <img data-aos="zoom-in" src="https://skyroot.in/images/skyroot-cer.jpeg" alt="" />
            <img data-aos="zoom-in" src="https://skyroot.in/images/tech30.jpeg" alt="" />
            <img data-aos="zoom-in" src="https://skyroot.in/images/aegis-awrd.jpeg" alt="" />
            <img data-aos="zoom-in" src="https://skyroot.in/images/national-startup-award.jpeg" alt="" />
            <img data-aos="zoom-in" src="https://skyroot.in/images/top-startuos.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Award