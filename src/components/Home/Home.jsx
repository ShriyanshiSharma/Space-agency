import React from 'react'
import "./Home.css"
import bck from "../../assets/5.jpg"


function Home() {
  return (
    <div className='home'>
        <img src={bck} className='home__image'/>
        <div className="home__content" data-aos="zoom-in">
            <h1  >OPENING SPACE FOR ALL</h1>
            <hr/>
            <h5>Space is the next big frontier and at Skyroot we are on a mission to Open Space for all by making Spaceflight affordable, reliable and regular</h5>
        </div>
        <div className="home__div"></div>
    </div>
  )
}

export default Home