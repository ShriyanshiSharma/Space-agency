import React from 'react'
import "./About.css"
import  Team from "../../components/Team"
import TeamCard from '../../components/TeamCard/TeamCard'
import  { useState ,useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import Journey from '../../components/Journey/Journey'
import Sponcer from '../../components/Sponser/Sponcer'
import Award from '../../components/Award/Award'

function About() {
    useEffect(() =>{
        Aos.init({duration:1000});
    }, [])
  return (
    <div className='about'>
        <img src="https://skyroot.in/images/about-banner.jpeg" alt="backgrd"  className='bck-img'/>

        <div className="about__at">
            <h2  data-aos="zoom-in">AT SKYROOT</h2>
            <div className="about__data">
            <p  data-aos="zoom-in">As Earth to Space transportation remains expensive, access to Space has been limited to very few governments and enterprises. Yet Space has transformed our lives for decades through GPS, Satellite internet and television, weather prediction, disaster response, understanding the universe, and many others.</p>
            <p data-aos="zoom-in">At Skyroot, we are on a mission to open Space for all, by pushing the boundaries of today's technology. We are working towards a future where Space becomes part of our lives, and such a transition will transform humankind like never before. </p>
            </div>
        </div>

        <div className="about__team">
            <h1 data-aos="slide-right">Leadership and Core Team</h1>
            <div className="team">
            {
                Team.map((i,index) => {
                    return(
                    
                    <TeamCard
                       key={i.id}
                       id={i.id}
                       img={i.img}
                       name={i.name}
                       post={i.post}
                       about = {i.about}
                    />
                    )
                })
            }
            </div>
        </div>
        <Journey/>
        <Sponcer/>
        <Award/>


    </div>
  )
}

export default About;