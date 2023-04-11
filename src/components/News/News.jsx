import React from 'react'
import "./News.css"
import Card from './Card'
import Sdata  from '../Sdata'
import 'aos/dist/aos.css'
import Aos from 'aos';
import  { useState ,useEffect} from 'react'


function News() {
    useEffect(() =>{
        Aos.init({duration:1000});
    }, [])
  return (
    <div className='news'>
        <div className="news__l" data-aos="slide-right">
            <p>press features / articles</p>
        </div>
        <div className="news__display">
            {
                Sdata.map((items,index) => (
                    <Card 
                    key={items.id}
                    id={items.id}
                    img={items.img}
                    channel={items.channel}
                    des={items.des}
                    button={items.button}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default News