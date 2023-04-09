import React from 'react'
import "./Sponcer.css"
import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Sponcer() {
    useEffect(() =>{
        Aos.init({duration:1000});
    }, []) 
  return (
    <div className='sponcer'>
        <h3 data-aos="zoom-in">Investors</h3>
        <div className="sponser__img">
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/GIC.png" alt="sponcer" />
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/merakilabs.png" alt="sponcer" />
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/founders.png" alt="sponcer" />
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/solar.png" alt="sponcer" />
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/sherpalo.jpeg" alt="sponcer" />
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/worldquant-ventures.png" alt="sponcer" />
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/aum1.png" alt="sponcer" />
            <img data-aos="flip-down" className='images' src="https://skyroot.in/images/graph-vntures.png" alt="sponcer" />
        </div>
    </div>
  )
}

export default Sponcer