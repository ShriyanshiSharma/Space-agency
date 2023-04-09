import React from 'react'
import "./Journey.css"
import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Journey() {
    
  useEffect(() =>{
    Aos.init({duration:1000});
}, []) 
  return (
    <div className='journey'>
        <h1 className='journey__head' data-aos="zoom-in">JOURNEY</h1>
        <div className="timeline">

            <div className="container left">
                <h3  data-aos="zoom-in">2022</h3>
                <div className="text-box"  data-aos="flip-left">
                    <h5>May '22</h5>
                    <p>Successfully completes full duration test-firing of Vikram-1 rocket stage</p>
                </div>
            </div>

            <div className="container right" >
                <h3  data-aos="zoom-in">2022</h3>
                <div className="text-box" data-aos="flip-right">
                    <h5>May '22</h5>
                    <p>Wins National Award from Department of Science and Technology (DST), GOI</p>
                </div>
            </div>

            <div className="container left">
                <h3  data-aos="zoom-in">2022</h3>
                <div className="text-box"  data-aos="flip-left">
                    <h5>Jan ‘22</h5>
                    <p>Raised additional US$4.5m, with the total funds raised at US$17m</p>
                </div>
            </div>

            <div className="container right" >
                <h3  data-aos="zoom-in">2021</h3>
                <div className="text-box" data-aos="flip-right">
                    <h5>Nov '21</h5>
                    <p>First Indian company to successfully test fire a 3D printed fully cryogenic engine.</p>
                </div>
            </div>


            <div className="container left" >
                <h3  data-aos="zoom-in">2021</h3>
                <div className="text-box" data-aos="flip-left">
                    <h5>Sep'21</h5>
                    <p>1st Indian private start-up to sign MoU with ISRO for facilities and expertise.</p>
                </div>
            </div>


            <div className="container  right" >
                <h3  data-aos="zoom-in">2021</h3>
                <div className="text-box" data-aos="flip-right">
                    <h5>Jul '21</h5>
                    <p>Raises Series a funding round worth US$11Mn</p>
                </div>
            </div>

            <div className="container left">
                 <h3  data-aos="zoom-in">2020</h3>
                <div className="text-box"  data-aos="flip-left">
                    <h5>Dec '20</h5>
                    <p>1st Indian Pvt. Company to develop and successfully test fire a solid rocket stage.</p>
                </div>
            </div>

            <div className="container right" >
                 <h3  data-aos="zoom-in">2020</h3>
                <div className="text-box" data-aos="flip-right">
                    <h5>Oct '20</h5>
                    <p>Skyroot wins the prestigious National Start-up Award 2020.</p>
                </div>
            </div>


            <div className="container left" >
                 <h3  data-aos="zoom-in">2020</h3>
                <div className="text-box" data-aos="flip-left">
                    <h5>Sep '20</h5>
                    <p>Develops India’s 1st privately built 3D printed cryogenic engine in 2 days.</p>
                </div>
            </div>

            <div className="container right">
                 <h3  data-aos="zoom-in">2020</h3>
                <div className="text-box"  data-aos="flip-right">
                    <h5>Aug '20</h5>
                    <p>Becomes the 1st Indian private company to successfully test fire a full-scale liquid propulsion engine.</p>
                </div>
            </div>


            <div className="container left" >
                 <h3  data-aos="zoom-in">2018</h3>
                <div className="text-box" data-aos="flip-left">
                    <h5>Jul '18</h5>
                    <p>Skyroot established on 12-Jun-2018 with seed funding from Mukesh Bansal.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Journey