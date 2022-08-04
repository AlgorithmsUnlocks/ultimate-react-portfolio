import React from 'react'
import  './header.css'
import CTA from './CTA'
import Portpic from '../../assets/portpic.png'
import Typical from 'react-typical'
import Devpic from '../../assets/ruman.webp'
import Reviews from '../../assets/reviews.png'

export const Hero = () => {
  return (
    <div className="container-fluid hero-section-bg">
        <div className="container">
           <div className="row">
              <div className="col-md-7">
                <div className='hero-text'>
                    <h1> Professional Front-end <br/>Developer ,<span> <br/>
                        To Create Your Dream Website ! </span></h1>
                    <h2>Hello!<br/>
                        <span>I am Ruman Ahmed </span>
                    </h2>
                    <Typical 
                      loop={Infinity}
                      steps={[
                        "Font-end Developer",
                        1000,
                        "Wordpress Website Developer",
                        1000,
                        "Wordpress Theme Developer",
                        1000,
                        "React Developer",
                        1000,
                        "Personal Blogger",
                        1000
                      ]}
                      wrapper="p"
                    />
                    <CTA />   
                </div> 
              </div>
              <div className="col-md-5">
              <div className='hero-image'>
                    <img srcSet={Devpic} ></img>
                </div>
                 
                
              </div>
           </div>
        </div>
    </div>
  )
}
export default Hero
