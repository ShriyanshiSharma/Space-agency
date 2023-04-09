import React from 'react'
import "./MileStone.css"
import img1 from "../../assets/cryo-firing.jpeg"



function MileStone() {
  return (
    <div className='milestone'>
        <div className="milestone__content" data-aos="zoom-out">
            <div className="milestone__left">
                <img src={img1}/>
            </div>
            <div className="milestone__right">
                <p className="milestone__header">MILESTONE</p>
                <h3>India’s first private cryogenic engine test fired by Skyroot</h3>
                <p className='milestone__data'>In just over a year since they completed facbrication of a prototype engine, Sykroot Aerospace, a frim founded and led by former Isro scientist has successfully tested Indai's first privately developed fully</p>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default MileStone