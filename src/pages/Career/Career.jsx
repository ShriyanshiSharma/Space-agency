import React from 'react'
import "./Career.css"
import { tweet ,job} from '../../components/Team'

function Career() {
  return (
    <div className='career'>
      <div className="career__head">
        <div className="header__img">
          <img src="https://skyroot.in/images/careers01.jpeg" alt="imgslider" />
          <img src="https://skyroot.in/images/career2.jpeg" alt="imgslider" />
          <img src="https://skyroot.in/images/career3.jpeg" alt="imgslider" />
          <img src="https://skyroot.in/images/careers02.jpeg" alt="imgslider" />
        </div>
      </div>

      <div className="career__at">
        <h2 data-aos="zoom-in">Life at Skyroot</h2>
        <div className="career__data">
          <p data-aos="zoom-in">Sky is no limit at Skyroot. There is immense opportunity to work on challenging problems that transform the world, while having the required flexibility and fun. Work with the best, and build a rocketing career filled with adventure, learning, growth and fulfilment. </p>
          <p data-aos="zoom-in">Join us and build some of the best Space launch vehicles from India for the world, and be part of a history in the making</p>
        </div>
      </div>
      <div className="career__tweet">
        {
          tweet.map((item,index) => (
            <div className='tweet' > 
              <h3 data-aos="flip-down"><span>"</span>{item.des}</h3>
              <div className="t">
                <img src={item.img} data-aos="flip-right"/>
                <div className="tt">
                  <h5 data-aos="flip-down">{item.name}</h5>
                  <h6 data-aos="flip-down">{item.post}</h6>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="job" >
        <h1 data-aos="slide-left">Join Us</h1>

        {
          job.map((i,index) => (
            <div className="job__container" data-aos="flip-down">
              <div className="apply">
              <h2 data-aos="slide-up">{i.post}</h2>
              <button data-aos="slide-left">Apply</button> 
              
              </div>
              <hr/>

              <h3 data-aos="">Experience</h3>
              <h5>{i.exp}</h5>

              <h3>Location</h3>
              <h5>{i.loc}</h5>

              <h6>{i.des}</h6>
            </div>
          ))
        }


      </div>


    </div>
  )
}

export default Career