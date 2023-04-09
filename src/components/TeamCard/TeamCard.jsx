import React from 'react'
import "./TeamCrad.css"
import  { useState ,useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';

function TeamCard(props) {
    
    useEffect(() =>{
        Aos.init({duration:1000});
    }, [])
  return (
    <div className='teamcard' data-aos="flip-up">
        <img src={props.img} alt="" />
        <div className="team__data">
            <h2 className='name'>{props.name}</h2>
            <h2 className='post'>{props.post}</h2>
            <h2 className='about_team'>{props.about}</h2>
        </div>
    </div>
  )
}

export default TeamCard;