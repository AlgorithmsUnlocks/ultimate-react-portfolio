import React from 'react'
import './footer.css'
import ULinks from '../../assets/usefull-links.gif'
import NLetter from '../../assets/newsletter.gif'
import CInfo from '../../assets/contact-info.gif'

export const FooterMiddle = () => {
  return (
   <>
    <div className='footer-middle'>
      <div className='footer-middle-content'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='usefull-links-col'>
              <img srcSet={ULinks} style={{
                width: '20%',
                margin: 'auto',
              }}></img>
              <h5>Usefull Links</h5>
              <ul className='footer-menu'>
                <li><a href='#'>Hire Me </a></li>   
                <li><a href='#'>Projects </a></li>
              </ul>
              <ul className="footer-social-links">
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-github"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                 
              </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='contact-cols'>
                <img srcSet={CInfo} style={{
                  width: '20%',
                  margin: 'auto',
                }}></img>
              <h5> Contact Informations </h5>
                 <ul>
                  <li><i className="fa-solid fa-location-dot"></i> Sylhet, Bangladesh</li>
                  <li><i className="fa-solid fa-mobile-button"></i> (+880) 01708684896 <br/> (+880) 01708684896</li>
                  <li><i className="fa-solid fa-envelope-circle-check"></i> ruman113666@gmail.com <br/> admin@rumanahmed.com</li>
                 </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='newsletter-cols'>
              <img srcSet={NLetter} style={{
                width: '20%',
                margin: 'auto',
              }}></img>
            <h5>Newsletter</h5>
               <p>coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
export default FooterMiddle
