import React, { useState ,useEffect} from 'react'
import "./Ship.css"
import ship from "../../assets/Vikram-S.png"

function Ship() {
  return (
    <div className="ship">
        <h1 data-aos="flip-up"> Affordable, On-demand and reliable ride to space.</h1>
        <div className="ship__content" data-aos="zoom-in" >
            <div className="ship__left" >
                <div className="ship__deta">
                    <h2 className="ship__heading" >Vikram S</h2>
                    <img/>
                </div>
                <hr/>
                <p className="ship_info">80 kg to 100 km Altitude</p>
                <div className="ship__deta">
                    <h2 className="ship__heading">Vikram I</h2>
                    <img/>
                </div>
                <hr/>
                {/* <p className="ship_info">80 kg to 100 km Altitude</p> */}
                <div className="ship__deta">
                    <h2 className="ship__heading">Vikram II</h2>
                    <img/>
                </div>
                <hr/>
                {/* <p className="ship_info">80 kg to 100 km Altitude</p> */}
                <div className="ship__deta">
                    <h2 className="ship__heading">Vikram III</h2>
                    <img/>
                </div>
                <hr/>
                {/* <p className="ship_info">80 kg to 100 km Altitude</p> */}
                <button>Read More</button>
            </div>
        </div>
        <div className="ship__right" data-aos="slide-right"  >
                <img src={ship} height="350px"/>
        </div>
    </div>
  )
}

export default Ship