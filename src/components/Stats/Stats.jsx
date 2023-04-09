import React from 'react'
import "./Stats.css"
import  { useState ,useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';


function Stats() {
    useEffect(() =>{
        Aos.init({duration:1000});
    }, [])
  return (
    <div className='stats'>
        <div className="stats__heading" data-aos="slide-up">
            <h1>STATS</h1>
        </div>
        <div className="stats__content">
            <div className="stats__sub" data-aos="zoom-in">
                <h3 className="head">Funding</h3>
                <h1>68MN</h1>
            </div>
            <div className="stats__sub" data-aos="zoom-in">
                <h3 className="head">Founded in</h3>
                <h1>2018</h1>
            </div><div className="stats__sub" data-aos="zoom-in">
                <h3 className="head">Team Size</h3>
                <h1>200+</h1>
            </div><div className="stats__sub" data-aos="zoom-in">
                <h3 className="head">Cummulative Experience in rocket industry</h3>
                <h1>1000YRS+</h1>
            </div>
        </div>
    </div>
  )
}

export default Stats