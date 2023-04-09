import React from 'react'
import "./Services.css"
import  { useState ,useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';

function Services() {
    useEffect(() =>{
        Aos.init({duration:1000});
    }, [])
  return (
    <div className='services'>
        <img className='bck-img' src="https://skyroot.in/images/launch-services-banner1.jpeg" alt="" />

        <div className="services__at">
            <h2  data-aos="zoom-in">VIKRAM SERIES</h2>
            <div className="about__data">
            <p data-aos="zoom-in">Vikram - named after Dr. Vikram Sarabhai, founder of the Indian Space Program - is a series of modular Space launch vehicles especially crafted for the small satellite market. </p>
            <p  data-aos="zoom-in">More than 20,000 small satellites are estimated to be launched in the coming decade, and Vikram series is designed to enable this through unprecedented mass producibility and affordability. The leading technology architecture of Vikram vehicles offers unique capabilities like multi orbit insertion, interplanetary missions; while providing customized, dedicated and ride share options covering a wide spectrum of small satellite customer needs.</p>
            <p data-aos="zoom-in">Launching satellites to space will soon become as easy as booking a cab - Quick, precise and affordable! </p>
            </div>
        </div>

        <div className="services__ship">
            <div className="services__ship__img">
                <img  data-aos="slide-up" clasName="ship_img" src="https://skyroot.in/images/vikram1.png" alt="" />
            </div>
            <div className="services__ship__img">
                <img data-aos="slide-up" clasName="ship_img" src="https://skyroot.in/images/vikram2.png" alt="" />
            </div>
            <div className="services__ship__img">
                <img data-aos="slide-up" clasName="ship_img" src="https://skyroot.in/images/vikram3.png" alt="" />
            </div>
        </div>

        <div className="service__detail">
            <h1  data-aos="slide-left">PAYLOAD</h1>
            <div className="info">
                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram i</h1>
                    <h3>480 kg to 500 km Low Inclination Orbit</h3>
                    <h3>290 kg to 500 km SSPO</h3>
                </div>

                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram ii</h1>
                    <h3>595 kg to 500 km Low Inclination Orbit</h3>
                    <h3>400 kg to 500 km SSPO</h3>
                </div>

                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram iii</h1>
                    <h3>815 kg to 500 km Low Inclination Orbit</h3>
                    <h3>560 kg to 500 km SSPO</h3>
                </div>
            </div>
            <h1 data-aos="slide-left">ARCHITECTURE</h1>
            <div className="info">
                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram i</h1>
                    <h3>Highly reliable solid propulsion stages with proven design heritage. Miniaturized and Modern Avionics. Ultra-Lowshock Pneumatic separation.</h3>
                </div>

                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram ii</h1>
                    <h3>Advanced Cryogenic Methalox engine replaces upper stage of Vikram 1 .</h3>
                </div>

                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram iii</h1>
                    <h3>815 kg to 500 km Low Inclination OrbitAn Upgrade to Vikram 2 With Additional low cost Strapped on Solid Rocket Boosters</h3>
                </div>
            </div>

            <h1 data-aos="slide-left">FLEXIBLE</h1>
            <div className="info">
                <div className="ship__info  "  data-aos="zoom-in"> 
                    <h1 className='option'>vikram i</h1>
                    <h3>Orbital Adjustment Module with re-start capability enables multi-orbit insertions.</h3>
                </div>

                <div className="flex__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram ii & iii</h1>
                    <h3>Upper stage cryo-engine with re-start capability enables multi-orbit insertions.</h3>
                </div>
            </div>

            <h1 data-aos="slide-left">ECONOMIC</h1>
            <div className="info">
                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram i</h1>
                    <h3>Lowest cost in the payload segment</h3>
                </div>

                <div className="flex__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram ii & iii</h1>
                    <h3 >Lowest cost in the payload segment</h3>
                </div>
            </div>

            <h1 data-aos="slide-left">RESPONSIVE</h1>
            <div className="info">
                <div className="ship__info"  data-aos="zoom-in">
                    <h1 className='option'>vikram i</h1>
                    <h3>Requires Minimal range infrastructure. Can be assembled and launched within 24 hours from any launch site.</h3>
                </div>

                <div className="flex__info"  data-aos="zoom-in">
                    <h1 className='option both'>vikram ii & iii</h1>
                    <h3>Requires Minimal range infrastructure. Can be assembled and launched within 72 hours from any launch site.</h3>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Services