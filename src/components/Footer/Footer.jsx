import React from 'react'
import "./Footer.css"
import  { useState ,useEffect} from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';

function Footer() {
    useEffect(() =>{
        Aos.init({duration:1000});
    }, [])
  return (
    <div className='footer'>
        <div className="footer_top" >
            <div className="footer_left" data-aos="zoom-in">
                <img src="https://skyroot.in/images/footer-logo.svg" alt="logo"  className='image'/>
            </div>
            <div className="footer__right" data-aos="zoom-in">
                <div className="footer__up">
                    <p>STAY IN OUR ORBIT</p>
                    <input/>
                    <button>Submit</button>
                </div>
                <hr/>
                <div className="footer__down">
                    <div className="detail">
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Career</p>
                    </div>
                    <div className="detail">
                        <h3>Resources</h3>
                        <p>Launch Services</p>
                        <p>News Room</p>
                    </div>
                </div>
            </div>
            
        </div>
        <hr className="space" />
        <div className="footer__bottom" >
            <div className="info" data-aos="flip-right" >
                <p>info@skyroot.in</p>
            </div>
            <div className="info-social" data-aos="flip-right" >
                <img  src="https://skyroot.in/images/facebook.svg" alt="" />
                <img src="https://skyroot.in/images/twitter.svg" alt="" />
                <img src="https://skyroot.in/images/youtube.svg" alt="" />
                <img src="https://skyroot.in/images/linkedin.svg" alt="" />
                <img src="https://skyroot.in/images/instagram.svg" alt="" />

                
            </div>
            <div className="info"  data-aos="flip-right">
                <p>Copyright @ 2022 Skyroot Aerospace. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}
   




















































export default Footer