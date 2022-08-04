  import React from 'react'
  import './footer.css'
import FooterBottom from './FooterBottom'
import FooterMiddle from './FooterMiddle'
import FooterTop from './FooterTop'

  export const Footer = () => {
    return (
      <>
      <div className='container-fluid footer-bg'>
        <div className='container'>
          <FooterTop />
          <FooterMiddle />
          <FooterBottom />
        </div>
      </div>
      
      </>
    )
  }
  export default Footer
